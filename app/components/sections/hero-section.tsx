import EarthIcon from "@/app/assets/earth.svg";
import { HeroRoadmap } from "./hero-roadmap";

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-ruler-wrapper">
        <div className="hero-ruler-text" aria-hidden="true">
          <span>01</span>
          <div>
            <small>DIGITAL SOLUTIONS</small>
            <small>BUILT TO SCALE</small>
          </div>
        </div>
        <div className="hero-ruler">
          <i />
        </div>
      </div>
      <div className="hero-copy">
        <p className="eyebrow">Web development studio · 2026</p>
        <h1>
          Разрабатываем
          <br />
          цифровые продукты,
          <br />
          которые двигают
          <br />
          бизнес вперёд
        </h1>
        <p className="hero-lead">
          Проектируем и создаём быстрые, масштабируемые веб-сервисы — от идеи до
          запуска.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Обсудить проект <span>↗</span>
          </a>
          <a className="text-link" href="#process">
            Как мы работаем <span>→</span>
          </a>
        </div>
        <div className="trust-note scanner-block">
          <EarthIcon width={32} height={32} aria-label="Earth" />
          <span>Web</span>
          <i />
          <span>Apps</span>
          <i />
          <span>Automation</span>
        </div>
      </div>

      <HeroRoadmap />
    </section>
  );
}
