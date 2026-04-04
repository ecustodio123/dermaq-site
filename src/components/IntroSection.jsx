import Consultorio from "../assets/img/Consultorio.png";

function IntroSection() {
  return (
    <section className="dot-section intro-section">
      <div className="wrap intro-grid">
        <div>
          <h2>DermaQ: Clínica Avanzada de Piel y Cabello</h2>
          <h3>San Borja, Lima</h3>
          <p>
            Bienvenido a DermaQ, el destino principal en  Lima para dermatología clínica, estética y salud capilar. Ya
            sea que busque lo último en rejuvenecimiento facial, un examen
            integral de la piel o tratamientos avanzados para la caída del
            cabello, la Dra. Wendy Quinto y su equipo de especialistas brindan
            atención de vanguardia en nuestras modernas instalaciones diseñadas
            para su bienestar.
          </p>
          <button type="button" className="btn btn--dark mt-5">
            Ver más
          </button>
        </div>
        <div className="media-frame">
          <img src={Consultorio} alt="Dermatology office waiting room" />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
