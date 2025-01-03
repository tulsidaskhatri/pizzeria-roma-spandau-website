"use client";
import { translations } from "@/locales";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DesktopNavigation = ({ locale }) => {
  const t = translations[locale];
  const pathname = usePathname();

  return (
    <nav className={"container hidden bg-primary-1 px-12 text-white sm:block"}>
      <ul className="flex list-none gap-4">
        <NavItem
          href={`/${locale}`}
          active={
            pathname === "/" ||
            pathname === `/${locale}` ||
            pathname === `/${locale}/`
          }
        >
          {t.nav.links.welcome}
        </NavItem>
        <NavItem
          href={`/${locale}/speisekarte`}
          active={
            pathname === `/${locale}/speisekarte` ||
            pathname === `/${locale}/speisekarte/`
          }
        >
          {t.nav.links.menu}
        </NavItem>
      </ul>
    </nav>
  );
};

const NavItem = ({ children, href, active }) => {
  return (
    <li>
      <Link
        href={href}
        className={
          "block py-2" + (active ? " font-bold" : " hover:text-gray-200")
        }
      >
        {children}
      </Link>

      {active ? <hr className="border-b-2 border-primary-2" /> : null}
    </li>
  );
};
