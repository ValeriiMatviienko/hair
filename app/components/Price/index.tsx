"use client";
import { Fade } from "react-awesome-reveal";
import { ProductList } from "./ProductPriceItems";

const Price = () => {
  return (
    <div className="relative pt-4 sm:pt-0" id="price-section">
      <div className="px-4 mx-auto sm:px-6 max-w-7xl lg:pt-20 sm:pb-24">
        <div className="flex flex-col my-8 space-x-0 sm:my-16 sm:space-x-5 lg:grid-cols-12">
          <div className="flex flex-col justify-center col-span-12 lg:col-span-6">
            <Fade
              direction={"up"}
              delay={100}
              cascade
              damping={0.1}
              triggerOnce
            >
              <h2 className="mb-4 text-2xl font-normal text-center text-black uppercase sm:mb-5 sm:text-3xl ls-51">
                Price
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={100}
              cascade
              damping={0.1}
              triggerOnce
            >
              <ul className="space-y-2 sm:space-y-4">
                {ProductList.map((product, index) => (
                  <li key={index} className="flex justify-between">
                    <h3 className="mb-2 text-lg font-normal text-black sm:text-xl sm:mb-3 lg:text-3xl">
                      {product.name}
                    </h3>
                    <span className="flex items-center">
                      <span className="ml-2 text-lg font-normal text-black sm:ml-4 sm:text-xl lg:text-3xl">{`${product.price} PLN`}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
