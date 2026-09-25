import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, renderMarkdown } from "@/lib/blog";
import { formatDate, siteUrl } from "@/lib/site";
import { AiComparison } from "@/components/AiComparison";
import { ContactCta } from "@/components/ContactCta";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      locale: "pl_PL",
      siteName: "DitM",
      title: post.title,
      description: post.seoDescription,
      url: `/blog/${slug}`,
      publishedTime: post.date,
      authors: ["DitM"],
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.seoDescription,
      images: ["/opengraph-image"],
    },
  };
}
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: `${post.date}T12:00:00+02:00`,
    author: { "@type": "Organization", name: "DitM", url: siteUrl.href },
    mainEntityOfPage: new URL(`/blog/${slug}`, siteUrl).href,
    image: new URL("/opengraph-image", siteUrl).href,
    inLanguage: "pl-PL",
  };
  return (
    <>
      <article className="container article-layout">
        <header className="article-header">
          <Link href="/blog" className="text-link back-link">
            ← Wszystkie artykuły
          </Link>
          <div className="post-meta">
            <span>{post.category}</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>Redakcja DitM</span>
          </div>
          <h1>{post.title}</h1>
          <p className="article-description">{post.description}</p>
        </header>
        <div className="article-grid">
          <aside className="article-aside">
            {post.chart === "ai-adoption" && (
              <>
                <AiComparison compact />
                <p className="aside-source">
                  Dane za 2025 · <a href="#eurostat-2025">Eurostat, 11.12.2025</a>
                </p>
              </>
            )}
            <a className="text-link" href="#zrodla">
              Wszystkie źródła ↓
            </a>
          </aside>
          <div className="article-main">
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />
            <section
              className="article-sources"
              id="zrodla"
              aria-labelledby="sources-title"
            >
              <p className="eyebrow">Materiały źródłowe</p>
              <h2 id="sources-title">Dane, które można sprawdzić.</h2>
              <ol>
                {post.sources.map((source) => (
                  <li key={source.id} id={source.id}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.title}{" "}
                      <span aria-label="otwiera się w nowej karcie">↗</span>
                    </a>
                    <p>
                      {source.publisher} · publikacja: {source.published}
                      <br />
                      Rok danych: {source.dataYear}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="sources-date">
                Źródła sprawdzone: {formatDate(post.date)}.
              </p>
            </section>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </article>
      <ContactCta />
    </>
  );
}
