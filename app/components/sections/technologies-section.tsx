'use client'

import { useState, type CSSProperties } from 'react'
import { technologies } from './content'

export default function TechnologiesSection() {
  const [activeTechnology, setActiveTechnology] = useState(technologies[3])
  return (
    <section className="technologies section" id="technologies">
      <div className="section-index">
        <span>03</span>
        <p>ТЕХНОЛОГИИ</p>
      </div>
      <div className="tech-content">
        <div className="tech-heading">
          <div>
            <p className="eyebrow">Selected stack</p>
            <h2>Инструменты выбирает задача.</h2>
          </div>
          <p>
            Наведите курсор или выберите технологию, чтобы узнать, где она раскрывает свой
            потенциал.
          </p>
        </div>
        <div className="tech-console">
          <div className="tech-list" role="list" aria-label="Технологии">
            {technologies.map((technology) => (
              <button
                type="button"
                key={technology.name}
                className={
                  activeTechnology.name === technology.name ? 'tech-card active' : 'tech-card'
                }
                onMouseEnter={() => setActiveTechnology(technology)}
                onFocus={() => setActiveTechnology(technology)}
                onClick={() => setActiveTechnology(technology)}
                style={{ '--tech-color': technology.tone } as CSSProperties}
              >
                <span className="tech-mark">{technology.mark}</span>
                <span>{technology.name}</span>
                <i>↗</i>
              </button>
            ))}
          </div>
          <aside className="tech-description" aria-live="polite">
            <span>ACTIVE TECHNOLOGY / 0{technologies.indexOf(activeTechnology) + 1}</span>
            <div
              className="active-mark"
              style={{ '--tech-color': activeTechnology.tone } as CSSProperties}
            >
              {activeTechnology.mark}
            </div>
            <h3>{activeTechnology.name}</h3>
            <p>{activeTechnology.description}</p>
            <small>STATUS: READY TO BUILD</small>
          </aside>
        </div>
      </div>
    </section>
  )
}
