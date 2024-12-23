import { translations } from "@/locales";
import Link from "next/link";

export const Footer = ({ locale }) => {
  const t = translations[locale];
  return (
    <footer className="bg-primary-1 py-8 text-xs text-white">
      <div className="container grid grid-cols-2 px-12 sm:grid-cols-5">
        <div>
          <p>Breite Straße 56</p>
          <p>13597 Berlin</p>
          <p>030 - 286 495 67</p>
        </div>
        <nav className="flex flex-col gap-2">
          <Link href="/">{t.nav.links.welcome}</Link>
          <Link href="/speisekarte">{t.nav.links.menu}</Link>
        </nav>
      </div>
    </footer>
  );
};
