import { translations } from "@/locales";

export const OpeningTime = ({ locale }) => {
  const t = translations[locale];
  const { title, days } = t.home.timetable;
  return (
    <section className="flex flex-col gap-12 px-6 py-3 sm:px-12">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-3xl font-bold text-action-2">{title}</h2>
        <p>Breite Straße 56 | 13597 Berlin - Spandau | Deutschland</p>
      </div>

      <ul className="flex flex-col">
        <DaysTimes
          days={`${days.monday} - ${days.sunday}`}
          times="11:00 - 00:00"
        />
      </ul>

      <hr className="border-black" />
    </section>
  );
};
const DaysTimes = ({ days, times }) => (
  <li className="flex justify-between">
    <p>{days}</p>
    <p>{times}</p>
  </li>
);
