import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const links = [
  { label: "dashboard", href: "/dashboard" },
  { label: "issues", href: "/issues" }
];

const NavBar = () => {
  return (
    <nav className="flex space-x-5 h place-items-center p-5 border-b border-gray-400 border-t border-gray-400 mb-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <li key={link.href} className="text-slate-500 hover:text-slate-800">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
