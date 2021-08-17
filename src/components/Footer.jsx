import React, { useState } from 'react';

const Footer = () => {

  const [correo, setCorreo] = useState(false);

  const pressCorreo = () => {
    if(correo) {
      setCorreo(false);
    } else {
      setCorreo(true);
    }
  }

  return (
    <footer className="flex items-center justify-center w-full border-t border-gray-300 dark:bg-gray-800 px-14">
      <div className="grid w-full grid-cols-1 max-w-7xl 2xl:max-w-8xl md:grid-cols-2">
        <div className="w-full my-4 text-base text-center text-gray-500 dark:text-white md:text-left">
          © 2021 Edullka. Todos los derechos reservados.
        </div>
        <ul className="flex items-center justify-center w-full mb-8 md:my-4 md:justify-end">
          <li className="mx-3"><a href="https://www.facebook.com/CampamentosEdullka" rel="noreferrer" target="_blank"><i className="text-4xl text-gray-400 md:text-2xl lg:text-xl hover:text-gray-500 fab fa-facebook"></i></a></li>
          <li className="relative mx-3">
            {
              correo ? (
                <div className="absolute right-0 block w-auto py-1 mt-2 origin-top-right bg-white border rounded-md shadow-lg bottom-11 md:bottom-9 lg:bottom-7 dark:border-gray-700 dark:bg-gray-700 ring-1 ring-black ring-opacity-5 contenedor-correo-4" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <p className="block px-4 py-2 text-sm text-gray-700 dark:text-white">edullka.campamento@gmail.com</p>
                </div>
              ) : (
                <></>
              )
            }
            <i onClick={pressCorreo} className="text-4xl text-gray-400 cursor-pointer md:text-2xl lg:text-xl hover:text-gray-500 fas fa-envelope"></i>
          </li>
          <li className="mx-3">
            <a href="https://github.com/edullka" rel="noreferrer" target="_blank">
              <i className="text-4xl text-gray-400 md:text-2xl lg:text-xl hover:text-gray-500 fab fa-github"></i>
            </a>
          </li>
          <li className="mx-3">
            <a href="https://discord.gg/Q2XKVdCse9" rel="noreferrer" target="_blank">
              <i className="text-4xl text-gray-400 md:text-2xl lg:text-xl hover:text-gray-500 fab fa-discord"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
