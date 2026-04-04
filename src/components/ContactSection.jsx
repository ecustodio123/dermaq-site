import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneIcon from "@mui/icons-material/Phone";
import { contactDetails, locations } from "../data/siteContent";

function ContactSection() {
  const iconByLabel = {
    Phone: <PhoneIcon />,
    Fax: <PhoneIcon />,
    Email: <EmailIcon />,
  };

  const hrefByLabel = {
    Phone: "tel:9737919770",
    Fax: "tel:9732882188",
    Email: "mailto:info@soma-skinlaser.com",
  };

  return (
    <section className="dot-section contact-section">
      <div className="wrap contact-grid">
        <div>
          <h2>Contacto</h2>
          <ul className="contact-list">
            {contactDetails.map((item) => (
              <li key={item.label}>
                <span>{iconByLabel[item.label]}</span>
                <a href={hrefByLabel[item.label]}>{item.value}</a>
              </li>
            ))}
          </ul>

          {locations.map((location) => (
            <div className="location-block" key={location.city}>
              <h3>
                <FmdGoodIcon />
                {location.city}
              </h3>
              {location.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
        </div>

        <div>
          <h2>Separa tu cita</h2>
          <form className="appointment-form mt-4" onSubmit={(event) => event.preventDefault()}>
            <input type="text" placeholder="Nombre completo" />
            <div className="split">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Teléfono" />
            </div>
            <div className="split">
              <input type="text" placeholder="Servicio" />
              <select defaultValue="San Borja, Lima">
                <option>San Borja, Lima</option>
                <option>Chorrillos, Lima</option>
              </select>
            </div>
            <textarea rows="5" placeholder="Cómo podemos ayudarle?" />
            <button className="btn btn--dark" type="submit">
              Enviar
            </button>
            <p className="quick-call pt-4">
              Para una atención inmediata comunicarse al <a href="tel:9737919770">993-353-658</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
