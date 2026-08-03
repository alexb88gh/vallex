export default function AboutSection() {
  return (
    <section className="about section" id="about">
      <div className="section-index">
        <span>01</span>
        <p>О КОМПАНИИ</p>
      </div>
      <div className="about-content">
        <p className="eyebrow">Engineering with purpose</p>
        <h2>Не просто пишем код. Решаем задачу бизнеса.</h2>
        <div className="about-grid">
          <p>
            Vallex — студия веб-разработки полного цикла. Мы подключаемся на этапе идеи, помогаем
            выбрать рациональную архитектуру и создаём продукт, готовый к реальным пользователям и
            дальнейшему росту.
          </p>
          <p>
            Говорим с клиентом на языке целей, а внутри команды — на языке систем, данных и
            качественного кода. Без технологической моды ради моды и без непрозрачных процессов.
          </p>
        </div>
        <div className="metrics">
          <article className="metric-primary">
            <span className="metric-label left">ОПЫТ / 01</span>
            <div className="metric-value-row">
              <strong>8+</strong>
              <p>
                лет в коммерческой
                <br />
                веб-разработке
              </p>
            </div>
            <i className="metric-route" aria-hidden="true" />
            <p className="metric-tags">
              ПРОДУКТЫ <b /> СЕРВИСЫ <b /> АВТОМАТИЗАЦИЯ
            </p>
          </article>
          <article className="metric-secondary">
            <span className="metric-label">ПОЛНЫЙ ЦИКЛ / 02</span>
            <div className="metric-value-row">
              <strong>360°</strong>
              <p>
                от аналитики
                <br />
                до запуска
              </p>
            </div>
            <i className="metric-route" aria-hidden="true" />
          </article>
          <article className="metric-tertiary">
            <span className="metric-label">ОТВЕТСТВЕННОСТЬ / 03</span>
            <div className="metric-value-row">
              <strong>01</strong>
              <p>
                ответственная команда
                <br />
                на весь проект
              </p>
            </div>
            <i className="metric-route" aria-hidden="true" />
          </article>
          <i className="metrics-connector" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
