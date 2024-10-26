// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pacientes from "./pages/Pacientes";
import ContactoSalud from "./pages/contactoSalud";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="backdrop-blur-md bg-[#a5c4e8] bg-opacity-20 text-black mx-auto flex items-center justify-between p-4 shadow-md sticky top-0 z-50">
          {/* Logo a la izquierda */}
          <div className="flex items-center">
            <i className="fa-solid fa-holly-berry text-[50px]"></i>
          </div>

          {/* Lista de Navegación (centro) */}
          <ul className="flex flex-wrap gap-10 text-lg font-semibold mx-auto">
            <li className="relative flex items-center justify-center group hover:scale-105 transition-transform duration-300 ease-in-out">
              <Link
                to="/pacientes"
                className="py-4 px-5 transition-colors duration-300 group-hover:bg-[#5a8e9d] group-hover:font-bold text-black hover:text-transparent bg-clip-text bg-gradient-to-r from-secondaryColor to-primaryColor"
              >
                Pacientes
              </Link>
              <i className="fa-solid fa-users text-black ml-2 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-secondaryColor to-primaryColor transition-colors duration-300"></i>
            </li>

            <li className="relative flex items-center justify-center group hover:scale-105 transition-transform duration-300 ease-in-out">
              <Link
                to="/contacto-salud"
                className="py-4 px-5 transition-colors duration-300 hover:bg-red-500 hover:text-thirdColor"
              >
                Contacto con el Servicio de Salud
              </Link>
              <i className="fa-solid fa-kit-medical text-black ml-2"></i>
            </li>
          </ul>

          {/* Logos a la derecha */}
          <div className="flex items-center gap-3 text-[30px]">
            <i className="fa-solid fa-right-to-bracket"></i>
            <i className="fa-solid fa-user-xmark"></i>
          </div>
        </nav>

        <main className="p-8 bg-[#a5c4e8]">
          <Routes>
            <Route path="/pacientes" element={<Pacientes />} />
            <Route path="/contacto-salud" element={<ContactoSalud />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
