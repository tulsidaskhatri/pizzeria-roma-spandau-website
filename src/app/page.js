import { Hero } from "@/components/hero";
import { OpeningTime } from "@/components/opening-time";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <OpeningTime />
    </main>
  );
}
