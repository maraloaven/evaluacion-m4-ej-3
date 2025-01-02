import PropTypes from "prop-types";

function DoctorCard({ name, specialty, experience, image, onClick }) {
  const cardImageStyle = {
    maxHeight: "100px",
    width: "100%",
    objectFit: "contain",
    borderRadius: "5px",
    marginBottom: "10px",
  };

  const cardBodyStyle = {
    textAlign: "center",
  };

  return (
    <div className="card h-100" onClick={onClick}>
      <img src={image} alt={`Foto de ${name}`} style={cardImageStyle} />
      <div className="card-body" style={cardBodyStyle}>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Especialidad: {specialty}</p>
        <p className="card-text">Años de experiencia: {experience}</p>
      </div>
    </div>
  );
}

DoctorCard.propTypes = {
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DoctorCard;
