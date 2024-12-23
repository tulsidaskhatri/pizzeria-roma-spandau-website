import { translations } from "@/locales";

const Spiesen = ({ params }) => {
  const { locale } = params;
  const t = translations[locale];

  return (
    <main className="container bg-white p-10">
      <img
        src="/images/steinhof-pizza.jpg"
        alt="Steinhof Pizza"
        className="w-full"
      />

      <h1>{t.menuPage.title}</h1>
    </main>
  );
};

export default Spiesen;
