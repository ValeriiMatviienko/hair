import { ArrowUpRight, Video } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/site-config";

export default async function OnlineConsultationSection() {
  const t = await getTranslations("Index");
  const steps = [
    {
      title: t("consultation_step_1_title"),
      description: t("consultation_step_1_description"),
    },
    {
      title: t("consultation_step_2_title"),
      description: t("consultation_step_2_description"),
    },
    {
      title: t("consultation_step_3_title"),
      description: t("consultation_step_3_description"),
    },
  ];

  return (
    <section
      id="online-consultation-section"
      aria-labelledby="online-consultation-title"
      className="scroll-mt-[5.5rem] border-y border-ink/10 bg-sage/40"
    >
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="section-label">{t("consultation_label")}</p>
            <h2
              id="online-consultation-title"
              className="mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl"
            >
              {t("consultation_title")}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
              {t("consultation_description")}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-ink/10 py-5">
              <div>
                <dt className="section-label">{t("consultation_format_label")}</dt>
                <dd className="mt-2 flex items-center gap-2 text-sm leading-6 text-ink/75">
                  <Video
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-darkgreen"
                    strokeWidth={1.5}
                  />
                  {t("consultation_format")}
                </dd>
              </div>
              <div>
                <dt className="section-label">{t("consultation_duration_label")}</dt>
                <dd className="mt-2 text-sm leading-6 text-ink/75">
                  {t("consultation_duration")}
                </dd>
              </div>
            </dl>

            <a
              href={siteConfig.instagram.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-cta mt-8 gap-3 motion-reduce:transition-none"
            >
              {t("consultation_cta")}
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">
              {t("consultation_placeholder_note")}
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="section-label">{t("consultation_steps_label")}</p>
            <ol className="mt-4">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-t border-ink/10 py-6 last:border-b sm:gap-6 md:py-8"
                >
                  <span
                    aria-hidden="true"
                    className="pt-1 font-display text-2xl text-darkgreen tabular-nums"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink/70">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
