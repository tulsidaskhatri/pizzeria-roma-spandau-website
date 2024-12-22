import Link from "next/link";

export const Footer = () => (
  <footer className="bg-primary-1 py-8 text-xs text-white">
    <div className="container grid grid-cols-2 px-12 sm:grid-cols-5">
      <div>
        <p>Breite Straße 56</p>
        <p>13597 Berlin</p>
        <p>030 - 36750171</p>
      </div>
      <nav>
        <Link href="/">Willkommen!</Link>
        <Link href="/speisekarte">Speisen & Getränke</Link>
      </nav>
    </div>
  </footer>
);
