"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Price = () => {
  const products = [
    { name: "Apple", price: 5.2 },
    { name: "Banana", price: 3.8 },
    { name: "Carrot", price: 2.5 },
    { name: "Doughnut", price: 7.0 },
    { name: "Egg", price: 1.2 },
  ];
  return (
    <div className="relative" id="price-section">
      <div className="px-6 mx-auto max-w-7xl lg:pt-20 sm:pb-24">
        <div className="grid grid-cols-1 my-16 space-x-5 lg:grid-cols-12">
          <div className="flex justify-start col-span-6">
            <Image
              src="/images/5908.jpg"
              alt="nothing"
              width={636}
              height={808}
            />
          </div>

          <div className="flex flex-col justify-center col-span-6">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="mb-3 text-lg font-normal uppercase text-pink ls-51 text-start">
                cook with us
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl font-semibold text-black lg:text-5xl text-start">
                Cooking together with the expert.
              </h3>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="mt-2 mb-10 font-normal text-grey md:text-lg text-start">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem{" "}
              </p>
              <p className="mt-1 mb-10 font-normal text-grey md:text-lg text-start">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium....
              </p>
              <div className="flex justify-center align-middle md:justify-start">
                <button className="px-6 py-5 mr-6 text-xl font-medium text-white rounded-full bg-pink lg:px-10">
                  Learn more
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
