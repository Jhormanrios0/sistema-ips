// src/components/ConsultaPaciente.jsx
import { useState } from "react";

const ConsultaPaciente = ({ pacientes }) => {
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [pacienteEncontrado, setPacienteEncontrado] = useState(null);

  const handleBuscarPaciente = (e) => {
    e.preventDefault();
    const paciente = pacientes.find(
      (p) => p.numeroDocumento === numeroDocumento
    );
    setPacienteEncontrado(paciente || null);
  };

  return (
    <div className="mt-6 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        Consultar Paciente
      </h2>
      <form onSubmit={handleBuscarPaciente} className="mb-4">
        <div className="flex flex-col">
          <label className="block font-medium text-gray-700">
            Número de Documento
          </label>
          <input
            type="text"
            value={numeroDocumento}
            onChange={(e) => setNumeroDocumento(e.target.value)}
            className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa el número de documento del paciente"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full p-3 bg-primaryColor text-white rounded-lg transition-colors duration-300 hover:bg-thirdColor focus:outline-none focus:ring-4 focus:ring-blue-500"
        >
          Buscar
        </button>
      </form>

      {pacienteEncontrado ? (
        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-300">
          <h3 className="text-xl font-semibold">Detalles del Paciente</h3>
          <p>
            <strong>Nombre:</strong> {pacienteEncontrado.nombre}
          </p>
          <p>
            <strong>Apellido:</strong> {pacienteEncontrado.apellido}
          </p>
          <p>
            <strong>Tipo de Documento:</strong>{" "}
            {pacienteEncontrado.tipoDocumento}
          </p>
          <p>
            <strong>Número de Documento:</strong>{" "}
            {pacienteEncontrado.numeroDocumento}
          </p>
          <p>
            <strong>Fecha de Nacimiento:</strong>{" "}
            {pacienteEncontrado.fechaNacimiento}
          </p>
          <p>
            <strong>Ciudad de Residencia:</strong>{" "}
            {pacienteEncontrado.ciudadResidencia}
          </p>
          <p>
            <strong>País de Nacionalidad:</strong>{" "}
            {pacienteEncontrado.paisNacionalidad}
          </p>
          <p>
            <strong>Departamento:</strong> {pacienteEncontrado.departamento}
          </p>
          <p>
            <strong>Municipio:</strong> {pacienteEncontrado.municipio}
          </p>
          <p>
            <strong>Ocupación:</strong> {pacienteEncontrado.ocupacion}
          </p>
          {/* Agrega más detalles según sea necesario */}
        </div>
      ) : (
        numeroDocumento && (
          <p className="mt-4 text-red-500">
            No se encontró ningún paciente con ese número de documento.
          </p>
        )
      )}
    </div>
  );
};

export default ConsultaPaciente;
