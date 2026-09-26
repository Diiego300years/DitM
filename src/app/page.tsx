import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ContactCta } from "@/components/ContactCta";
import { AiComparison } from "@/components/AiComparison";
import { Arrow } from "@/components/Arrow";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const latestPost = getAllPosts()[0];
  return (
    <>
      <Hero />
      <Services />
      <section
        className="about-section"
        id="o-nas"
        aria-labelledby="about-title"
      >
        <div className="container about-layout">
          <div>
            <p className="eyebrow">02 / Kim jesteśmy</p>
            <h2 id="about-title">
              Najpierw proces.
              <br />
              Potem technologia.
            </h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              DitM łączy tworzenie oprogramowania z praktycznym wykorzystaniem
              AI.
            </p>
            <p>
              Zaczynamy od tego, jak działa Twoja firma. Sprawdzamy, gdzie
              uciekają czas i informacje, co można połączyć, a co warto zbudować
              od podstaw.
            </p>
            <p>
              Piszemy kod, wdrażamy automatyzacje i uczymy zespoły korzystać z
              nowych narzędzi. Z konkretnym celem i zrozumiałym sposobem
              działania.
            </p>
            <div className="about-principle">
              <span aria-hidden="true">↳</span> Technologia ma pasować do pracy.
              I pomagać ją wykonać.
            </div>
          </div>
        </div>
      </section>
      <section
        className="partners container"
        id="wspolpraca"
        aria-labelledby="partners-title"
      >
        <div>
          <p className="eyebrow">03 / Współpraca</p>
          <h2 id="partners-title">
            Doświadczenie
            <br />
            we współpracy z
          </h2>
        </div>
        <ul
          className="partner-names"
          aria-label="Firmy, z którymi współpracujemy"
        >
          <li>
            <a
              href="https://firma-pro.com/pl/"
              className="partner-logo partner-logo-pro"
              aria-label="PRO Sp. z o.o. — oficjalna strona"
            >
              <Image
                src="/partners/pro-logo.png"
                alt="PRO Sp. z o.o."
                width={1378}
                height={568}
                sizes="(max-width: 760px) 40vw, 200px"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.sonniger.com/"
              className="partner-logo partner-logo-sonniger"
              aria-label="SONNIGER — oficjalna strona"
            >
              <Image
                src="/partners/sonniger-logo.svg"
                alt="SONNIGER"
                width={245}
                height={33}
              />
            </a>
          </li>
        </ul>
      </section>
      {latestPost && (
        <section
          className="insights container"
          aria-labelledby="insights-title"
        >
          <div className="insights-header">
            <div>
              <p className="eyebrow">04 / Z notatnika DitM</p>
              <h2 id="insights-title">
                Mniej szumu.
                <br />
                Więcej konkretów.
              </h2>
            </div>
            <Link className="text-link" href="/blog">
              Przejdź do bloga <Arrow />
            </Link>
          </div>
          <Link className="featured-post" href={`/blog/${latestPost.slug}`}>
            {latestPost.chart === "ai-adoption" && <AiComparison compact />}
            <div className="featured-post-copy">
              <span className="eyebrow">
                {latestPost.category} / Dane i praktyka
              </span>
              <h3>{latestPost.title}</h3>
              <p>{latestPost.description}</p>
              <span className="text-link">
                Czytaj artykuł <Arrow diagonal />
              </span>
            </div>
          </Link>
        </section>
      )}
      <ContactCta />
    </>
  );
}
