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
      className="mt-8 sm:mt-10 space-y-4"
      defaultValue="question-0"
    >
      {items.map(({ question, answer }, index) => (
        <AccordionItem
          key={question ?? index}
          value={`question-${index}`}
          className="bg-accent py-1 px-4 rounded-xl border-none"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
              className={cn(
                "flex flex-1 items-center justify-between pt-4 pb-3 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                "text-start text-lg"
              )}
            >
              {question}
              <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          <AccordionContent className="text-base text-secondary-foreground">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
