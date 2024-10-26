// src/pages/ContactoServicioSalud.jsx
import ConsultaPaciente from "../components/ConsultaPaciente.jsx";

// Suponiendo que tienes los datos de los pacientes disponibles
const ContactoServicioSalud = ({ pacientes }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        Contacto con el Servicio de Salud
      </h1>
      <ConsultaPaciente pacientes={pacientes} />
      {/* Otros componentes o secciones del módulo */}
    </div>
  );  
};

export default ContactoServicioSalud;
