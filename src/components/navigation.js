"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  return (
    <nav className="bg-primary-1 container px-12 text-white">
      <ul className="flex list-none gap-4">
        <NavItem href="/">Welcome!</NavItem>
        <NavItem href="/speisekarte">Food & Drink</NavItem>
      </ul>
    </nav>
  );
};

const NavItem = ({ children, href }) => {
  const pathname = usePathname();
  const isActivePage = href === pathname;
  return (
    <li>
      <Link
        href={href}
        className={
          "block py-2" + (isActivePage ? " font-bold" : " hover:text-gray-200")
        }
      >
        {children}
      </Link>

      {isActivePage ? <hr className="border-primary-2 border-b-2" /> : null}
    </li>
  );
};
