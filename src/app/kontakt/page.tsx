import type { Metadata } from "next";
import { Arrow } from "@/components/Arrow";
import { site, emailHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt — porozmawiajmy o Twoim projekcie",
  description:
    "Potrzebujesz oprogramowania, automatyzacji lub szkolenia AI? Skontaktuj się z DitM. Marcin Buczak — e-mail i telefon.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "DitM",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DitM — Software, AI i automatyzacje",
      },
    ],
    title: "Porozmawiajmy o Twoim projekcie — DitM",
    description:
      "Oprogramowanie, automatyzacja i szkolenia AI. Zacznijmy od rozmowy.",
    url: "/kontakt",
  },
};

export default function ContactPage() {
  return (
    <div className="container contact-page">
      <section className="contact-intro">
        <p className="eyebrow">Kontakt / Zróbmy pierwszy krok</p>
        <h1>
          Zacznijmy
          <br />
          od <span>Twojego wyzwania.</span>
        </h1>
        <p>
          Nowy system? Proces do usprawnienia?
          <br />
          AI, z którego zespół chce umieć korzystać?
          <br />
          Opowiedz nam, nad czym pracujesz.
        </p>
      </section>
      <div className="contact-grid">
        <section className="contact-details" aria-labelledby="contact-person">
          <p className="eyebrow">Porozmawiajmy bezpośrednio</p>
          <h2 id="contact-person">{site.contactName}</h2>
          <p className="contact-role">Software Engineer · DitM</p>
          <a className="contact-email" href={emailHref}>
            <span>{site.email}</span>
            <Arrow diagonal />
          </a>
          <a className="contact-phone" href={site.phoneHref}>
            {site.phone}
            <Arrow diagonal />
          </a>
          <p className="contact-note">
            Napisz e-mail lub zadzwoń. Nie potrzebujesz gotowej specyfikacji.
          </p>
        </section>
        <section className="contact-brief" aria-labelledby="brief-title">
          <span className="brief-symbol" aria-hidden="true">
            ↳
          </span>
          <h2 id="brief-title">Wystarczy krótki opis.</h2>
          <p>Na początek przydadzą się odpowiedzi na trzy pytania:</p>
          <ol>
            <li>
              <span>01</span> Co chcesz zbudować lub usprawnić?
            </li>
            <li>
              <span>02</span> Z jakich narzędzi korzystacie obecnie?
            </li>
            <li>
              <span>03</span> Jaki rezultat będzie dla Was sukcesem?
            </li>
          </ol>
          <a className="button button-primary" href={emailHref}>
            Napisz do nas <Arrow diagonal />
          </a>
        </section>
      </div>
    </div>
  );
}
