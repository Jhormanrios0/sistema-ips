import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function PacienteForm({ onAgregarPaciente, pacienteEditando }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    tipoDocumento: "", // Tipo de Documento
    numeroDocumento: "", // Número de Documento
    fechaNacimiento: "",
    paisNacionalidad: "",
    ocupacion: "",
    ciudadResidencia: "",
    oposicionDonacion: "", // Si/No
    documentoVoluntad: "", // Si/No
    categoriaDiscapacidad: "", // Lista
    departamento: "", // Lista
    municipio: "", // Lista
  });
  const [errores, setErrores] = useState({}); // Estado para almacenar errores

  useEffect(() => {
    if (pacienteEditando) {
      setFormData(pacienteEditando);
    } else {
      setFormData({
        nombre: "",
        apellido: "",
        tipoDocumento: "", // Tipo de Documento
        numeroDocumento: "", // Número de Documento
        fechaNacimiento: "",
        paisNacionalidad: "",
        ocupacion: "",
        ciudadResidencia: "",
        oposicionDonacion: "", // Si/No
        documentoVoluntad: "", // Si/No
        categoriaDiscapacidad: "",
        departamento: "",
        municipio: "",
      });
    }
  }, [pacienteEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para validar el formulario
  const validarFormulario = () => {
    let erroresTemp = {};

    if (!formData.nombre) {
      erroresTemp.nombre = "El nombre es obligatorio.";
    }
    if (!formData.apellido) {
      erroresTemp.apellido = "El apellido es obligatorio.";
    }
    if (!formData.tipoDocumento) {
      erroresTemp.tipoDocumento = "Debes seleccionar un tipo de documento.";
    }
    if (!formData.numeroDocumento) {
      erroresTemp.numeroDocumento = "El número de documento es obligatorio.";
    }
    if (!formData.fechaNacimiento) {
      erroresTemp.fechaNacimiento = "La fecha de nacimiento es obligatoria.";
    }
    if (!formData.paisNacionalidad) {
      erroresTemp.paisNacionalidad =
        "Debes ingresar al menos una nacionalidad.";
    }
    if (!formData.ocupacion) {
      erroresTemp.ocupacion = "La ocupación es obligatoria.";
    }
    if (!formData.ciudadResidencia) {
      erroresTemp.ciudadResidencia = "La ciudad de residencia es obligatoria.";
    }

    setErrores(erroresTemp);
    return Object.keys(erroresTemp).length === 0; // Devuelve true si no hay errores
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      onAgregarPaciente({
        ...formData,
        id: pacienteEditando ? pacienteEditando.id : Date.now().toString(),
      });
      setFormData({
        nombre: "",
        apellido: "",
        tipoDocumento: "",
        numeroDocumento: "",
        fechaNacimiento: "",
        paisNacionalidad: "",
        ocupacion: "",
        ciudadResidencia: "",
        oposicionDonacion: "",
        documentoVoluntad: "",
        categoriaDiscapacidad: "",
        departamento: "",
        municipio: "",
      });
      setErrores({});
    }
  };

  return (
    <div className="bg-gradient-to-r from-thirdColor to-primaryColor flex items-center justify-center p-[50px] rounded-xl">
      <section className="w-full h-full flex">
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg container mx-auto transition-transform transform hover:scale-105 duration-300 ease-in-out"
        >
          <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
            {pacienteEditando ? "Editar Paciente" : "Registrar Paciente"}
          </h2>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4">
              {/* Campo Nombre */}
              <div className="flex flex-col mb-4">
                <label className="block font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Ingresa el nombre del paciente"
                />
                {errores.nombre && (
                  <p className="text-red-500 text-sm">{errores.nombre}</p>
                )}
              </div>

              {/* Campo Apellido */}
              <div className="flex flex-col mb-4">
                <label className="block font-medium text-gray-700">
                  Apellido
                </label>
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Ingresa el apellido del paciente"
                />
                {errores.apellido && (
                  <p className="text-red-500 text-sm">{errores.apellido}</p>
                )}
              </div>

              {/* Campo Tipo de Documento */}
              <div className="flex flex-col mb-4">
                <label className="block font-medium text-gray-700">
                  Tipo de Documento
                </label>
                <select
                  name="tipoDocumento"
                  value={formData.tipoDocumento}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="">Selecciona el tipo de documento</option>
                  <option value="Cédula">Cédula</option>
                  <option value="Pasaporte">Pasaporte</option>
                  <option value="Tarjeta de Identidad">
                    Tarjeta de Identidad
                  </option>
                </select>
                {errores.tipoDocumento && (
                  <p className="text-red-500 text-sm">
                    {errores.tipoDocumento}
                  </p>
                )}
              </div>

              {/* Campo Número de Documento */}
              <div className="flex flex-col mb-4">
                <label className="block font-medium text-gray-700">
                  Número de Documento
                </label>
                <input
                  type="text"
                  name="numeroDocumento"
                  value={formData.numeroDocumento}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Ingresa el número de documento"
                />
                {errores.numeroDocumento && (
                  <p className="text-red-500 text-sm">
                    {errores.numeroDocumento}
                  </p>
                )}
              </div>

              {/* Campo Fecha de Nacimiento */}
              <div className="flex flex-col mb-4">
                <label className="block font-medium text-gray-700">
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                />
                {errores.fechaNacimiento && (
                  <p className="text-red-500 text-sm">
                    {errores.fechaNacimiento}
                  </p>
                )}
              </div>

              {/* Campo Ciudad de Residencia */}
              <div className="flex flex-col mb-4">
                <label className="block font-medium text-gray-700">
                  Ciudad de Residencia
                </label>
                <input
                  type="text"
                  name="ciudadResidencia"
                  value={formData.ciudadResidencia}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Ingresa la ciudad de residencia"
                />
                {errores.ciudadResidencia && (
                  <p className="text-red-500 text-sm">
                    {errores.ciudadResidencia}
                  </p>
                )}
              </div>

              {/* Campo País de Nacionalidad */}
              <div className="flex flex-col mb-4">
                <label className="block font-medium text-gray-700">
                  País de Nacionalidad
                </label>
                <select
                  name="paisNacionalidad"
                  value={formData.paisNacionalidad}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="">Selecciona el país</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Argentina">Argentina</option>
                  <option value="México">México</option>
                </select>
                {errores.paisNacionalidad && (
                  <p className="text-red-500 text-sm">
                    {errores.paisNacionalidad}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4">
              {/* Campo Departamento */}
              <div className="flex flex-col mb-4">
                <label className="block font-medium text-gray-700">
                  Departamento
                </label>
                <select
                  name="departamento"
                  value={formData.departamento}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="">Selecciona un departamento</option>
                  <option value="Cundinamarca">Cundinamarca</option>
                  <option value="Antioquia">Antioquia</option>
                  <option value="Valle del Cauca">Valle del Cauca</option>
                </select>
              </div>

              {/* Campo Municipio */}
              <div className="flex flex-col mb-4">
                <label className="block font-medium text-gray-700">
                  Municipio
                </label>
                <select
                  name="municipio"
                  value={formData.municipio}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="">Selecciona un municipio</option>
                  <option value="Bogotá">Bogotá</option>
                  <option value="Medellín">Medellín</option>
                  <option value="Cali">Cali</option>
                </select>
              </div>

              {/* Campo Ocupación */}
              <div className="flex flex-col mb-4">
                <label className="block font-medium text-gray-700">
                  Ocupación
                </label>
                <input
                  type="text"
                  name="ocupacion"
                  value={formData.ocupacion}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  placeholder="Ingresa la ocupación del paciente"
                />
                {errores.ocupacion && (
                  <p className="text-red-500 text-sm">{errores.ocupacion}</p>
                )}
              </div>

              {/* Campo Oposición a la Presunción Legal de Donación */}
              <div className="flex flex-col mb-4">
                <label className="block font-medium text-gray-700">
                  Oposición a la Presunción Legal de Donación
                </label>
                <select
                  name="oposicionDonacion"
                  value={formData.oposicionDonacion}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
                </select>
                {errores.oposicionDonacion && (
                  <p className="text-red-500 text-sm">
                    {errores.oposicionDonacion}
                  </p>
                )}
              </div>

              {/* Campo Documento de Voluntad Anticipada */}
              <div className="flex flex-col mb-4">
                <label className="block font-medium text-gray-700">
                  Documento de Voluntad Anticipada
                </label>
                <select
                  name="documentoVoluntad"
                  value={formData.documentoVoluntad}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* Campo Categoría de Discapacidad */}
              <div className="flex flex-col mb-4">
                <label className="block font-medium text-gray-700">
                  Categoría de Discapacidad
                </label>
                <select
                  name="categoriaDiscapacidad"
                  value={formData.categoriaDiscapacidad}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="Ninguna">Ninguna</option>
                  <option value="Ligera">Ligera</option>
                  <option value="Moderada">Moderada</option>
                  <option value="Severa">Severa</option>
                </select>
              </div>
            </div>
          </div>

          {/* Botones de Guardar y Cancelar */}
          <div className="flex justify-center space-x-4 mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
            >
              {pacienteEditando ? "Actualizar" : "Guardar"}
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData({
                  nombre: "",
                  apellido: "",
                  tipoDocumento: "",
                  numeroDocumento: "",
                  fechaNacimiento: "",
                  paisNacionalidad: "",
                  ocupacion: "",
                  ciudadResidencia: "",
                  oposicionDonacion: "",
                  documentoVoluntad: "",
                  categoriaDiscapacidad: "",
                  departamento: "",
                  municipio: "",
                })
              }
              className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200"
            >
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

PacienteForm.propTypes = {
  onAgregarPaciente: PropTypes.func.isRequired,
  pacienteEditando: PropTypes.object,
};

export default PacienteForm;
