import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { Arrow } from "./Arrow";
import { site, emailHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link
              href="/"
              className="brand-link"
              aria-label="DitM — strona główna"
            >
              <BrandLogo variant="light" />
            </Link>
            <p>Dobry kod. Praktyczne AI.</p>
          </div>
          <div className="footer-links">
            <Link href="/#uslugi">Co robimy</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
          <a className="footer-email" href={emailHref}>
            {site.email}
            <Arrow diagonal />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DitM</span>
          <span>Software · AI · Automatyzacje</span>
          <a href="#top">Do góry ↑</a>
        </div>
      </div>
    </footer>
  );
}
