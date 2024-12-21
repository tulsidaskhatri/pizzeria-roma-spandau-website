import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ backgroundImage: "url('/images/background.jpg')" }}
        className={`${geistSans.variable} ${geistMono.variable} bg-cover antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
