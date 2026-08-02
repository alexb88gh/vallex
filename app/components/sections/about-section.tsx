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
          <article>
            <strong>8+</strong>
            <span>
              лет в коммерческой
              <br />
              веб-разработке
            </span>
          </article>
          <article>
            <strong>360°</strong>
            <span>
              от аналитики
              <br />
              до запуска
            </span>
          </article>
          <article>
            <strong>01</strong>
            <span>
              ответственная команда
              <br />
              на весь проект
            </span>
          </article>
        </div>
      </div>
    </section>
  )
}
