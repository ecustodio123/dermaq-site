function ContactPage() {
  return (
    <main className="page-main">
      <div className="page-hero">
        <div className="wrap">
          <h1>Contact</h1>
          <p>Book your consultation and find our clinic location.</p>
        </div>
      </div>

      <div className="page-section dot-section">
        <div className="wrap page-contact-grid">
          <article className="content-card">
            <h2>Separa tu cita</h2>
            <form
              className="appointment-form mt-4"
              onSubmit={(event) => event.preventDefault()}
            >
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
                Para una atención inmediata comunicarse al{" "}
                <a href="tel:9737919770">993-353-658</a>
              </p>
            </form>
          </article>

          <article className="content-card map-card">
            <h2 className="mb-4">Ubícanos en</h2>
            <iframe
              title="Clinic location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.124317112028!2d-77.01544162410313!3d-12.183383744265774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7b379f32413%3A0xae84d9232b004241!2sDep.%20GH!5e0!3m2!1ses-419!2spe!4v1712269000000!5m2!1ses-419!2spe"
              loading="lazy"
            />
          </article>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
