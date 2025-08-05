 import { 
 MoonIcon, SunIcon, HomeIcon, UserIcon, FolderIcon, 
 DocumentTextIcon, PhoneIcon
 } from "@heroicons/react/24/solid";
 import React, { useState, useEffect } from "react";
import { GiSkills } from "react-icons/gi";
 import { NavLink} from "react-router-dom";

 //=========== All Page Paths ==========//
 const pages = [
  { path: "/home", name: "Home", icon: <HomeIcon className="w-5 h-5 inline mr-2" /> },
  { path: "/about", name: "About", icon: <UserIcon className="w-5 h-5 inline mr-2" /> },
  { path: "/portfolio", name: "Portfolio", icon: <FolderIcon className="w-5 h-5 inline mr-2" /> },
  { path: "/blog", name: "Blog", icon: <DocumentTextIcon className="w-5 h-5 inline mr-2" /> },
  { path: "/services", name: "Skills", icon: <GiSkills className="w-5 h-5 inline mr-2" /> },
  { path: "/contact", name: "Contact", icon: <PhoneIcon className="w-5 h-5 inline mr-2" /> }
 ];

 const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  //=========== Theme Setup ==========//
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#000"; 
    }
  }, []);

  //=========== Toggle Theme ==========//
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    document.body.style.backgroundColor = newMode ? "#000" : "#fff";
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-colors duration-300 shadow-md py-4
        ${darkMode ? "bg-[#000] text-[#A6E3E9]" : "bg-[#F8F9FA] text-[#000000]"}`}>
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
         <NavLink to="/home" className="inline-flex items-center"><img src="/images/profile.png" alt="Portfolio Logo" className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-300 mr-3"/>
         {/* <span className="font-bold text-2xl"> My || Portfolio!</span> */}
         </NavLink>

          {/* Mobile Menu */}
          <ul className={`flex flex-col md:flex-row md:gap-6 absolute md:static left-0 top-full w-full md:w-auto 
            font-bold md:items-center transition-all duration-300 ease-in-out transform
            ${darkMode ? "bg-[#000000] text-[#A6E3E9]" : "bg-[#F8F9FA] text-[#000000]"}
            ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible md:opacity-100 md:visible"}`}>
              
            {pages.map(({ path, name, icon }, index) => (
              <li key={index} className="relative group text-center md:text-left py-2 md:py-0">
                <NavLink to={path} className={({ isActive }) => `
                  flex items-center text-lg ${isActive ? "text-[#36C2CE]" : darkMode ? "text-[#A6E3E9]" : "text-[#000000]"} 
                  hover:text-[#36C2CE] transition-colors duration-300`} onClick={() => setIsOpen(false)}>
                  {icon} {name}
                </NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#36C2CE] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Theme & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-800 dark:text-white rounded-full transition-opacity" onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden flex items-center text-gray-800 dark:text-white rounded-full transition-opacity hover:text-[#36C2CE] focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
 };
 export default Navbar;
