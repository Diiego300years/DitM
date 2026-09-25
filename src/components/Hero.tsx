import { BrandLogo } from "./BrandLogo";

export function Hero() {
  return (
    <section className="ditm-hero">
      <div className="ditm-hero__content">
        <div className="ditm-hero__eyebrow">
          <BrandLogo compact width={34} />
          <span>Software · AI · Automation</span>
        </div>

        <h1>Technologia, która upraszcza pracę.</h1>

        <p>
          Projektujemy oprogramowanie, automatyzacje i rozwiązania AI,
          które rozwiązują konkretne problemy biznesowe.
        </p>

        <div className="ditm-hero__actions">
          <a href="#contact" className="ditm-button ditm-button--primary">
            Porozmawiajmy
          </a>
          <a href="#services" className="ditm-button ditm-button--secondary">
            Zobacz możliwości
          </a>
        </div>
      </div>

      <div className="ditm-hero__visual" aria-hidden="true">
        <BrandLogo compact width={180} />
      </div>
    </section>
  );
}
