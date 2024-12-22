import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HomeContent } from "@/components/home-content";

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
  title: "Willkommen! Pizzera Roma Spandau",
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
        <Header locale={locale} />
        <HomeContent locale={locale} />
        <Footer locale={locale} />
      </body>
    </html>
  );
}
