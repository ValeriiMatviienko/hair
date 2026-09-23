import { getTranslations } from "next-intl/server";

export default async function EditorialMark() {
  const t = await getTranslations("Index");

  return (
    <div
      aria-hidden="true"
      className="editorial-mark pointer-events-none relative z-0 overflow-hidden px-4 py-2 select-none md:py-4"
    >
      <p className="mx-auto w-full max-w-full text-center font-display text-[clamp(1.85rem,9vw,6.5rem)] leading-none uppercase tracking-[0.08em] text-darkgreen/10">
        {t("editorial_mark")}
      </p>
    </div>
  );
}
