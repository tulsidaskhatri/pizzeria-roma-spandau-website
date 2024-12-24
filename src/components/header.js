import { Navigation } from "./navigation";

export const Header = ({ locale }) => {
  return (
    <header className="flex flex-col gap-6">
      <div className="bg-primary-1 py-3">
        <div className="container mx-auto px-4">
          <p className="text-center font-bold text-white sm:text-left">
            Pizzeria Roma Spandau
          </p>
          {/* <div className="flex justify-between">
            <p className="text-center font-bold text-white">
              Pizzeria Roma Spandau
            </p>
            <p className="text-white">{locale.toUpperCase()}</p>
          </div> */}
        </div>
      </div>

      <Navigation locale={locale} />
    </header>
  );
};
