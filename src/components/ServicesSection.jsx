import { services } from "../data/siteContent";
import ServicesCarousel from "./ServicesCarousel";

function ServicesSection() {
  return (
    <section className="deep-section services-section">
      <div className="wrap">
        <div className="section-head section-head--light">
          <h2>Nuestros servicios</h2>
          <p>
            Tecnología láser de vanguardia para la salud integral de su piel y cabello.
          </p>
        </div>
        <ServicesCarousel services={services} />
      </div>
    </section>
  );
}

export default ServicesSection;
