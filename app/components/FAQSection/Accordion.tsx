"use client";

import { AccordionProps } from "@/app/types/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const CustomAccordion = ({ items }: AccordionProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="mt-2 space-y-0"
      defaultValue="question-0"
    >
      {items.map(({ question, answer }, index) => (
        <AccordionItem
          key={question ?? index}
          value={`question-${index}`}
          className="border-b border-ink/10 bg-transparent px-0"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
              className={cn(
                "flex flex-1 items-center justify-between gap-4 py-5 text-start font-medium tracking-tight transition-colors hover:text-darkgreen [&[data-state=open]>svg]:rotate-45",
                "text-lg",
              )}
            >
              <span className="flex items-start gap-4">
                <span className="mt-1 hidden font-display text-sm text-ink/35 tabular-nums sm:inline">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{question}</span>
              </span>
              <PlusIcon className="h-5 w-5 shrink-0 text-ink/45 transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          <AccordionContent className="text-base leading-relaxed text-ink/70">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
