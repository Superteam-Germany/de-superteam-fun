"use client";
import React, { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface Props {
  children?: React.ReactNode;
  items: { title: React.ReactNode; content: React.ReactNode }[];
}

const AccordionWrapper: FC<Props> = ({ children, items }) => {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {items.map(({ title, content }, key) => (
        <AccordionItem key={key} value={`item-${key}`}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionWrapper;
