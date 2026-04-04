import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import { locations } from "../data/siteContent";
import BrandLogo from "./BrandLogo";

const leftLinks = [
  { label: "Acerca de nosotros", to: "/about-us" },
  { label: "Nuestro Staff", to: "/our-staff" },
  { label: "Blog", to: "/blog" },
];

const rightLinks = [
  { label: "Contacto", to: "/contact" },
  { label: "Tienda", to: "/shop" },
  { label: "Pacientes", to: "/patients" },
];

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link to="/" className="brand-logo-link">
            <BrandLogo inverted large />
          </Link>
          <div className="socials">
            <a href="#">f</a>
            <a href="#">x</a>
            <a href="#">g</a>
            <a href="#">ig</a>
          </div>
        </div>
        <ul className="footer-links">
          {leftLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer-links">
          {rightLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="footer-contact">
          <p>
            <PhoneIcon />
            993-353-658
          </p>
          <p>
            <EmailIcon />
            quintomalcaw@gmail.com
          </p>
          {locations.map((location) => (
            <div key={location.city}>
              <h4>
                <FmdGoodIcon />
                {location.city}
              </h4>
              {location.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2026 DermaQ - Todos los derechos reservados. Diseñado por Enrique Custodio.
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
