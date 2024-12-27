export function MultiQuantityMenuOptions({ category }) {
  if (
    category == null ||
    category.multiQuantityOptions == null ||
    !Array.isArray(category.multiQuantityOptions) ||
    category.multiQuantityOptions.length === 0
  ) {
    return <></>;
  }
  return (
    <div className="px-6">
      {category.multiQuantityOptions.map((option) => (
        <div
          key={option.key || option.title}
          className="flex flex-col gap-2 border-b border-solid border-primary-2 px-2 py-3 last:border-b-0"
        >
          <p className="text-center font-bold">{option.title}</p>
          <div className="flex justify-between gap-4">
            <p className="text-sm sm:text-base">{option.subtitle}</p>
            <div className="flex gap-3">
              {option.variations.map((variation) => (
                <div className="flex flex-col" key={variation.quantity}>
                  <p>{variation.quantity}</p>
                  <p>{variation.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
