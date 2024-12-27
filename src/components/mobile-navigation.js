"use client";
import { useState } from "react";
import Link from "next/link";
import { translations } from "@/locales";
import { usePathname } from "next/navigation";

export function MobileNavigation({ locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[locale];

  const pathname = usePathname();

  // Function to handle menu close on link click
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed left-4 top-4 z-20 rounded bg-blue-600 p-1 text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)} // Toggle menu open/close
        aria-label="Toggle Menu"
      >
        {/* Icon (Burger/Cross) */}
        <div className="relative h-5 w-5">
          {/* Top Bar */}
          <span
            className={`absolute left-0 top-0 h-0.5 w-full rounded bg-white transition-transform duration-300 ${
              isOpen ? "top-1.5 rotate-45" : "top-0 rotate-0"
            }`}
          ></span>
          {/* Middle Bar */}
          <span
            className={`absolute left-0 top-2 h-0.5 w-full rounded bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          {/* Bottom Bar */}
          <span
            className={`absolute left-0 top-3 h-0.5 w-full rounded bg-white transition-transform duration-300 ${
              isOpen ? "top-1.5 -rotate-45" : "top-3 rotate-0"
            }`}
          ></span>
        </div>
      </button>

      {/* Sliding Menu */}
      <div
        className={`fixed left-0 top-14 z-10 h-full transform bg-slate-500 bg-opacity-0 text-white transition-colors duration-300 ${
          isOpen ? "w-full bg-opacity-40" : "w-0 bg-opacity-0"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`h-full w-64 bg-primary-1 duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ul className="space-y-4 p-6">
            <li>
              <Link
                href={`/${locale}`}
                className={`block text-lg hover:text-gray-300 ${
                  pathname === "/" ||
                  pathname === `/${locale}` ||
                  pathname === `/${locale}/`
                    ? "font-bold"
                    : ""
                }`}
                onClick={closeMenu}
              >
                {t.nav.links.welcome}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/speisekarte`}
                className={`block text-lg hover:text-gray-300 ${
                  pathname === `/${locale}/speisekarte` ||
                  pathname === `/${locale}/speisekarte/`
                    ? "font-bold"
                    : ""
                }`}
                onClick={closeMenu}
              >
                {t.nav.links.menu}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
