import { shopProducts } from "../data/siteContent";

function ShopPage() {
  return (
    <main className="page-main">
      <div className="page-hero">
        <div className="wrap">
          <h1>Tienda</h1>
          <p>Productos de grado dermatológico seleccionados por nuestros especialistas.</p>
        </div>
      </div>

      <div className="page-section dot-section">
        <div className="wrap shop-grid">
          {shopProducts.map((product) => (
            <article className="shop-card" key={product.name}>
              <img src={product.image} alt={product.name} />
              <div className="shop-card__body">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="shop-card__footer">
                  <strong>{product.price}.00</strong>
                  <button type="button" className="btn btn--dark">
                    Comprar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ShopPage;
