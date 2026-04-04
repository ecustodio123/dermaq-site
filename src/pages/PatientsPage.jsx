import { testimonials } from "../data/siteContent";

function PatientsPage() {
  return (
    <main className="page-main">
      <div className="page-hero">
        <div className="wrap">
          <h1>Patients</h1>
          <p>Real patient experiences focused on trust, outcomes and continuity of care.</p>
        </div>
      </div>

      <div className="page-section dot-section">
        <div className="wrap">
          <div className="section-head section-head--light">
            <h2>Patient Testimonials</h2>
          </div>
          <div className="patient-card-grid">
            {testimonials.map((item) => (
              <article className="patient-card" key={item.name}>
                <div className="stars">★★★★★</div>
                <p>{item.text}</p>
                <h3>{item.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default PatientsPage;
