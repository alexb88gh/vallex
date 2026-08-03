'use client'

import { useEffect, useState } from 'react'

import HeroSection from './hero-section'

const navigationItems = [
  { href: '#about', label: 'О компании' },
  { href: '#area', label: 'Области' },
  { href: '#process', label: 'Процесс' },
  { href: '#technologies', label: 'Технологии' },
  { href: '#reviews', label: 'Отзывы' },
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>()
  const [isPinned, setIsPinned] = useState(false)

  useEffect(() => {
    const updateActiveSection = () => {
      const headerHeight = document.querySelector('.site-header')?.clientHeight ?? 0
      const currentSection = navigationItems.find(({ href }) => {
        const section = document.querySelector(href)
        if (!section) return false

        const { top, bottom } = section.getBoundingClientRect()
        return top <= headerHeight && bottom > headerHeight
      })

      setActiveSection(currentSection?.href)
      setIsPinned(window.scrollY > 98)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const closeMenu = (href?: string) => {
    setMenuOpen(false)
    if (href) setActiveSection(href)
  }

  return (
    <>
      <header className={isPinned ? 'site-header is-pinned' : 'site-header'}>
        <a
          className="wordmark"
          href="#top"
          aria-label="Vallex — на главную"
          onClick={() => closeMenu()}
        >
          VALLEX
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Основная навигация">
          {navigationItems.map(({ href, label }) => (
            <a
              aria-current={activeSection === href ? 'location' : undefined}
              href={href}
              key={href}
              onClick={() => closeMenu(href)}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          className="header-action"
          href="#contact"
          aria-label="Обсудить проект"
          onClick={() => closeMenu()}
        >
          Связаться ↗
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
      </header>
      <div className="wrapper" style={{ marginTop: `${isPinned ? 98 : 0}px` }}>
        <HeroSection />
      </div>
    </>
  )
}
