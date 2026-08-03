import { paths, steps } from './content'

// const routePoints = "0,556 54,556 54,512 224,512 318,512 318,330 466,330 466,186 536,186 536,96 720,96";

export function HeroRoadmap() {
  return (
    <div className="hero-roadmap" aria-label="Этапы работы над проектом">
      <div className="hero-road-map-bg" />
      <div className="hero-roadmap-path">
        <div className="start-end-point start"></div>
        <div className="start-end-point end"></div>

        <svg className="lines-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          {paths.map((path, index) => (
            <line
              key={index}
              x1={path.x1}
              y1={path.y1}
              x2={path.x2}
              y2={path.y2}
              className="line"
            />
          ))}
        </svg>
      </div>

      <div className="roadmap-signal" aria-hidden="true">
        <span className="roadmap-signal-core">
          <i />
        </span>
      </div>

      {steps.map((step, index) => (
        <div className={`hero-step hero-step-${index + 1}`} key={step.number} tabIndex={0}>
          <strong>{step.number}</strong>
          <span>{step.title}</span>
          <div className="point">
            <div className="dot"></div>
          </div>
          <div className="step-message">
            <p>{step.text}</p>
          </div>
        </div>
      ))}

      <div className="project-meta scanner-block">
        <span>ПРОЕКТ:</span>
        <b>VALLEX</b>
        <span>РЕЖИМ:</span>
        <b>РАЗРАБОТКА</b>
        <span>СТАТУС:</span>
        <b>АКТИВНО</b>
      </div>
    </div>
  )
}
