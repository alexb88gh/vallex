export default function ServicesSection() {
  return (
    <section className="services section" id="area">
      <div className="section-index">
        <span>02</span>
        <p>ЧТО ДЕЛАЕМ</p>
      </div>
      <div className="services-content">
        <p className="eyebrow">Areas of expertise</p>
        <h2>Строим веб-продукты, которыми удобно пользоваться и управлять.</h2>
        <div className="service-list">
          {[
            [
              '01',
              'Корпоративные сайты',
              'Быстрые, выразительные и управляемые сайты для компаний и продуктов.',
            ],
            [
              '02',
              'Веб-сервисы и SaaS',
              'Личные кабинеты, маркетплейсы, CRM и сложные интерфейсы с бизнес-логикой.',
            ],
            [
              '03',
              'Интеграции и автоматизация',
              'Связываем API, платежи, аналитику и внутренние процессы в единую систему.',
            ],
            [
              '04',
              'Развитие продукта',
              'Аудит, рефакторинг, ускорение и последовательное развитие существующих решений.',
            ],
          ].map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <b>↗</b>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
