import PhotoHome from "../assets/img/PhotoHome.png";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <div className="hero-section__left">
          <div className="hero-copy">
            <h1>
              DermaQ: Tu destino principal en cuidado avanzado de la piel y restauración capilar.
            </h1>
            <button type="button" className="btn btn--light hero-cta">
              Separar cita
            </button>
          </div>
        </div>
        <div className="hero-section__right">
          <img
            className="hero-model"
            src={PhotoHome}
            alt="Dermatology patient portrait"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
