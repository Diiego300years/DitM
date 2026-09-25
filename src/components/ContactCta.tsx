import Link from "next/link";
import { Arrow } from "./Arrow";

export function ContactCta() {
  return (
    <section className="contact-cta" aria-labelledby="contact-cta-title">
      <div className="container cta-layout">
        <div>
          <p className="eyebrow">Zacznijmy od rozmowy</p>
          <h2 id="contact-cta-title">
            Co możemy
            <br />
            uprościć w Twojej firmie?
          </h2>
        </div>
        <div className="cta-detail">
          <p>
            Opowiedz o procesie, który zabiera czas, lub systemie, którego
            potrzebujesz. Wspólnie ustalimy pierwszy krok.
          </p>
          <Link className="button button-primary" href="/kontakt">
            Porozmawiajmy o projekcie <Arrow diagonal />
          </Link>
        </div>
      </div>
    </section>
  );
}
