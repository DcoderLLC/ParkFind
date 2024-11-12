import { Box } from "@mui/material";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <nav className="bg-white shadow">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between">
              <Link to="/">
                <img className="w-auto h-14" src={logo} alt="Logo" />
              </Link>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="text-gray-500 hover:text-gray-600 focus:outline-none"
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div
              className={`${
                isOpen ? "block" : "hidden"
              } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
            >
              <div className="flex flex-col text-gray-600 capitalize lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                <Link
                  to="/book"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:underline underline-offset-4 decoration-slate-900 hover:text-gray-900"
                >
                  Booking
                </Link>
                <Link
                  to="/add"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:underline underline-offset-4 decoration-slate-900 hover:text-gray-900"
                >
                  Add Space
                </Link>
                <Link
                  to="/blogs"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:underline underline-offset-4 decoration-slate-900 hover:text-gray-900"
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:underline underline-offset-4 decoration-slate-900 hover:text-gray-900"
                >
                  Support
                </Link>
              </div>
            </div>
            {/* Social media links */}
            <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
              <button className="px-10 py-2 mx-5 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 border border-gray-600  hover:bg-gray-600 hover:text-white">
                Find the Spot
              </button>
              <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600  hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Add your Parkingo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Box>
  );
};

export default NavBar;
