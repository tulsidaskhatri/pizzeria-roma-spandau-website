import { Contact } from "@/components/contact";
import { Credit } from "@/components/credit";
import GoogleMap from "@/components/google-map";
import { Hero } from "@/components/hero";
import { OpeningTime } from "@/components/opening-time";

export function HomeContent({ locale }) {
  return (
    <section className="container bg-white">
      <Hero locale={locale} />
      <OpeningTime locale={locale} />
      <GoogleMap />
      <Contact locale={locale} />
      <Credit />
    </section>
  );
}
