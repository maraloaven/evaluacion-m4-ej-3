import PropTypes from "prop-types";

function ServiceList({ services }) {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h2>Bienvenidos a la Clínica Clínica</h2>
        <p>
          Te brindamos atención médica cercana y de calidad. Nuestro equipo de profesionales está altamente capacitado y comprometido con tu salud.
        </p>
        <p>
          Contamos con diversas especialidades para realizar diagnósticos precisos y ofrecer tratamientos efectivos. En nuestra clínica nos esforzamos cada día para que te sientas como en casa.
        </p>
      </div>

      <h3 className="text-center mb-4">Servicios Destacados</h3>
      <div className="d-flex justify-content-center flex-wrap">
        {services.map((service, index) => (
          <div className="card" key={index} style={{ maxWidth: "300px", margin: "0 10px" }}>
            <img
              src={service.image}
              alt={service.name}
              className="card-img-top"
              style={{ maxHeight: "120px", width: "100%", objectFit: "contain", borderRadius: "5px", marginBottom: "10px" }}
            />
            <div className="card-body" style={{ textAlign: "center", padding: "10px" }}>
              <h5 className="card-title">{service.name}</h5>
              <p className="card-text">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ServiceList.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServiceList;
