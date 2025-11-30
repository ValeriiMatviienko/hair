"use client";
import { AccordionProps } from "@/app/types/types";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => handleAccordionClick(index)}
          >
            <div className="grow">
              <p className="font-semibold text-black md:text-xl">
                {item.question}
              </p>
            </div>
            <div>
              {openIndex === index ? (
                <FaChevronUp className="w-6 h-6 text-black" />
              ) : (
                <FaChevronDown className="w-6 h-6 text-black" />
              )}
            </div>
          </div>
          {openIndex === index && (
            <div className="p-4">
              <p className="text-black md:text-xl">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
