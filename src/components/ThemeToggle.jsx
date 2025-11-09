import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; // Icons from lucide-react

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white fixed top-28 left-4 shadow-md border-2 border-gray-400 dark:border-gray-600 hover:scale-110 transition-transform duration-200 z-50"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
