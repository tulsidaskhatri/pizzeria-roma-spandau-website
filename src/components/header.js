import { MobileNavigation } from "./mobile-navigation";
import { DesktopNavigation } from "./desktop-navigation";

export const Header = ({ locale }) => {
  return (
    <header className="flex flex-col gap-6">
      <div className="fixed w-full bg-primary-1 py-3">
        <div className="container mx-auto flex items-center gap-4 px-4">
          <MobileNavigation locale={locale} />
          <p className="font-bold text-white">
            <a href={`/${locale}`}>Pizzeria Roma Spandau</a>
          </p>
          {/* <div className="flex justify-between">
            <p className="text-center font-bold text-white">
              Pizzeria Roma Spandau
            </p>
            <p className="text-white">{locale.toUpperCase()}</p>
          </div> */}
        </div>
      </div>

      <DesktopNavigation locale={locale} />
    </header>
  );
};
