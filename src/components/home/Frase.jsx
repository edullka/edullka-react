import React from 'react';

const Frase = () => {
  return (
    <div className="py-12 bg-white dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="w-8 h-0.5 mb-4 bg-gray-300"></div>
        <div className="text-3xl font-bold text-center dark:text-white">"Si puedes imaginarlo, puedes programarlo."</div>
        <div className="grid h-auto grid-cols-1 mt-6 md:flex md:items-center md:justify-center">
          <div className="flex items-center justify-center flex-initial">
            <img src="/images/alejandro_taboada.webp" alt="" className="object-cover w-10 h-10 rounded-full" />
          </div>
          <div className="flex-col w-full mt-4 text-yellow-500 md:flex-row lg:text-black md:mt-0 md:flex md:items-center md:justify-center">
            <div className="text-xl font-medium text-center dark:text-white md:text-lg md:ml-4">Alejandro Taboada</div>
            <div className="hidden mx-1 text-3xl font-bold text-yellow-500 md:block">/</div>
            <div className="text-lg text-center text-gray-500 dark:text-gray-400 lg:mx-1">Programación ATS <i className="fab fa-youtube"></i></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frase;
