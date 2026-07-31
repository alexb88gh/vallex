import { steps } from "./content";

export default function ProcessSection() {
  return (
      <section className="process section" id="process">
        <div className="section-index">
          <span>04</span>
          <p>ПРОЦЕСС</p>
        </div>
        <div className="process-content">
          <p className="eyebrow">From brief to release</p>
          <h2>Понятный маршрут от идеи до работающего продукта.</h2>
          <div className="process-track">
            <div className="process-line" aria-hidden="true" />
            {steps.map((step, index) => (
              <article key={step.number}>
                <button type="button" aria-label={`Этап ${index + 1}: ${step.title}`}>
                  {step.number}
                </button>
                <span>ЭТАП {step.number} / 04</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <p className="process-status"><i /> ВЫ ВСЕГДА ЗНАЕТЕ, ЧТО ПРОИСХОДИТ С ПРОЕКТОМ</p>
        </div>
      </section>
  );
}


