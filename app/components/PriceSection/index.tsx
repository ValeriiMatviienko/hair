"use client";
import { Fade } from "react-awesome-reveal";
import { getProductPrices } from "./ProductPriceItems";
import { useTranslations } from "next-intl";

const PriceSection = () => {
  const t = useTranslations("Index");
  const productList = getProductPrices(t);

  return (
    <div className="relative pt-4 sm:pt-0" id="price-section">
      <div className="px-4 mx-auto sm:px-6 max-w-7xl lg:pt-20 sm:pb-24">
        <Fade direction={"up"} delay={100} cascade damping={0.1} triggerOnce>
          <div className="text-center">
            <h2 className="mb-4 text-2xl text-center text-black uppercase title-line sm:mb-10 ls-51">
              {t("price_section_title")}
            </h2>
          </div>
        </Fade>
        <Fade direction={"up"} delay={200} cascade damping={0.1} triggerOnce>
          <table className="w-full text-sm text-left text-black md:text-lg">
            <thead className="text-black uppercase ">
              <tr>
                <th scope="col" className="px-3 py-3 text-left lg:text-xl">
                  {t("product_type")}
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-lg text-center lg:text-xl"
                >
                  {t("short_hair")}
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-lg text-center lg:text-xl"
                >
                  {t("mid_hair")}
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-lg text-center lg:text-xl"
                >
                  {t("long_hair")}
                </th>
              </tr>
            </thead>
            <tbody>
              {productList.map((product, index) => (
                <tr key={index} className="border-b ">
                  <td className="px-3 py-3 text-left uppercase s lg:text-xl">
                    {product.name}
                  </td>
                  <td className="px-2 py-3 text-lg text-center md:text-2xl">
                    {`${product.shortHairPrice} zł`}
                  </td>
                  <td className="px-2 py-3 text-lg text-center md:text-2xl">
                    {`${product.midHairPrice} zł`}
                  </td>
                  <td className="px-2 py-3 text-lg text-center md:text-2xl">
                    {`${product.longHairPrice} zł`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fade>
      </div>
    </div>
  );
};

export default PriceSection;
