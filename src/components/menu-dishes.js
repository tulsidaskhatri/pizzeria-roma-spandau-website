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
          classname="w-full"
          innerClassname="flex w-full py-2 px-4 items-center"
          outerClassname="border-b border-solid border-gray-700 last:border-b-0"
        >
          <div className="flex items-start gap-2 px-10 pb-4">
            <p className="flex-1 text-sm">{dish.ingredients}</p>
            {dish.allergies && <p className="text-xs">{dish.allergies}</p>}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
