import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HomeContent } from "@/components/home-content";
import { DesktopNavigation } from "@/components/desktop-navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Willkommen! Pizzeria Roma Spandau",
  description: "Bestellen Sie Pizza, Pasta und mehr!",
};

export default function Home() {
  const locale = "de";
  return (
    <html lang={locale}>
      <body
        style={{ backgroundImage: "url('/images/background.jpg')" }}
        className={`${geistSans.variable} ${geistMono.variable} bg-cover bg-fixed antialiased`}
      >
        <main className="flex h-screen flex-col">
          <Header locale={locale} />
          <section className="flex-1 overflow-y-scroll pt-0 sm:pt-6">
            <DesktopNavigation locale={locale} />
            <HomeContent locale={locale} />

            <Footer locale={locale} />
          </section>
        </main>
      </body>
    </html>
  );
}
