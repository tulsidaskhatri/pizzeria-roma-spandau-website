"use client";
import { useState, useEffect } from "react";
import { Accordion } from "./Accordian";
import { AccordionItem } from "./AccordianItem";
import { Dishes } from "./menu-dishes";
import { MenuOptions } from "./menu-options";
import { MultiQuantityMenuOptions } from "./multi-quantity-menu-options";

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
            title={<p>{category.title}</p>}
            outerClassname="transition-all duration-300 border-b border-solid border-gray-600"
            innerClassname="transition-all items-center duration-300 flex gap-0 py-2 w-full text-left hover:bg-red-50 px-2"
            activeInnerClassname="rounded-t-xl"
            activeOuterClassname="bg-red-50 my-4 first:mt-0 shadow-2xl border border-gray-400 rounded-xl pb-2"
          >
            <div>
              <MenuImage category={category} />
              <Dishes category={category} />
              <MenuOptions category={category} />
              <MultiQuantityMenuOptions category={category} />
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
    <img
      src={category.image.url}
      alt={category.image.url}
      className="px-4 pb-2 pt-1"
    />
  );
}
