import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div style={{paddingTop: "0.1px"}} className="bg-white dark:bg-gray-800">
      <div className="relative flex items-center min-h-screen p-5 overflow-hidden bg-opacity-10 bg-yellow-id min-w-screen lg:p-20">
        <div className="relative items-center flex-1 min-w-full min-h-full p-10 text-center text-gray-800 bg-white border border-gray-200 shadow-xl dark:bg-gray-800 rounded-3xl lg:p-20 md:flex md:text-left">
          <div className="w-full md:w-1/2">
            <div className="mb-10 font-light text-gray-600 md:mb-10">
              <h1 className="mb-10 text-5xl font-black text-yellow-500 uppercase lg:text-7xl">SITIO NO ENCONTRADO</h1>
              <p className="text-xl dark:text-white">La página que está buscando no está disponible.</p>
              <p className="text-xl dark:text-white">Intente buscar de nuevo o utilice a continuación el botón <Link to="/" className="font-bold text-blue-id">Inicio</Link>.</p>
            </div>
          </div>
          <div class="w-full md:w-1/2 flex items-center justify-center">
            <img src="/images/404.png" className="w-96" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error;
