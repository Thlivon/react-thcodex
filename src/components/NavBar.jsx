import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (event.target.closest(".nav-dropdown")) {
      return;
    }
    setIsOpen(false);
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between p-2">
        <div className="text-green-400 text-lg font-medium">
          BanfieldGL-Development
        </div>
        <div className="flex items-center">
          <button
            className="text-white hover:text-emerald-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="fill-current h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
          {isOpen && (
            <div className="bg-gray-900 rounded py-2 px-4 mt-2 absolute right-0 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 top-20" id="menu-background">
              <a
                className="block px-2 py-1 text-blue-200 border-b border-gray-50 font-bold"
                href="#"
              >
                Inicio
              </a>
              <a
                className="block px-2 py-1 text-blue-200 border-b border-gray-50 font-bold"
                href="##"
              >
                Contacto
              </a>
              <a
                className="block px-2 py-1 text-blue-200 font-bold"
                href="###"
              >
                Nosotros
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
