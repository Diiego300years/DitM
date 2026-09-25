export function AiComparison({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`ai-comparison ${compact ? "is-compact" : ""}`}
      role="img"
      aria-label="Wykorzystanie AI w 2025 roku: Polska 8,4 procent, Unia Europejska 20,0 procent. Eurostat, przedsiębiorstwa z co najmniej 10 pracującymi w badanych sektorach."
    >
      <div className="comparison-top">
        <span>WYKORZYSTANIE AI</span>
        <span>2025</span>
      </div>
      <div className="comparison-row">
        <span>Polska</span>
        <strong>
          8,4<span>%</span>
        </strong>
        <div className="comparison-track">
          <i style={{ width: "42%" }} />
        </div>
      </div>
      <div className="comparison-row comparison-eu">
        <span>Unia Europejska</span>
        <strong>
          20,0<span>%</span>
        </strong>
        <div className="comparison-track">
          <i style={{ width: "100%" }} />
        </div>
      </div>
      <p className="comparison-note">
        Eurostat · przedsiębiorstwa 10+
        <br />
        Odsetek firm w sektorach objętych badaniem
      </p>
    </div>
  );
}
