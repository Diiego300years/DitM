# DitM

Strona firmowa DitM: oprogramowanie, AI, automatyzacje i szkolenia dla firm.

## Uruchomienie

Node.js 24 LTS, npm i plik `package-lock.json` w repozytorium.

```bash
npm ci
npm run dev
```

Aplikacja jest dostępna pod `http://localhost:3000`.

```bash
npm run check  # ESLint, TypeScript i build produkcyjny
npm start     # uruchomienie wcześniej zbudowanej wersji produkcyjnej
```

## Stack i struktura

Next.js 16 / App Router, React 19, TypeScript, Tailwind CSS 4. Statyczne strony generowane w czasie buildu. JavaScript po stronie klienta obsługuje tylko nawigację. Bez CMS, bazy danych, zewnętrznych skryptów śledzących i backendu formularza. Fonty Manrope i Inter są hostowane razem z aplikacją.

- `src/app` — trasy, layout, style, metadata, sitemap, robots i obraz Open Graph.
- `src/components` — wspólne komponenty i sekcje.
- `src/lib/site.ts` — dane kontaktowe i adres strony.
- `src/lib/blog.ts` — odczyt i walidacja Markdown z metadanymi.
- `content/blog` — wpisy i źródła.
- `public/brand` — warianty logo skorygowane według potwierdzonego wzoru DM.
- `docs/brand/BRAND.md` — oryginalny przewodnik marki.
- `docs/WEBSITE.md` — decyzje projektowe i zasady rozbudowy.

## Podstrony

- `/` — strona główna, usługi, o firmie, współpraca i CTA.
- `/blog` — lista artykułów.
- `/blog/ai-w-polskich-firmach` — pierwszy artykuł z danymi Eurostatu za lata 2023–2025.
- `/kontakt` — bezpośredni e-mail i telefon.

## Dodawanie wpisu

Dodaj `content/blog/nazwa-wpisu.md`. Nazwa pliku staje się adresem wpisu. Wzoruj się na pierwszym artykule:

```yaml
---
title: "Tytuł"
date: "2026-09-25"
description: "Opis do listy artykułów."
category: "AI w biznesie"
seoTitle: "Tytuł SEO"
seoDescription: "Opis SEO"
sources:
  - id: "zrodlo-1"
    title: "Tytuł publikacji"
    publisher: "Instytucja"
    published: "25.09.2026"
    dataYear: "2025"
    url: "https://example.org/raport"
---
Treść Markdown. [Odnośnik do źródła](#zrodlo-1).
```

Dla tekstu bez źródeł użyj `sources: []`. Pole `chart: "ai-adoption"` jest opcjonalne i zarezerwowane dla pierwszego wpisu. Artykuły sortowane są po dacie i pojawiają się automatycznie na blogu oraz w sitemap. Najnowszy jest promowany na stronie głównej. Nie dodawaj przyszłych szkiców do tego katalogu, ponieważ wszystkie pliki `.md` są publikowane. Markdown to zaufana treść redakcyjna z repozytorium; nie przekazuj do renderera treści z formularzy.

## Vercel

Wersja publiczna: **https://ditm.vercel.app**. Projekt Vercel: `ditm`.

Importuj **istniejące** repozytorium `Diiego300years/DitM`, framework **Next.js**, katalog główny `./`, Node.js **24.x**. Instalacja `npm ci`, build `npm run build`. Ustawienia są zapisane w `vercel.json`.

Nie są wymagane żadne sekrety. Adres dla canonical, sitemap i Open Graph jest wykrywany z `VERCEL_PROJECT_PRODUCTION_URL` lub `VERCEL_URL`. Po podłączeniu własnej domeny ustaw `NEXT_PUBLIC_SITE_URL=https://twoja-domena.pl` i wykonaj ponowny deployment. Lokalnie adresem bazowym jest `http://localhost:3000`. Preview Vercela blokuje indeksowanie przez `robots.txt`.

## Branding i kontakt

Pełne ciemne logo: navbar; wariant jasny: footer; istniejący `public/favicon.svg`: favicon. Geometrię SVG poprawiono 26.09.2026 zgodnie z wybranym monogramem DM. Wzór i pochodzenie plików są opisane w `docs/brand/BRAND.md`.

Kontakt pochodzi z pierwotnego README oraz przewodnika marki: Marcin Buczak, Software Engineer, `marcin.buczakk@gmail.com`, `+48 798 380 737`. Nie dodano niepotwierdzonych referencji ani zakresów prac dla PRO Sp. z o.o. i SONNIGER.
