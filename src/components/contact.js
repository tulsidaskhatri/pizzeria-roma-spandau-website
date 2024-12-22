import { tranlations } from "@/locales";

export const Contact = ({ locale }) => {
  const t = tranlations[locale];
  return (
    <div className="grid grid-cols-1 gap-8 bg-primary-1 px-6 py-8 text-center text-white sm:grid-cols-2 sm:px-12">
      <Info title={t.home.address.title}>
        <p>Breite Straße 56</p>
        <p>13597 Berlin | Spandau</p>
        <p>Deutschland</p>
      </Info>

      <Info title={t.home.contact.title}>
        <p>030 - 367 501 71</p>
        <p>{t.home.contact.message1}</p>
        <p>{t.home.contact.message2}</p>
      </Info>
    </div>
  );
};

const Info = ({ children, title }) => (
  <div className="flex flex-col gap-4">
    <h2 className="text-2xl font-bold">{title}</h2>
    <div>{children}</div>
  </div>
);
