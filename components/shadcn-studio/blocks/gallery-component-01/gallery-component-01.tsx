"use client";

import { useState } from "react";
import Image from "next/image";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import type { CertificateImage, CertificateSection } from "@/lib/certificates";
import {
  Dialog,
  DialogDescription,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";

type GalleryProps = {
  title: string;
  description: string;
  sections: CertificateSection[];
};

const Gallery = ({ title, description, sections }: GalleryProps) => {
  const t = useTranslations("Index");
  const [selected, setSelected] = useState<CertificateImage | null>(null);

  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h1 className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl lg:text-5xl">
            <span className="relative z-1">
              {title}
              <span
                className="bg-primary absolute bottom-1 left-0 -z-1 h-px w-full"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl">{description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className={cn({ "grid grid-cols-2 gap-6": section.type === "grid" })}
            >
              {section.images.map((image) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setSelected(image)}
                  aria-haspopup="dialog"
                  aria-label={t("certificates_open", { number: image.number })}
                  className="group relative block w-full overflow-hidden rounded-lg focus-visible:ring-2 focus-visible:ring-darkgreen"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={900}
                    sizes={
                      section.type === "grid"
                        ? "(min-width: 768px) 25vw, 50vw"
                        : "(min-width: 768px) 50vw, 100vw"
                    }
                    className="aspect-[4/3] h-auto w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogPortal>
          <DialogPrimitive.Content
            aria-label={t("certificates_viewer_label")}
            className="fixed inset-0 z-[80] h-[100dvh] w-screen max-w-none translate-x-0 translate-y-0 border-0 bg-ink/90 p-0 shadow-none outline-none"
          >
            <DialogTitle className="sr-only">
              {selected?.alt ?? t("certificates_viewer_label")}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {t("certificates_close_overlay")}
            </DialogDescription>
            <div
              className="flex h-full w-full items-center justify-center p-4 md:p-8"
              onClick={() => setSelected(null)}
            >
              <button
                type="button"
                aria-label={t("certificates_close")}
                onClick={(event) => {
                  event.stopPropagation();
                  setSelected(null);
                }}
                className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-paper text-ink focus-visible:ring-2 focus-visible:ring-paper"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
              {selected ? (
                <div
                  className="relative h-[min(90dvh,92vw)] w-[min(92vw,1400px)]"
                  onClick={(event) => event.stopPropagation()}
                >
                  <Image
                    src={selected.src}
                    alt={selected.alt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              ) : null}
            </div>
          </DialogPrimitive.Content>
        </DialogPortal>
      </Dialog>
    </section>
  );
};

export default Gallery;
