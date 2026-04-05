function AboutPage() {
  return (
    <main className="page-main">
      <div className="page-hero">
        <div className="wrap">
          <h1>Acerca de nosotros</h1>
          <p>
            En DermaQ, creemos que la salud de tu piel es la base de tu
            confianza y bienestar. Nuestra clínica dermatológica de alta
            especialidad se dedica a ofrecer cuidados personalizados.
          </p>
        </div>
      </div>

      <div className="page-section dot-section">
        <div className="wrap about-grid">
          <article className="content-card">
            <h2>Quiénes Somos</h2>
            <p className="mt-4">
              <span className="fw-700 orange-color"> DermaQ </span>es una
              clínica dermatológica de alta especialidad dedicada a la salud
              clínica, estética y láser, bajo protocolos basados en evidencia y
              un seguimiento médico riguroso. Combinamos la experiencia de
              especialistas certificados con tecnología de última generación
              para ofrecer resultados naturales y clínicamente seguros, siempre
              en un entorno de calidez y confianza.
            </p>
          </article>
          <article className="content-card">
            <h2>Nuestra Misión</h2>
            <p className="mt-4">
              Nuestra misión es potenciar la salud de la piel y la confianza de
              cada paciente a través de la dermatología preventiva, el
              diagnóstico temprano y planes de tratamiento a largo plazo. Cada
              consulta se diseña a medida del estilo de vida, tipo de piel y
              objetivos personales, garantizando que el cuidado sea realista,
              efectivo y sostenible en el tiempo.
            </p>
          </article>
        </div>
      </div>

      <div className="page-section">
        <div className="wrap values-grid">
          <article className="content-card">
            <h3>Excelencia Clínica</h3>
            <p>Especialistas certificados y protocolos médicos actualizados.</p>
          </article>
          <article className="content-card">
            <h3>Tecnología Avanzada</h3>
            <p>Equipamiento láser y de diagnóstico de última generación.</p>
          </article>
          <article className="content-card">
            <h3>Cuidado Humano</h3>
            <p>Comunicación clara, guía honesta y acompañamiento cercano.</p>
          </article>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
