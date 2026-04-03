import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Sidebar({ links = [] }) {
  const navigate = useNavigate();

  let logout = () => {
    localStorage.removeItem("student");
    localStorage.removeItem("token");
    navigate("/");
  };

  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const setWindowDimensions = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => window.removeEventListener("resize", setWindowDimensions);
  }, []);

  return (
    <div>
      <button
        className={`fixed flex gap-2 md:hidden z-50 top-[6rem] left-20 ml-10 bg-black p-1 w-50 h-50 rounded-full shadow-lg text-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-20" : "-translate-x-20"
        }`}
        onClick={toggleMenu}
      >
        <svg className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`} viewBox="0 0 24 24">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>

        <svg className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`} viewBox="0 0 24 24">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div
        className={`flex flex-col justify-between h-screen w-screen absolute md:static sm:w-64 bg-black text-white transition-transform duration-300 ease-in-out z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {links.length > 0 && (
          <Link
            to={`/${links[0].for}-dashboard`}
            className="py-4 px-4 bg-blue-700 flex items-center text-2xl"
          >
            Dashboard
          </Link>
        )}

        <div className="flex flex-col space-y-1 text-2xl text-white">
          {links.map((link) => (
            <Link
              to={link.url}
              key={link.text}
              className={`py-2 px-4 flex items-center gap-2 ${
                location.pathname === link.url ? "text-blue-500" : "hover:text-blue-500"
              }`}
            >
              {link.svg}
              {link.text}
            </Link>
          ))}
        </div>

        <div className="p-4">
          <button
            onClick={logout}
            className="w-full flex gap-2 justify-center text-white bg-blue-600 rounded-lg px-5 py-2.5"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  links: PropTypes.array.isRequired,
};

export { Sidebar };