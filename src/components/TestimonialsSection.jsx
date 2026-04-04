import { testimonials } from "../data/siteContent";

function TestimonialsSection() {
  return (
    <section className="deep-section testimonials-section">
      <div className="wrap">
        <div className="section-head section-head--light">
          <h2>Testimonios</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="stars">★★★★★</div>
              <p>{item.text}</p>
              <h3>{item.name}</h3>
            </article>
          ))}
        </div>
        <div className="centered">
          <button type="button" className="btn btn--light">
            Ver más testimonios
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
