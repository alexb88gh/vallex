"use client";

import { type FormEvent, useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
      <section className="contact section" id="contact">
        <div className="section-index">
          <span>06</span>
          <p>КОНТАКТ</p>
        </div>
        <div className="contact-content">
          <div className="contact-intro">
            <p className="eyebrow">Start a project</p>
            <h2>Есть задача?<br />Давайте обсудим.</h2>
            <p>
              Расскажите в двух словах о продукте. Мы изучим вводные и вернёмся
              с уточняющими вопросами.
            </p>
            <a href="mailto:hello@vallex.dev">hello@vallex.dev ↗</a>
          </div>
          {submitted ? (
            <div className="form-success" role="status">
              <span>✓</span>
              <h3>Заявка принята</h3>
              <p>Спасибо! Мы свяжемся с вами в ближайшее рабочее время.</p>
              <button type="button" onClick={() => setSubmitted(false)}>Отправить ещё одну</button>
            </div>
          ) : (
            <form onSubmit={submitForm}>
              <label>
                <span>Ваше имя</span>
                <input name="name" placeholder="Как к вам обращаться?" required />
              </label>
              <label>
                <span>Email или Telegram</span>
                <input name="contact" placeholder="Куда ответить?" required />
              </label>
              <label>
                <span>О проекте</span>
                <textarea name="message" placeholder="Что вы хотите создать?" rows={4} required />
              </label>
              <div className="form-footer">
                <small>Нажимая кнопку, вы соглашаетесь с обработкой данных.</small>
                <button className="button button-primary" type="submit">
                  Отправить заявку <span>↗</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
  );
}


