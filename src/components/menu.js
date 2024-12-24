"use client";
import { useState, useEffect } from "react";
import { Accordion } from "./Accordian";
import { AccordionItem } from "./AccordianItem";
import { Dishes } from "./menu-dishes";
import { TitleWithAmount } from "./title-with-amount";
import { MenuOptions } from "./menu-options";

export function Menu({ categories }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <></>;
  return (
    <section>
      <Accordion>
        {categories.map((category) => (
          <AccordionItem
            key={category.title}
            title={<TitleWithAmount title={category.title} />}
          >
            <div>
              <MenuImage category={category} />
              <Dishes category={category} />
              <MenuOptions category={category} />
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function MenuImage({ category }) {
  if (
    category == null ||
    category.image == null ||
    category.image.url == null ||
    category.image.alt == null
  ) {
    return <></>;
  }
  return (
    <img src={category.image.url} alt={category.image.url} className="pb-4" />
  );
}
