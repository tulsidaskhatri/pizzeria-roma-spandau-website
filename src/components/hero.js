import { LinkButton } from "./link-button";
import { translations } from "@/locales";

export const Hero = ({ locale }) => {
  const t = translations[locale];
  return (
    <div
      style={{
        backgroundImage: "url('/images/home-colosseum.jpg')",
        backgroundSize: "cover",
        width: "100%",
        height: "480px",
        paddingTop: "340px",
      }}
    >
      <div className="flex justify-center">
        <LinkButton href={`/${locale}/speisekarte`}>
          {t.home.hero.button}
        </LinkButton>
      </div>
    </div>
  );
};
