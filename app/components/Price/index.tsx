import { Fade } from "react-awesome-reveal";
import { Product } from "@/app/types/types";

const Price = () => {
  const products: Product[] = [
    { name: "Keratine", price: 400 },
    { name: "Botox", price: 350 },
    { name: "Nanoplastia", price: 600 },
    { name: "Mixadance", price: 500 },
    { name: "Haircut", price: 100 },
  ];

  return (
    <div className="relative" id="price-section">
      <div className="px-6 mx-auto max-w-7xl lg:pt-20 sm:pb-24">
        <div className="flex flex-col my-16 space-x-5 lg:grid-cols-12">
          <div className="flex flex-col justify-center col-span-12 lg:col-span-6">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={0.1}
              triggerOnce
            >
              <h2 className="mb-5 text-3xl font-normal text-center uppercase text-black ls-51">
                Price
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={0.1}
              triggerOnce
            >
              <ul className="space-y-4">
                {products.map((product, index) => (
                  <li key={index} className="flex justify-between">
                    <h3 className="text-xl mb-3 font-normal lg:text-3xl text-black">
                      {product.name}
                    </h3>
                    <span className="flex items-center">
                      <span className="ml-4 text-xl font-normal lg:text-3xl text-black">{`${product.price} PLN`}</span>
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
