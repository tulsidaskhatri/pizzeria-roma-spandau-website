export function TitleWithAmount({ title, amount }) {
  return (
    <div className="flex justify-between">
      <p>{title}</p>
      <p>{amount}</p>
    </div>
  );
}
