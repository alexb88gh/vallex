import { steps } from './content'

const outputs = ['Бриф', 'Спецификация', 'Рабочий продукт', 'Production']

export default function ProcessSection() {
  return (
    <section className="process section" id="process">
      <div className="section-index" aria-hidden="true">
        <span>03</span>
        <p>ПРОЦЕСС</p>
      </div>
      <div className="process-content">
        <p className="eyebrow">From brief to release</p>
        <h2>Понятный маршрут от идеи до работающего продукта.</h2>

        <div className="process-pipeline" aria-hidden="true">
          <span className="process-pipeline-label process-pipeline-input">INPUT</span>
          <span className="process-pipeline-label process-pipeline-center">PROCESS</span>
          <span className="process-pipeline-label process-pipeline-output">OUTPUT</span>
          <i className="process-pipeline-line" />
          <b className="process-pipeline-start" />
          <b className="process-pipeline-node" />
          <b className="process-pipeline-end" />
        </div>

        <div className="process-track" role="list">
          {steps.map((step, index) => (
            <article className={index === 2 ? 'process-card-active' : undefined} key={step.number} role="listitem">
              <div className="process-card-head">
                <strong>{step.number}</strong>
                <span className="process-coordinates">＋ X: {String(index * 100 + 1).padStart(3, '0')}.00<br />Y: 000.00<br />Z: 000.00</span>
              </div>
              <i className="process-card-accent" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <div className="process-card-footer">
                <span>OUTPUT:<b>{outputs[index]}</b></span>
                <span>STATUS:<b>ACTIVE</b></span>
              </div>
              <i className="process-card-corner" aria-hidden="true" />
            </article>
          ))}
        </div>

        <footer className="process-system" aria-label="Статус процесса">
          <span>SYSTEM: VALLEX PROCESS ENGINE</span>
          <span>PIPELINE ID: VXL-DEV-001</span>
          <span>MODE: CONTINUOUS</span>
          <b>STATUS: ACTIVE</b>
        </footer>
      </div>
    </section>
  )
}