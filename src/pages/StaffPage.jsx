import { staffMembers } from "../data/siteContent";

function StaffPage() {
  return (
    <main className="page-main">
      <div className="page-hero">
        <div className="wrap">
          <h1>Nuestro Staff</h1>
          <p>Conoce a nuestro equipo de dermatología y descubre cómo cada especialista apoya tu cuidado.</p>
        </div>
      </div>

      <div className="page-div dot-section mb-16 mt-16">
        <div className="wrap staff-list">
          {staffMembers.map((doctor, index) => (
            <article
              className={`staff-row ${index % 2 === 1 ? "staff-row--reverse" : ""}`}
              key={doctor.name}
            >
              <div className="staff-row__content content-card">
                <h2>{doctor.name}</h2>
                <h3>{doctor.title}</h3>
                <p>{doctor.description}</p>
                <button className="btn btn--dark mt-4" type="button">
                  Ver perfil
                </button>
              </div>
              <div className="staff-row__media">
                <img src={doctor.image} alt={doctor.name} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default StaffPage;
