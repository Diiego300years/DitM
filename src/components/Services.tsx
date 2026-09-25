import Link from "next/link";
import { Arrow } from "./Arrow";

const services = [
  {
    id: "software",
    number: "01",
    title: "Software Development",
    subtitle: "Oprogramowanie dopasowane do Twojej pracy.",
    description:
      "Projektujemy i tworzymy aplikacje webowe, narzędzia wewnętrzne oraz integracje. Łączymy to, co już działa, i budujemy to, czego brakuje.",
    tags: ["Aplikacje webowe", "Systemy dedykowane", "Integracje API"],
    link: "Porozmawiajmy o oprogramowaniu",
    icon: "code",
  },
  {
    id: "automatyzacje",
    number: "02",
    title: "AI i automatyzacje",
    subtitle: "Mniej powtarzania. Sprawniejszy proces.",
    description:
      "Automatyzujemy przepływ danych, obsługę dokumentów i codzienne zadania. Włączamy modele AI tam, gdzie pomagają — z kontrolą wyniku i miejscem na decyzję człowieka.",
    tags: ["Workflow", "Praca z dokumentami", "Integracje AI"],
    link: "Porozmawiajmy o automatyzacji",
    icon: "flow",
  },
  {
    id: "szkolenia",
    number: "03",
    title: "Szkolenia AI dla firm",
    subtitle: "Umiejętności, które zostają w zespole.",
    description:
      "Praktyczne warsztaty z ChatGPT i innych narzędzi AI na przykładach z codziennej pracy. Uczymy sprawdzać odpowiedzi, pracować z danymi i samodzielnie usprawniać zadania.",
    tags: [
      "Warsztaty dla zespołów",
      "ChatGPT w pracy",
      "Praktyczne zastosowania",
    ],
    link: "Porozmawiajmy o szkoleniu",
    icon: "learn",
  },
];

function ServiceIcon({ type }: { type: string }) {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {type === "code" ? (
        <>
          <path d="m13 11-9 9 9 9m14-18 9 9-9 9M23 7l-6 26" />
        </>
      ) : type === "flow" ? (
        <>
          <rect x="4" y="4" width="10" height="10" />
          <rect x="26" y="26" width="10" height="10" />
          <path d="M14 9h17v17M9 14v17h17m-4-4 4 4-4 4" />
        </>
      ) : (
        <>
          <path d="m3 13 17-8 17 8-17 8-17-8Zm6 4v12c7 6 15 6 22 0V17M37 13v15" />
        </>
      )}
    </svg>
  );
}

export function Services() {
  return (
    <section
      id="uslugi"
      className="services container"
      aria-labelledby="services-title"
    >
      <div className="section-heading">
        <p className="eyebrow">01 / Co robimy</p>
        <h2 id="services-title">
          Trzy kompetencje.
          <br />
          Jeden działający system.
        </h2>
        <p>
          Łączymy kod, automatyzację i wiedzę zespołu. Dobieramy rozwiązanie do
          problemu.
        </p>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <article key={service.id} className="service-row" id={service.id}>
            <span className="service-number">{service.number}</span>
            <div className="service-title">
              <ServiceIcon type={service.icon} />
              <h3>{service.title}</h3>
            </div>
            <div className="service-copy">
              <h4>{service.subtitle}</h4>
              <p>{service.description}</p>
              <ul className="tags" aria-label="Zakres usługi">
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <Link
              href="/kontakt"
              className="service-link"
              aria-label={service.link}
            >
              <Arrow diagonal />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
