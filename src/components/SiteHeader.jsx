import PhoneIcon from "@mui/icons-material/Phone";
import { mainLinks, topLinks } from "../data/siteContent";
import { Link, NavLink } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import MainNavDropdown from "./MainNavDropdown";

const topLinkRoutes = {
  about: "/about-us",
  "acerca de nosotros": "/about-us",
  shop: "/shop",
  tienda: "/shop",
  blog: "/blog",
  patient: "/patients",
  patients: "/patients",
  pacientes: "/patients",
};

function SiteHeader() {
  const dropdownOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const getTopLinkRoute = (label) => topLinkRoutes[label.toLowerCase()] ?? "/";

  return (
    <header className="site-header">
      <div className="topbar wrap">
        <Link to="/" className="brand-logo-link">
          <BrandLogo />
        </Link>
        <div className="topbar__right">
          <nav className="topbar__links">
            {topLinks.map((item) => (
              <NavLink
                className={({ isActive }) => (isActive ? "active-route" : "")}
                to={getTopLinkRoute(item)}
                key={item}
              >
                {item}
              </NavLink>
            ))}
          </nav>
          <a className="phone-link" href="tel:9737919770">
            <PhoneIcon sx={{ fontSize: 15 }} />
            993-353-658
          </a>
        </div>
      </div>
      <div className="main-nav-wrap">
        <nav className="main-nav wrap">
          {mainLinks.map((item) => (
            <MainNavDropdown key={item} label={item} options={dropdownOptions} />
          ))}
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
