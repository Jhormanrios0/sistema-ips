// src/pages/Pacientes.jsx
import { useState } from "react";
import PacienteForm from "../components/PacienteForms.jsx";
import PacienteList from "../components/PacienteList.jsx";

function Pacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [pacienteEditando, setPacienteEditando] = useState(null);
  const [showModal, setShowModal] = useState(false); // Modal de confirmación de guardado
  const [showConfirmModal, setShowConfirmModal] = useState(false); // Modal de confirmación para eliminación
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null); // Paciente seleccionado para eliminar

  const handleAgregarPaciente = (nuevoPaciente) => {
    if (pacienteEditando) {
      setPacientes(
        pacientes.map((paciente) =>
          paciente.id === pacienteEditando.id ? nuevoPaciente : paciente
        )
      );
      setPacienteEditando(null);
    } else {
      setPacientes([...pacientes, nuevoPaciente]);
    }
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000);
  };

  const handleEditarPaciente = (paciente) => {
    setPacienteEditando(paciente);
  };

  const handleEliminarPaciente = (paciente) => {
    setPacienteSeleccionado(paciente);
    setShowConfirmModal(true);
  };

  const confirmEliminarPaciente = () => {
    setPacientes(
      pacientes.filter((paciente) => paciente.id !== pacienteSeleccionado.id)
    );
    setShowConfirmModal(false);
    setPacienteSeleccionado(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col gap-3 relative">
      <h1 className="text-[50px] font-bold mb-4 text-black flex flex-wrap items-center justify-center">
        Gestión de Pacientes
      </h1>
      <div className="max-w-4xl mx-auto w-full h-2 bg-primaryColor rounded-full"></div>
      <PacienteForm
        onAgregarPaciente={handleAgregarPaciente}
        pacienteEditando={pacienteEditando}
      />
      <PacienteList
        pacientes={pacientes}
        onEditarPaciente={handleEditarPaciente}
        onEliminarPaciente={handleEliminarPaciente} // Pasa la función de eliminar
      />

      {/* Modal de confirmación de guardado */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-green-600">
              Paciente guardado correctamente
            </p>
          </div>
        </div>
      )}

      {/* Modal de confirmación de eliminación */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold text-red-600 mb-4">
              ¿Estás seguro de que deseas eliminar este paciente?
            </p>
            <button
              onClick={confirmEliminarPaciente}
              className="bg-red-600 text-white px-4 py-2 rounded-lg mr-2"
            >
              Confirmar
            </button>
            <button
              onClick={() => setShowConfirmModal(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pacientes;
