import { reviews } from "./content";

export default function ReviewsSection() {
  return (
      <section className="reviews section" id="reviews">
        <div className="section-index">
          <span>05</span>
          <p>ОТЗЫВЫ</p>
        </div>
        <div className="reviews-content">
          <p className="eyebrow">Client signals</p>
          <h2>Результат лучше всего описывают те, кто с ним работает.</h2>
          <div className="review-grid">
            {reviews.map((review, index) => (
              <article key={review.author}>
                <span>“</span>
                <p>{review.quote}</p>
                <footer>
                  <b>{review.author}</b>
                  <small>{review.role}</small>
                  <i>0{index + 1}</i>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
}


