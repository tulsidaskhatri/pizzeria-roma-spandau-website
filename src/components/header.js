import { Navigation } from "./navigation";

export const Header = () => {
  return (
    <header className="flex flex-col gap-6">
      <div className="bg-primary py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <p className="text-white">Pizzeria Roma Spandau</p>
            <p className="text-white">EN</p>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};
