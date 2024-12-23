"use client";
import { useState, useEffect } from "react";
import { Accordion } from "./Accordian";
import { AccordionItem } from "./AccordianItem";

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
              <img src={category.image.url} alt={category.image.url} />
              <Accordion>
                {category.dishes.map((dish) => (
                  <AccordionItem
                    key={dish.title}
                    title={
                      <TitleWithAmount title={dish.title} amount={dish.price} />
                    }
                  >
                    <p>{dish.ingredients}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

const TitleWithAmount = ({ title, amount }) => (
  <div className="flex justify-between">
    <p>{title}</p>
    <p>{amount}</p>
  </div>
);
