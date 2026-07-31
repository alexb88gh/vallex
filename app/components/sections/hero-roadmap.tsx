import { steps } from "./content";

const routePoints = "0,556 54,556 54,512 224,512 318,512 318,330 466,330 466,186 536,186 536,96 720,96";

export function HeroRoadmap() {
  return (
    <div className="hero-roadmap" aria-label="Этапы работы над проектом">
      <svg
        className="roadmap-visual"
        viewBox="0 0 720 650"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="roadmap-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 H 0 V 16" fill="none" stroke="currentColor" strokeDasharray="1 5" />
          </pattern>
          <radialGradient id="roadmap-fade" cx="54%" cy="48%" r="67%">
            <stop offset="12%" stopColor="white" stopOpacity="0.94" />
            <stop offset="60%" stopColor="white" stopOpacity="0.66" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
          <mask id="roadmap-grid-mask">
            <rect width="720" height="650" fill="url(#roadmap-fade)" />
          </mask>
        </defs>

        <rect className="roadmap-grid" width="720" height="650" fill="url(#roadmap-grid)" mask="url(#roadmap-grid-mask)" />
        <g className="roadmap-crosses">
          <path d="M46 63h14M53 56v14M39 254h14M46 247v14M280 434h14M287 427v14M495 176h14M502 169v14M625 344h14M632 337v14M670 64h14M677 57v14" />
        </g>
        <polyline className="roadmap-line" points={routePoints} />
        <g className="roadmap-markers">
          <rect x="0" y="550" width="12" height="12" />
          <rect x="48" y="506" width="12" height="12" />
          <rect x="312" y="324" width="12" height="12" />
          <rect x="460" y="180" width="12" height="12" />
          <rect x="530" y="90" width="12" height="12" />
          <rect x="708" y="90" width="12" height="12" />
        </g>
        <g className="roadmap-signal">
          <circle cx="224" cy="512" r="48" />
          <circle cx="224" cy="512" r="35" />
          <rect x="213" y="501" width="22" height="22" />
        </g>
      </svg>

      {steps.map((step, index) => (
        <div className={`hero-step hero-step-${index + 1}`} key={step.number}>
          <strong>{step.number}</strong>
          <span>{step.title}</span>
        </div>
      ))}
      <p className="roadmap-status" aria-hidden="true">
        <i /> СТАТУС: АКТИВНО
      </p>
      <div className="project-meta">
        <span>ПРОЕКТ:</span>
        <b>VALLEX</b>
        <span>РЕЖИМ:</span>
        <b>РАЗРАБОТКА</b>
        <span>СТАТУС:</span>
        <b>АКТИВНО</b>
      </div>
    </div>
  );
}
