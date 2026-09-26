# Kierunek strony DitM

## Stan wyjściowy

Repozytorium na commicie `84d0897` zawierało branding, cztery pliki SVG, komponenty BrandLogo, Navbar i Hero oraz dwa arkusze CSS. Nie zawierało package.json, routingu ani uruchamialnej aplikacji. Dodano Next.js w istniejącym repozytorium.

## Logo i system wizualny

| Miejsce                    | Plik                               | Zasada                          |
| -------------------------- | ---------------------------------- | ------------------------------- |
| Navbar                     | `public/brand/ditm-logo.svg`       | Jasne tło, oryginalne proporcje |
| Footer                     | `public/brand/ditm-logo-light.svg` | Granatowe tło                   |
| Favicon                    | `public/favicon.svg`               | Istniejący monogram             |
| Rezerwa do małych formatów | `public/brand/ditm-mark.svg`       | Geometria jak w navbarze             |

- Paleta: niebieski `#2F6BFF`, granat `#0F172A`, biel, szarość `#F5F7FA`. Tekst pomocniczy `#586579` dla czytelności na jasnym tle.
- Manrope w nagłówkach, Inter w tekście. Lokalnie hostowane pliki fontów, bez połączenia przeglądarki z Google Fonts.
- Grid do 1280 px; marginesy adaptowane do desktopu, tabletu i telefonu. Rytm odstępów oparty o wielokrotności 4 i 8 px.
- Sekcje usług jako poziome wiersze z numeracją. Cienkie obramowania zamiast wielu osobnych kart.
- Diagram w hero przedstawia przykładowy przepływ informacji. Nie jest symulacją działającego produktu ani informacją o konkretnym kliencie.
- Ikony liniowe SVG. Niewielkie promienie przycisków, 12 px dla wybranych paneli.
- Hover: zmiana akcentu, obramowania lub minimalne przesunięcie strzałki. Krótkie wejście hero na desktopie. `prefers-reduced-motion` wyłącza ruch.
- Menu mobilne: przycisk z `aria-expanded`, zamykanie linkiem i klawiszem Escape. Widoczny focus i link pomijający nawigację.

## Architektura

Wspólny layout, navbar i footer. Wszystkie strony prerenderowane, bez niepotrzebnego backendu. Blog to Markdown + YAML, przetwarzany na serwerze. Nowy wpis wymaga wyłącznie pliku i deploymentu. Dane kontaktowe są w jednym miejscu. Sekcja współpracy wykorzystuje oficjalne logo PRO w czerwonym wariancie i logo SONNIGER. Oryginalne pliki oraz ich źródła znajdują się w `public/partners`; każdy znak prowadzi do strony danej firmy.

## Dane artykułu

Eurostat, ICT usage and e-commerce in enterprises, `isoc_eb_ai`: lata 2023, 2024, 2025. Badanie dotyczy przedsiębiorstw z co najmniej 10 pracującymi w wskazanych sektorach (NACE Rev. 2 C–J, L–N i grupa 95.1). UE oznacza Unię Europejską, nie całą Europę.

Dla UE w 2023 r. przyjęto 8,1% z nowszego komunikatu z grudnia 2025; wcześniejsza publikacja podawała 8,0%. Różnica jest jawnie opisana. Artykuł wskazuje także rozszerzenie katalogu technologii w 2025 oraz przerwę szeregu Niderlandów. Wszystkie statystyki mają odnośniki do źródeł i rok danych. Interpretacje DitM oddzielono od wyników badania.

## Weryfikacja

Polecenie `npm run check` obejmuje lint, kontrolę typów i produkcyjny build. Wyniki kontroli przeglądarkowej i status wdrożenia zapisujemy osobno w `docs/VERIFICATION.md`.

## Korekta logo — 26.09.2026

Po porównaniu z wybranym wzorem i stroną 2 projektu Canva poprawiono geometrię monogramu: M wychodzi na prawo od D. Zaktualizowano oba logotypy, znak, favicon oraz proporcje ich wyświetlania. Referencja znajduje się w `docs/brand/selected-logo-reference.png`. SVG jest rekonstrukcją webową z referencji, nie eksportem wektorowym Canvy.
