import PropTypes from "prop-types";
import { useState } from "react";
import DetallesPacienteModal from "./DetallesPacienteModal.jsx";

const PacienteList = ({ pacientes, onEditarPaciente, onEliminarPaciente }) => {
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);

  const handleVerDetalles = (paciente) => {
    setPacienteSeleccionado(paciente);
  };

  const handleCerrarModal = () => {
    setPacienteSeleccionado(null);
  };

  return (
    <div className="mt-6">
      <h2 className="text-[50px] font-bold mb-4 text-black flex flex-wrap items-center justify-center">
        Lista de Pacientes
      </h2>
      <table className="min-w-full bg-white border border-gray-300 text-black rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-gradient-to-r from-thirdColor to-primaryColor text-white">
            <th scope="col" className="py-3 px-4 border-b">
              Cédula
            </th>
            <th scope="col" className="py-3 px-4 border-b">
              Nombre
            </th>
            <th scope="col" className="py-3 px-4 border-b">
              Fecha de Nacimiento
            </th>
            <th scope="col" className="py-3 px-4 border-b">
              País
            </th>
            <th scope="col" className="py-3 px-4 border-b">
              Departamento
            </th>
            <th scope="col" className="py-3 px-4 border-b">
              Municipio
            </th>
            <th scope="col" className="py-3 px-4 border-b">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {pacientes.length > 0 ? (
            pacientes.map((paciente) => (
              <tr
                key={paciente.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="py-2 px-4 border-b">
                  {paciente.numeroDocumento}
                </td>
                <td className="py-2 px-4 border-b">{paciente.nombre}</td>
                <td className="py-2 px-4 border-b">
                  {paciente.fechaNacimiento}
                </td>
                <td className="py-2 px-4 border-b">
                  {paciente.paisNacionalidad}
                </td>
                <td className="py-2 px-4 border-b">{paciente.departamento}</td>
                <td className="py-2 px-4 border-b">{paciente.municipio}</td>
                <td className="py-2 px-4 border-b flex gap-2">
                  <button
                    onClick={() => handleVerDetalles(paciente)}
                    className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Ver Detalles
                  </button>
                  <button
                    onClick={() => onEditarPaciente(paciente)}
                    className="text-green-600 hover:underline focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onEliminarPaciente(paciente)}
                    className="text-red-600 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="py-2 px-4 text-center text-gray-500">
                No hay pacientes registrados
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {pacienteSeleccionado && (
        <DetallesPacienteModal
          paciente={pacienteSeleccionado}
          onClose={handleCerrarModal}
        />
      )}
    </div>
  );
};

PacienteList.propTypes = {
  pacientes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      numeroDocumento: PropTypes.string.isRequired, // Agregar la validación para número de documento
      nombre: PropTypes.string.isRequired,
      fechaNacimiento: PropTypes.string.isRequired,
      paisNacionalidad: PropTypes.string.isRequired,
      departamento: PropTypes.string.isRequired, // Agregar la validación para departamento
      municipio: PropTypes.string.isRequired, // Agregar la validación para municipio
      ocupacion: PropTypes.string, // Este campo no se mostrará en la tabla, pero está disponible en el modal
    })
  ).isRequired,
  onEditarPaciente: PropTypes.func.isRequired,
  onEliminarPaciente: PropTypes.func.isRequired,
};

export default PacienteList;
