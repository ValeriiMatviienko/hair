import { useTranslations } from "next-intl";
import { socialLinks } from "./SocialLinks";
import OpenHours from "./OpenHours";
import { FC } from "react";

const currentYear = new Date().getFullYear();

const Footer: FC = () => {
  const t = useTranslations("Index");

  return (
    <div className="px-4 py-12 mx-auto md:py-18 lg:px-8 max-w-7xl">
      <div className="grid grid-cols-1 my-12 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
        <div className="col-span-full sm:col-span-6">
          <h2 className="mb-4 text-lg font-semibold text-center uppercase">
            {t("follow_me")}:
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-5">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center"
              >
                <div className="flex flex-col items-center hover:underline">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full md:w-14 md:h-14 ">
                    <item.Component className="w-full h-full" />
                  </div>
                  <p className="mt-2 text-lg text-center text-black">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className="py-4">
            <h2 className="mb-2 text-lg font-semibold text-center uppercase">
              {t("adress")}:
            </h2>
            <div className="text-lg text-center hover:underline ">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Aleja+Armii+Krajowej+48+Wrocław+(Krzyki)"
                target="_blank"
                rel="noopener noreferrer"
              >
                al. Armii Krajowej 48 <br /> Wrocław (Krzyki)
              </a>
            </div>
            <OpenHours />
          </div>
        </div>
        <div className="col-span-full sm:col-span-6">
          <iframe
            title="Hair by Hanna Location"
            src={t("location")}
            width="100%"
            height="250"
            className="w-full rounded-lg shadow-lg sm:h-96"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="items-center border-t">
        <h3 className="text-center text-black md:text-lg md:text-start">
          &quot;Copyright &copy; {currentYear} Hair by Hanna. All rights
          reserved.&quot;
        </h3>
      </div>
    </div>
  );
};

export default Footer;
