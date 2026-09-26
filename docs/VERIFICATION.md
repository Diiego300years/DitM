# Weryfikacja — 25 września 2026

- `npm run check`: ESLint, TypeScript i produkcyjny build zakończone powodzeniem.
- Po końcowej korekcie kotwicy w hero i warunkowego przypisu bloga ponownie wykonano udany `npm run build`.
- Wszystkie cztery strony są generowane statycznie. Sprawdzono obecność jednego H1 i obrazu Open Graph na każdej stronie.
- Z produkcyjnego HTML zebrano 86 odnośników. Wszystkie odnośniki wewnętrzne oraz ich kotwice wskazują istniejące trasy i identyfikatory. Linki kontaktowe mają schematy `mailto:` i `tel:`.
- Przeglądarka: strona główna, blog, artykuł i kontakt; nawigacja między stronami i sekcjami. Desktop około 1363 px, lokalny widok responsywny w ramce przy 320, 390 i 768 px. Sprawdzono czytelność nagłówków, danych kontaktowych, wykresu i tabeli. Strona główna przy 320 px nie ma poziomego przepełnienia.
- Menu mobilne otwiera się, aktualizuje `aria-expanded`, zamyka klawiszem Escape i przywraca focus. Widoczny focus oraz odnośnik pomijający nawigację.
- W konsoli podczas kontroli nie pojawiły się błędy aplikacji. Zarejestrowane komunikaty pochodziły z rozszerzenia środowiska przeglądarkowego.
- Oryginalne cztery pliki SVG zachowane bez zmian. Bez niepotwierdzonych opinii, case studies ani imitacji logotypów partnerów.
- Źródła Eurostatu za lata 2023–2025 sprawdzone; różnice metodologiczne i aktualizacja wartości dla UE w 2023 opisane w artykule.
- Deployment produkcyjny Vercel uzyskał status `READY`, a publiczny adres https://ditm.vercel.app działał w przeglądarce. Weryfikacja HTTP: strona główna, blog, artykuł, kontakt, obraz Open Graph, favicon, robots i sitemap zwracają 200; nieistniejąca trasa zwraca 404. Canonical i adresy obrazów wskazują domenę produkcyjną.

## Zakres pomiaru wydajności

Strony są statyczne, fonty lokalne, grafiki SVG, animacje CSS i brak zewnętrznych skryptów śledzących. Nie podajemy niezmierzonego wyniku Lighthouse. Próba pomiaru PageSpeed Insights zwróciła HTTP 429. Kontrola responsywna nie zastępuje testów na fizycznych urządzeniach.

## Wdrożenie i dalsza praca

Projekt Vercel: `ditm`. Wdrożenie przez połączony konektor Vercel. Repozytorium źródłowe: `Diiego300years/DitM`. Automatycznych wdrożeń po pushu nie potwierdzono; można podłączyć to repozytorium w ustawieniach Git istniejącego projektu Vercel. Własna domena jest opcjonalna; po jej podłączeniu należy ustawić `NEXT_PUBLIC_SITE_URL` i ponowić deployment.

## Korekta logo — 26 września 2026

- Porównano wybrany przez użytkownika wzór z planszą 2 w Canvie (`DAHWMJMKMd8`); sesję inspekcji zamknięto bez zmian w projekcie Canva.
- Poprawiono geometrię M, współczynnik proporcji grafiki i kontener logo. Wspólny kształt zastosowano w ciemnym i jasnym logo oraz faviconie. Open Graph korzysta z poprawionego SVG.
- Sprawdzono wizualnie navbar na desktopie i przy 320 px oraz jasny wariant w stopce mobilnej. Logo nie jest przycięte i nie nachodzi na menu.
- `npm run check`: lint, TypeScript i build produkcyjny przechodzą bez błędów.

- Publikacja poprawki 26.09.2026 zablokowana: konektor Vercel zwrócił `Tool deploy_to_vercel not found`. Kod poprawki zapisano na `main` w commicie `76ffcfd`. Nie potwierdzono aktualizacji strony produkcyjnej.
