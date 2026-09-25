import Link from "next/link";
import { Arrow } from "@/components/Arrow";
export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow">404 / Nie znaleziono strony</p>
      <h1>
        Tutaj jeszcze
        <br />
        nic nie zbudowaliśmy.
      </h1>
      <p>Sprawdź adres lub wróć na stronę główną.</p>
      <Link className="button button-primary" href="/">
        Wróć do DitM <Arrow />
      </Link>
    </section>
  );
}
