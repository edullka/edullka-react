import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Nabvar = () => {

  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.getElementsByTagName("HTML")[0].setAttribute("class", localStorage.getItem("theme"));
  }, [checked]);

  const toggleThemeChange = () => {
    if(checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  }

  const pressButton = () => {
    if(menu){
      setMenu(false);
    } else {
      setMenu(true);
    }
  }

  return (
    <nav className="fixed z-50 w-full bg-white shadow dark:bg-gray-900">
      <div className="px-2 mx-auto max-w-7xl 2xl:max-w-8xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={pressButton} className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
              {
                menu ? (
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )
              }
            </button>
          </div>
          <div className="flex items-center justify-center flex-1 mr-6 border-r-2 sm:items-stretch sm:justify-start">
            <div className="flex items-center flex-shrink-0 sm:flex">
              <img className="block w-auto h-8 saturacion lg:hidden" src="../images/logo-edullka-web.png" alt="logo-movil" />
              <img className="hidden w-auto h-10 saturacion lg:block" src="../images/logo-edullka-web.png" alt="logo-escritorio" />
            </div>
            <div className="flex-1 hidden md:pr-6 sm:block sm:ml-6">
              <div className="flex items-center justify-end space-x-4 font-nav-1">
                <Link to="/" className="px-3 py-2 text-xl font-medium tracking-wide text-gray-800 uppercase bg-gray-200 rounded-md dark:text-white dark:bg-black">Inicio</Link>
                <a href="../#campamentos" className="px-3 py-2 text-xl font-medium tracking-wide text-gray-600 uppercase rounded-md dark:text-gray-300 hover:bg-gray-700 hover:text-white">Campamentos</a>
                {/* <a href="../#nosotros" className="px-3 py-2 text-xl font-medium tracking-wide text-gray-600 uppercase rounded-md dark:text-gray-300 hover:bg-gray-700 hover:text-white">Nosotros</a> */}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="toogleButton" className="flex items-center cursor-pointer">
              <div className="relative">
                <input id="toogleButton" defaultChecked={checked} type="checkbox" className="hidden" onChange={() => toggleThemeChange()} />
                <div className="h-5 bg-gray-200 rounded-full shadow-inner toggle-path w-9"></div>
                <div className="toggle-circle absolute w-3.5 h-3.5 bg-white border border-white rounded-full shadow inset-y-0 left-0"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
      {
        menu ? (
          <div className="block contenedor-menu sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-800 bg-gray-200 rounded-md dark:text-white dark:bg-gray-900">Inicio</Link>
              <a href="#campamentos" className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-700 dark:text-gray-300 hover:text-white">Campamentos</a>
              {/* <a href="#nosotros" className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-700 dark:text-gray-300 hover:text-white">Nosotros</a> */}
            </div>
          </div>
        ) : (
          <></>
        )
      }
    </nav>
  )
}

export default Nabvar;
