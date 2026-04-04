function PromoSection() {
  return (
    <div className="dot-section promo-section">
      <div className="wrap">
        <article className="promo-card">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1500&q=80"
            alt="DermaQ sale promotion"
          />
          <div className="promo-card__badge">
            <p>30% Off</p>
            <span>Any Cosmetic Procedure</span>
          </div>
        </article>
      </div>
    </div>
  );
}

export default PromoSection;
