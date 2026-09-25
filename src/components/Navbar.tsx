"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { Arrow } from "./Arrow";

const links = [
  { href: "/#uslugi", label: "Co robimy" },
  { href: "/#o-nas", label: "O DitM" },
  { href: "/#wspolpraca", label: "Współpraca" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link
          href="/"
          className="brand-link"
          aria-label="DitM — strona główna"
          onClick={() => setOpen(false)}
        >
          <BrandLogo priority />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Zamknij" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="main-navigation"
          className={`main-navigation ${open ? "is-open" : ""}`}
          aria-label="Główna nawigacja"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={
                href === "/blog" && pathname.startsWith("/blog")
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            className="nav-contact"
            href="/kontakt"
            aria-current={pathname === "/kontakt" ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Porozmawiajmy <Arrow diagonal />
          </Link>
        </nav>
      </div>
    </header>
  );
}
