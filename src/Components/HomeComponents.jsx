import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';

 const HomeComponents = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <>
    <section className=''>
    <div className="container mx-auto px-4 py-10 mt-[60px] min-h-screen">
      {/* Toggle Theme Button */}
      <button onClick={toggleTheme} className="absolute top-4 right-4 px-4 py-2 rounded-md bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-400 transition" aria-label="Toggle dark/light mode">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold  text-gray-800 dark:text-gray-300">MD. Jahidul Islam</h1>
          <div className="text-lg md:text-xl  text-gray-800 dark:text-gray-300">
            <Typewriter
              options={{
                strings: ['Front-End', 'Developer', 'with React'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}/>
          </div>

          <div>
          <p className=" text-gray-800 dark:text-gray-300 text-base md:text-lg font-medium max-w-md mx-auto md:mx-0">
          Hi, I'm Jahidul Islam, a passionate front-end developer specializing in dynamic and responsive web applications. Explore my portfolio to see my contributions to the tech community.
          </p>
          </div>
     
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
            <Link to="/about">
            <button className="px-6 py-3  text-gray-800 dark:text-gray-300 font-semibold rounded-lg shadow-md hover:scale-105 transition"> View Work
            </button>
            </Link>
            <Link to="/contact">
            <button className="px-6 py-3  text-gray-800 dark:text-gray-300 font-semibold rounded-lg shadow-md hover:scale-105 transition"> Contact Me
            </button>
            </Link>
            </div>
          <div>
          <h2 className="text-md md:text-lg font-semibold mt-6  text-gray-800 dark:text-gray-300 "> Trusted by World Leading Brands <br /> Portfolio!
          </h2>
          </div>
          </div>

        {/* Right Section */}
        <div className="relative flex flex-col items-center md:w-1/2 pt-10">
          <img className="w-40 h-40 md:w-56 md:h-56 rounded-full hover:scale-105 transition-transform duration-300" src="/images/profile.png" alt="Jahidul Islam Profile"/>
          <div className="mt-6 text-center space-y-2">
            <h3 className="text-xl md:text-2xl font-bold  text-gray-800 dark:text-gray-300 ">MD. Jahidul Islam</h3>
            <div className="text-lg md:text-xl font-semibold  text-gray-800 dark:text-gray-300 ">
              <Typewriter
                options={{
                  strings: ['Front-End Developer!', 'with React', 'Backend', 'Node.js!'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}/>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4  text-gray-800 dark:text-gray-300 text-xl">
            <Link className='' to="https://www.facebook.com/jahidul.islam.98621/" target='balnk' aria-label="Facebook">
            <FaFacebook className="hover:text-[#b1c0d3] transition" />
            </Link>
            <Link to="https://github.com/md-jahid-islam" target='balnk' aria-label="GitHub">
            <FaGithub className="hover:text-[#b1c0d3]  transition" />
            </Link>
            <Link to="https://www.linkedin.com/in/jahidul-islam-a5021b325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank' aria-label="LinkedIn">
            <IoLogoLinkedin className="hover:text-[#0077B5] transition" />
            </Link>
          </div>

          {/* Resume Download */}
          <div className="mt-6">
          <a href="/images/Jahid-Resume.pdf" download="Jahidul_Islam_Resume.pdf" className="w-[200px] h-[50px] bg-gradient-to-r text-gray-800 dark:text-gray-300 font-semibold rounded-lg shadow-md hover:scale-105 transition flex justify-center items-center hover:rotate-1 hover:shadow-lg"> Download Resume!</a>
          </div>   
        </div>
      </div>
    </div>    
    </section>
    </>
  );
 };

 export default HomeComponents;
