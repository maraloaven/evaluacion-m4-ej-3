import React, { useState, useEffect, useRef, Profiler } from "react";
import PropTypes from "prop-types";
import DoctorCard from "./components/DoctorCard";
import ServiceList from "./components/ServiceList";
import AppointmentForm from "./components/AppointmentForm";
import Modal from "./components/Modal";

import dr1 from "./assets/dr1.jpg";
import dr2 from "./assets/dr2.jpg";
import dr3 from "./assets/dr3.jpg";
import dr4 from "./assets/dr4.jpg";

import ser1 from "./assets/ser1.jpg";
import ser2 from "./assets/ser2.jpg";
import ser3 from "./assets/ser3.jpg";

const fetchDoctors = async () => {
  return [
    { name: "Dr. Mario", specialty: "Cardiología", experience: 10, image: dr1 },
    { name: "Dra. Ana Polo", specialty: "Medicina Interna", experience: 8, image: dr2 },
    { name: "Dr. Nick", specialty: "Cirugía General", experience: 5, image: dr3 },
    { name: "Dra. Simi", specialty: "Oftalmología", experience: 15, image: dr4 },
  ];
};

const fetchServices = async () => {
  return [
    { name: "Cardiología", description: "Especialización en el corazón y sistema circulatorio.", image: ser1 },
    { name: "Pediatría", description: "Especialización en la salud infantil.", image: ser2 },
    { name: "Radiología", description: "Diagnóstico a través de imágenes médicas.", image: ser3 },
  ];
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(""); 
  const [modalDetails, setModalDetails] = useState(""); 
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const appointmentRef = useRef(null); // para enfocar el campo en la cita

  useEffect(() => {
    const loadDoctors = async () => {
      const data = await fetchDoctors();
      setDoctors(data);
    };

    const loadServices = async () => {
      const data = await fetchServices();
      setServices(data);
    };

    loadDoctors();
    loadServices();
  }, []);

  const openModal = (item, type) => {
    if (type === "doctor") {
      setModalContent(`Sobre ${item.name}`);  
      setModalDetails(`${item.name} es un médico especializado en ${item.specialty} con ${item.experience} años de experiencia.`);
    } else if (type === "service") {
      setModalContent(`Sobre ${item.name}`); 
      setModalDetails(`${item.name}: ${item.description}`);
    }
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Clínica Clínica</h1>

      {/* navbar */}
      <nav className="mb-4">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <button
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
              onClick={() => setActiveSection("home")}
            >
              Inicio
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeSection === "doctors" ? "active" : ""}`}
              onClick={() => setActiveSection("doctors")}
            >
              Doctores
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeSection === "form" ? "active" : ""}`}
              onClick={() => setActiveSection("form")}
            >
              Agendar Cita
            </button>
          </li>
        </ul>
      </nav>

      {activeSection === "home" && <ServiceList services={services} />}

      {activeSection === "doctors" && (
        <React.Fragment>
          <div className="row">
            {doctors.map((doc, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <DoctorCard
                  name={doc.name}
                  specialty={doc.specialty}
                  experience={doc.experience}
                  image={doc.image}
                  onClick={() => openModal(doc, "doctor")}
                />
              </div>
            ))}
          </div>
        </React.Fragment>
      )}

      {activeSection === "form" && (
        <React.Fragment>
          <AppointmentForm focusRef={appointmentRef} />
        </React.Fragment>
      )}

      {isModalOpen && (
        <Modal title={modalContent} onClose={closeModal}>
          <p>{modalDetails}</p>
        </Modal>
      )}
    </div>
  );
}

export default App;