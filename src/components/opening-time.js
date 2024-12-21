export const OpeningTime = () => (
  <section className="m-3 flex flex-col gap-3">
    <div className="flex flex-col gap-1 text-center">
      <h2 className="text-3xl font-bold text-action-2">
        Öffnungszeiten & Standort
      </h2>
      <p>Breite Straße 56 | 13597 Berlin - Spandau | Deutschland</p>
    </div>

    <ul className="flex flex-col">
      <DaysTimes days="Monday - Thursday" times="10:00 - 23:00" />
      <DaysTimes days="Friday - Saturday" times="10:00 - 00:00" />
      <DaysTimes days="Sunday" times="12:00 - 22:00" />
    </ul>
  </section>
);

const DaysTimes = ({ days, times }) => (
  <li className="flex justify-between">
    <p>{days}</p>
    <p>{times}</p>
  </li>
);
