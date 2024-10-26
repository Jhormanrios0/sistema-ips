import PropTypes from "prop-types";

const DetallesPacienteModal = ({ paciente, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] relative">
        <h3 className="text-2xl font-bold mb-4 text-gray-700">
          Detalles de {paciente.nombre}
        </h3>
        <p>
          <strong className="font-semibold">Cédula:</strong>{" "}
          {paciente.numeroDocumento}
        </p>
        <p>
          <strong className="font-semibold">Fecha de Nacimiento:</strong>{" "}
          {paciente.fechaNacimiento}
        </p>
        <p>
          <strong className="font-semibold">Nacionalidad:</strong>{" "}
          {paciente.paisNacionalidad}
        </p>
        <p>
          <strong className="font-semibold">Ocupación:</strong>{" "}
          {paciente.ocupacion}
        </p>
        <p>
          <strong className="font-semibold">Ciudad de Residencia:</strong>{" "}
          {paciente.ciudadResidencia}
        </p>
        <p>
          <strong className="font-semibold">Departamento:</strong>{" "}
          {paciente.departamento}
        </p>
        <p>
          <strong className="font-semibold">Municipio:</strong>{" "}
          {paciente.municipio}
        </p>

        {/* Sección de historial médico */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold">Historial Médico</h4>
          {/* Aquí se listarían consultas, diagnósticos, etc. usando datos simulados */}
          <ul className="mt-2 list-disc list-inside">
            <li>Consulta médica - 01/09/2024</li>
            <li>Tratamiento aplicado - 15/08/2024</li>
            <li>Diagnóstico de seguimiento - 30/07/2024</li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

DetallesPacienteModal.propTypes = {
  paciente: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DetallesPacienteModal;
