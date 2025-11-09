// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}

        <div className="text-3xl font-bold text-gray-800 dark:text-white">
          GATBEL GATLUAK
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 dark:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`lg:flex lg:gap-6 ${isMenuOpen ? "block" : "hidden"} lg:block`}
        >
          {[
            { name: "Home", to: "home" },
            { name: "About", to: "about" },
            { name: "Skills", to: "skills" },
            { name: "Services", to: "services" },
            { name: "Projects", to: "projects" },
            { name: "Contact", to: "contact" },
          ].map(({ name, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-700 dark:text-gray-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
