"use client";
import { AccordionProps } from "@/app/types/types";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
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
            <p className="font-semibold text-black md:text-xl">
              {item.question}
            </p>
            {openIndex === index ? (
              <ChevronUpIcon className="w-6 h-6 text-black" />
            ) : (
              <ChevronDownIcon className="w-6 h-6 text-black" />
            )}
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
