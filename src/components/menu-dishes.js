import { Accordion } from "./Accordian";
import { AccordionItem } from "./AccordianItem";
import { TitleWithAmount } from "./title-with-amount";

export function Dishes({ category }) {
  if (
    category == null ||
    category.dishes == null ||
    !Array.isArray(category.dishes) ||
    category.dishes.length === 0
  )
    return <></>;
  return (
    <Accordion>
      {category.dishes.map((dish) => (
        <AccordionItem
          key={dish.title}
          title={<TitleWithAmount title={dish.title} amount={dish.price} />}
        >
          <p>{dish.ingredients}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
