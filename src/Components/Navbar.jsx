import React, { useEffect, useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const initialTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(initialTheme);
  }, []);

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    document.documentElement.classList.add(theme);
    return () => document.documentElement.classList.remove(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = [
    { href: "/", item: "Home" },
    { href: "/about", item: "About" },
    { href: "/contact", item: "Contact" },
    { href: "/services", item: "Services" },
  ];

  return (
    <div className="dark:bg-gray-900/50 backdrop-blur-md transition duration-300 ease-in-out p-2 fixed top-0 left-0 right-0 bg-slate-200/60 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/">
            <h1 className="text-2xl font-bold dark:text-white transition-all ease-out">
              Healthcare
            </h1>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className="text-2xl dark:text-white" />
            ) : (
              <FaBars className="text-2xl dark:text-white" />
            )}
          </button>
        </div>
        <div
          className={`links flex-col md:flex-row md:flex ${
            menuOpen ? "flex" : "hidden"
          } md:space-x-5 space-y-5 md:space-y-0 font-medium text-slate-800 dark:text-white`}
        >
          {links.map((item) => (
            <Link
              to={item.href}
              className={`${
                path === item.href ? "underline underline-offset-4" : ""
              }`}
              key={item.href}
            >
              {item.item}
            </Link>
          ))}
        </div>
        <div className="buttons space-x-3 flex items-center">
          <div className="togglebutton">
            <button onClick={toggleTheme} className="mt-[5px]">
              {theme === "dark" ? (
                <FaSun className="text-white rotate-3 text-2xl transition duration-300 ease-in-out" />
              ) : (
                <FaMoon className="text-slate-700 text-2xl transition duration-300 ease-in-out" />
              )}
            </button>
          </div>
          <Link
            to="login"
            className="bg-slate-800 dark:bg-slate-200 p-2 rounded-lg font-medium text-white dark:text-slate-800 transition duration-300 ease-in-out hover:bg-slate-700 dark:hover:bg-slate-100"
          >
            Login
          </Link>
          <Link
            to="signup"
            className="bg-slate-800 dark:bg-slate-200 p-2 rounded-lg font-medium text-white dark:text-slate-800 transition duration-300 ease-in-out hover:bg-slate-700 dark:hover:bg-slate-100"
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
