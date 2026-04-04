import StaffQuinto from "../assets/img/StaffQuinto.jpg"

function DoctorSection() {
  return (
    <section className="dot-section doctor-section">
      <div className="wrap doctor-grid">
        <div className="media-frame">
          <img
            src={StaffQuinto}
            alt="Doctor portrait"
          />
        </div>
        <div>
          <h2>Dra. Wendy Quinto</h2>
          <p className="subtitle">Médico dermatóloga</p>
          <p>
          DermaQ Skin & Hair se encuentra bajo la dirección médica de la Dra. Wendy Quinto, dermatóloga certificada y especialista en salud capilar. Con una trayectoria enfocada en la excelencia clínica, la Dra. Quinto fundó DermaQ para integrar tecnología de vanguardia y cuidado personalizado.
          </p>
          <div className="badge-row">
            <span>Dermatóloga Certificada</span>
            <span>Tricología</span>
            <span>Atención Personalizada</span>
          </div>
          <button type="button" className="btn btn--dark">
            Ver más
          </button>
        </div>
      </div>
    </section>
  );
}

export default DoctorSection;
