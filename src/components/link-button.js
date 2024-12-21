import Link from "next/link";

export const LinkButton = ({ children, href }) => (
  <Link
    className="bg-action-1 hover:bg-action-2 rounded p-2 font-bold text-white shadow"
    href={href}
  >
    {children}
  </Link>
);
