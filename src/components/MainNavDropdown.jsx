import { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function MainNavDropdown({ label, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onDocumentClick = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const onEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onDocumentClick);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("mousedown", onDocumentClick);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <div className={`main-nav__item ${isOpen ? "is-open" : ""}`} ref={dropdownRef}>
      <button
        type="button"
        className="main-nav__trigger"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
      >
        {label}
        <KeyboardArrowDownIcon sx={{ fontSize: 14 }} />
      </button>

      {isOpen && (
        <div className="main-nav__menu" role="menu">
          {options.map((option) => (
            <button key={option} type="button" className="main-nav__option">
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default MainNavDropdown;
