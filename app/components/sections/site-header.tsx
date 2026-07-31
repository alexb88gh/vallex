"use client";

import { useState } from "react";

import HeroSection from "./hero-section";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="wrapper">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Vallex — на главную">
          VALLEX
        </a>
        <nav
          className={menuOpen ? "nav nav-open" : "nav"}
          aria-label="Основная навигация"
        >
          <a href="#about" onClick={closeMenu}>
            О компании
          </a>
          <a href="#technologies" onClick={closeMenu}>
            Технологии
          </a>
          <a href="#process" onClick={closeMenu}>
            Процесс
          </a>
          <a href="#reviews" onClick={closeMenu}>
            Отзывы
          </a>
        </nav>
        <a
          className="header-action"
          href="#contact"
          aria-label="Обсудить проект"
        >
          ↗
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
      </header>
      <HeroSection />
    </div>
  );
}
