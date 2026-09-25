import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/site";
import { AiComparison } from "@/components/AiComparison";
import { Arrow } from "@/components/Arrow";
import { ContactCta } from "@/components/ContactCta";

export const metadata: Metadata = {
  title: "Blog — technologia w praktyce",
  description:
    "O oprogramowaniu, AI i automatyzacji bez marketingowego szumu. Dane ze źródłami i praktyczne wnioski dla firm.",
  alternates: { canonical: "/blog" },
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
    title: "Blog DitM — technologia w praktyce",
    description:
      "Dane, praktyka i konkretne wnioski o AI, oprogramowaniu i automatyzacji.",
    url: "/blog",
  },
};
export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <section className="container page-intro">
        <p className="eyebrow">Notatnik DitM / Blog</p>
        <h1>
          Technologia.
          <br />
          <span>Bez zbędnego szumu.</span>
        </h1>
        <p>
          Dane, doświadczenia i praktyczne wnioski.
          <br />O kodzie, AI i lepszych sposobach pracy.
        </p>
      </section>
      <section className="container blog-list" aria-label="Artykuły">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link className="featured-post" href={`/blog/${post.slug}`}>
              {post.chart === "ai-adoption" && <AiComparison />}
              <div className="featured-post-copy">
                <div className="post-meta">
                  <span>{post.category}</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <span className="text-link">
                  Czytaj artykuł <Arrow diagonal />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </section>
      <ContactCta />
    </>
  );
}
