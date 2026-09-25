import { BrandLogo } from "./BrandLogo";

export function Navbar() {
  return (
    <header className="ditm-nav">
      <a href="/" className="ditm-nav__brand" aria-label="DitM — strona główna">
        <BrandLogo width={138} />
      </a>

      <nav className="ditm-nav__links" aria-label="Główna nawigacja">
        <a href="#services">Usługi</a>
        <a href="#about">O DitM</a>
        <a href="#contact" className="ditm-nav__cta">Kontakt</a>
      </nav>
    </header>
  );
}
