import { Menu } from "@/components/menu";
import { translations } from "@/locales";

export default async function Spiesen({ params }) {
  const { locale } = await params;
  const t = translations[locale];

  return (
    <main className="container bg-white p-4 sm:p-10">
      <img
        src="/images/steinhof-pizza.jpg"
        alt="Steinhof Pizza"
        className="w-full"
      />

      <div className="flex flex-col gap-5 py-4">
        <div>
          <h2 className="text-3xl text-action-2">{t.menuPage.title}</h2>
          <p className="font-bold text-gray-900">{t.menuPage.subtitle}</p>
        </div>
        <div>
          <p className="font-bold text-green-600">{t.menuPage.marketing1}</p>
          <p className="text-xs text-green-600">{t.menuPage.marketing2}</p>
        </div>
      </div>

      <div className="py-4">
        <Menu categories={t.menuPage.categories} locale={locale} />
      </div>
    </main>
  );
}
