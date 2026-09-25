import Link from "next/link";
import { Arrow } from "./Arrow";
import { ProcessDiagram } from "./ProcessDiagram";

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">
          <span className="small-square" aria-hidden="true" /> Software. AI.
          Automatyzacje.
        </p>
        <h1 id="hero-title">
          Dobry kod.
          <br />
          Mniej pracy.
          <br />
          <span>Więcej możliwości.</span>
        </h1>
        <p className="hero-description">
          Budujemy oprogramowanie, łączymy systemy i wdrażamy AI. Żeby Twój
          zespół mógł skupić się na pracy, która ma znaczenie.
        </p>
        <div className="hero-actions">
          <Link href="/kontakt" className="button button-primary">
            Porozmawiajmy <Arrow diagonal />
          </Link>
          <Link href="#uslugi" className="text-link">
            Zobacz, co robimy <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </div>
      <ProcessDiagram />
      <div className="hero-baseline">
        <span>Od zrozumienia procesu do wdrożenia.</span>
        <a href="#o-nas">
          Poznaj DitM <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
