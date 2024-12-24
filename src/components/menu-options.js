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
    <div className="grid grid-cols-2 gap-x-14 py-7">
      {category.options.map((option) => (
        <div
          key={option.title}
          className="flex justify-between border-b-2 border-gray-100 py-3 last:border-b-0"
        >
          <p>{option.title}</p>
          <p>{option.price}</p>
        </div>
      ))}
    </div>
  );
}
