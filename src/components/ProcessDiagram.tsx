import { Arrow } from "./Arrow";

export function ProcessDiagram() {
  return (
    <figure className="process-diagram" aria-labelledby="process-caption">
      <figcaption id="process-caption" className="diagram-caption">
        <span>OD INFORMACJI DO DZIAŁANIA</span>
        <span aria-hidden="true">↗</span>
      </figcaption>
      <div className="diagram-body">
        <div className="diagram-inputs">
          <span>E-mail</span>
          <span>Dokumenty</span>
          <span>Systemy</span>
        </div>
        <div className="diagram-connectors" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="diagram-core">
          <div className="core-icon" aria-hidden="true">
            &#123; &#125;
          </div>
          <div>
            <span className="diagram-micro">01 / PRZETWARZANIE</span>
            <strong>Kod + AI</strong>
            <p>Połączone dane. Jasne reguły.</p>
          </div>
          <span className="core-cross" aria-hidden="true">
            +
          </span>
        </div>
        <div className="diagram-line" aria-hidden="true" />
        <div className="diagram-review">
          <span className="diagram-micro">02 / KONTROLA</span>
          <span>Weryfikacja przez człowieka</span>
        </div>
        <div className="diagram-line" aria-hidden="true" />
        <div className="diagram-output">
          <span>Gotowe do działania</span>
          <Arrow />
        </div>
      </div>
      <div className="diagram-foot">
        <span>Przykład przepływu informacji</span>
        <span aria-hidden="true">[ INPUT → OUTPUT ]</span>
      </div>
    </figure>
  );
}
