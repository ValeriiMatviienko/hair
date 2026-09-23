"use client";

import { useTranslations } from "next-intl";
import { socialLinks } from "./SocialLinks";
import OpenHours from "./OpenHours";
import Address from "./Address";
import { siteConfig } from "@/lib/site-config";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const t = useTranslations("Index");

  return (
    <footer className="bg-darkgreen text-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 text-paper md:py-24 lg:px-8">
        <p className="font-display text-4xl font-medium tracking-tight text-paper md:text-6xl">
          Hair by Hanna
        </p>

        <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-6 lg:grid-cols-12 lg:gap-x-10">
          <div className="col-span-full sm:col-span-6">
            <h2 className="footer-label">{t("follow_me")}</h2>
            <div className="mt-4 flex flex-wrap gap-6">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-start"
                >
                  <div className="flex h-11 w-11 items-center justify-center text-paper transition-transform duration-300 group-hover:-translate-y-0.5">
                    <item.Component className="h-6 w-6" />
                  </div>
                  <p className="mt-1 text-sm text-paper/80 underline-offset-4 group-hover:underline">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="footer-label">{t("address")}</h2>
              <div className="mt-3">
                <Address />
              </div>
              <OpenHours />
            </div>
          </div>

          <div className="col-span-full sm:col-span-6">
            <iframe
              title={t("map_title")}
              src={t("location")}
              width="100%"
              height="250"
              className="w-full rounded-sm shadow-lg sm:h-96"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={siteConfig.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-paper/80 underline underline-offset-4 hover:text-paper"
            >
              {t("open_map")}
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-paper/15 pt-6">
          <p className="text-sm text-paper/55">
            Copyright &copy; 2020-{currentYear} Hair by Hanna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
