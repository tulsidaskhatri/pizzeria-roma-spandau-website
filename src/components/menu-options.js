export function MenuOptions({ category }) {
  if (
    category == null ||
    category.options == null ||
    !Array.isArray(category.options) ||
    category.options.length === 0
  ) {
    return <></>;
  }
  return (
    <div className="grid grid-cols-1 gap-x-14 px-6 sm:grid-cols-2">
      {category.options.map((option) => (
        <div
          key={option.key || option.title}
          className="flex justify-between border-b border-solid border-primary-2 px-2 py-3 last:border-b-0"
        >
          <div className="flex flex-1 items-start gap-1">
            <p>{option.title}</p>
            {option.allergies && <p className="text-xs">{option.allergies}</p>}
          </div>

          <div className="flex flex-none gap-3">
            {option.quantity && <p>{option.quantity}</p>}
            <p>{option.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
