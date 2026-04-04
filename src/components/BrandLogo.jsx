function BrandLogo({ inverted = false, large = false }) {
  return (
    <div className={`brand-logo ${inverted ? "brand-logo--inverted" : ""} ${large ? "brand-logo--large" : ""}`}>
      <p className="brand-logo__word">
        Derma<span className="brand-logo__o">Q</span>
      </p>
      <p className="brand-logo__sub">Cabello & Piel</p>
    </div>
  );
}

export default BrandLogo;
