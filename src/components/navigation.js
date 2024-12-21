import Link from "next/link";

export const Navigation = () => (
  <nav className="bg-primary container px-4 py-2 text-white">
    <ul className="flex list-none gap-4">
      <NavItem href="/">Welcome!</NavItem>
      <NavItem href="/speisekarte">Food & Drink</NavItem>
    </ul>
  </nav>
);

const NavItem = ({ children, href }) => (
  <li>
    <Link href={href}>{children}</Link>
  </li>
);
