"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { MinusIcon, PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border rounded-2xl p-6 md:p-8 bg-white/10 data-[state=open]:bg-white/18", className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-3 md:gap-4 rounded-md py-4 text-left text-[22px] leading-7 transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <div className="relative size-6 shrink-0 translate-y-0.5">
          <PlusIcon className="text-secondary pointer-events-none absolute transition-all duration-300 group-data-[state=open]:opacity-0" />
          <MinusIcon className="text-secondary pointer-events-none absolute transition-all duration-300 opacity-0 group-data-[state=open]:opacity-100" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden font-light text-muted-foreground"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
