import * as THREE from "three";

type HairField = {
  dispose: () => void;
};

const LINE_COUNT = 32;
const SEGMENTS = 56;
const GREEN = 0x1a4c3d;

export function createHairField(
  canvas: HTMLCanvasElement,
  host: HTMLElement,
): HairField | null {
  let renderer: THREE.WebGLRenderer;

  try {
    const context = canvas.getContext("webgl2", {
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });

    if (!context || context.isContextLost() || !context.getContextAttributes()) {
      return null;
    }

    const vertexPrecision = context.getShaderPrecisionFormat(
      context.VERTEX_SHADER,
      context.HIGH_FLOAT,
    );
    const fragmentPrecision = context.getShaderPrecisionFormat(
      context.FRAGMENT_SHADER,
      context.HIGH_FLOAT,
    );

    if (!vertexPrecision || !fragmentPrecision) {
      return null;
    }

    renderer = new THREE.WebGLRenderer({
      canvas,
      context,
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
  } catch {
    return null;
  }
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;

  const strands = Array.from({ length: LINE_COUNT }, (_, index) => {
    const positions = new Float32Array(SEGMENTS * 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.LineBasicMaterial({
      color: GREEN,
      transparent: true,
      opacity: 0.09 + (index % 6) * 0.015,
    });

    scene.add(new THREE.Line(geometry, material));

    return {
      geometry,
      material,
      positions,
      column: (index / (LINE_COUNT - 1)) * 1.7 - 0.95,
      phase: index * 0.37,
      freq: 1.05 + (index % 5) * 0.18,
      drift: 0.035 + (index % 4) * 0.01,
    };
  });

  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  let visible = true;
  let frame = 0;
  let running = true;

  const resize = () => {
    const width = host.clientWidth;
    const height = host.clientHeight;
    if (width === 0 || height === 0) return;
    renderer.setSize(width, height, false);
  };

  const onPointer = (event: PointerEvent) => {
    const rect = host.getBoundingClientRect();
    pointer.tx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.ty = ((event.clientY - rect.top) / rect.height) * 2 - 1;
  };

  const onVisibility = () => {
    visible = document.visibilityState === "visible";
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting && document.visibilityState === "visible";
    },
    { threshold: 0.08 },
  );
  observer.observe(host);

  window.addEventListener("pointermove", onPointer, { passive: true });
  document.addEventListener("visibilitychange", onVisibility);
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  resize();

  const draw = (time: number) => {
    if (!running) return;
    frame = window.requestAnimationFrame(draw);
    if (!visible) return;

    pointer.x += (pointer.tx - pointer.x) * 0.045;
    pointer.y += (pointer.ty - pointer.y) * 0.045;

    const t = time * 0.00028;

    for (const strand of strands) {
      for (let i = 0; i < SEGMENTS; i += 1) {
        const y = 1.08 - (i / (SEGMENTS - 1)) * 2.16;
        const wave =
          Math.sin(y * strand.freq * 2.1 + t + strand.phase) * strand.drift;
        const lean = pointer.x * 0.08 * (1 - i / SEGMENTS);
        const lift = pointer.y * 0.03 * Math.sin(i * 0.12 + strand.phase);
        const x = strand.column + wave + lean + lift;

        strand.positions[i * 3] = x;
        strand.positions[i * 3 + 1] = y;
        strand.positions[i * 3 + 2] = 0;
      }
      strand.geometry.attributes.position.needsUpdate = true;
    }

    renderer.render(scene, camera);
  };

  frame = window.requestAnimationFrame(draw);

  return {
    dispose: () => {
      if (!running) return;
      running = false;
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
      for (const strand of strands) {
        strand.geometry.dispose();
        strand.material.dispose();
      }
      renderer.dispose();
      renderer.forceContextLoss();
    },
  };
}
