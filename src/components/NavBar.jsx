import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <div className="bg-gray-800 rounded py-2 px-4 mt-2 absolute right-0">
              <a className="block px-2 py-1 text-blue-400 hover:bg-gray-700" href="#">
                Login
              </a>
              <a className="block px-2 py-1 text-blue-400 hover:bg-gray-700" href="#">
                Salir
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
