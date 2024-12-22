import { Contact } from "@/components/contact";
import { Credit } from "@/components/credit";
import GoogleMap from "@/components/google-map";
import { Hero } from "@/components/hero";
import { OpeningTime } from "@/components/opening-time";

export default async function Home({ params }) {
  const { locale } = await params;
  return (
    <main className="container bg-white">
      <Hero locale={locale} />
      <OpeningTime locale={locale} />
      <GoogleMap />
      <Contact locale={locale} />
      <Credit />
    </main>
  );
}
