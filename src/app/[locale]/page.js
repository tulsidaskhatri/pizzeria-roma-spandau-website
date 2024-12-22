import { Contact } from "@/components/contact";
import { Credit } from "@/components/credit";
import GoogleMap from "@/components/google-map";
import { Hero } from "@/components/hero";
import { OpeningTime } from "@/components/opening-time";

export default function Home() {
  return (
    <main className="container bg-white">
      <Hero />
      <OpeningTime />
      <GoogleMap />
      <Contact />
      <Credit />
    </main>
  );
}
