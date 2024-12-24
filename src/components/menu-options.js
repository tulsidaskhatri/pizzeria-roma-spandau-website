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
    <div className="grid grid-cols-2 gap-x-14 px-8">
      {category.options.map((option) => (
        <div
          key={option.key || option.title}
          className="flex justify-between border-b-2 border-gray-100 py-3 last:border-b-0"
        >
          <div className="flex gap-2">
            <div className="flex items-start gap-1">
              <p>{option.title}</p>
              {option.allergies && (
                <p className="text-xs">{option.allergies}</p>
              )}
            </div>

            {option.quantity && <p>{option.quantity}</p>}
          </div>

          <p>{option.price}</p>
        </div>
      ))}
    </div>
  );
}
