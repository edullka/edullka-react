import React from 'react';

const Head = (props) => {
  return (
    <>
      <div className="text-center md:text-left">
        <h2 className="text-xl font-semibold tracking-wide text-yellow-500 uppercase">Más Información</h2>
        <p className="text-4xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {props.nombre}
        </p>
      </div>

      <div className="flex flex-col w-full mt-6 md:flex-row">
        <div className="flex flex-col items-center justify-center mx-auto bg-gray-100 md:flex-none w-60 h-60 lg:mx-0 dark:bg-gray-700 rounded-xl">
          <img src={props.logo} alt="" className="object-contain w-48 h-48 xl:w-52 xl:h-52" />
        </div>
        <div className="px-4 mt-5 md:flex-grow md:mt-0 lg:px-6">
          <div className="mb-2 text-lg font-medium text-center text-orange-500 uppercase md:text-left">
            {props.tipo}
          </div>
          <div className="text-base text-justify text-gray-800 lg:text-left dark:text-gray-200">
            {props.descripcion} (<a href={props.link[1]} rel="noreferrer" target="_blank" className="text-blue-700 dark:text-blue-500">{props.link[0]}</a>)
          </div>
          <div className="">
            <div className="flex flex-wrap w-full mt-3 text-sm lg:mt-1">
              {
                props.etiquetas.map((etiqueta, index) => <div key={index} className="px-2 py-1 my-1 mr-2 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-900">{etiqueta}</div>)
              }
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center w-full text-sm md:justify-start lg:mt-1">
            <div className="py-1 my-1 mr-2 dark:text-gray-400">Última versión:</div>
            <div className="flex items-center justify-center px-2 py-1 my-1 mr-2 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-900"><a href={props.version[1]} rel="noreferrer" target="_blank">{props.version[0]}</a></div>
          </div>
          <div className="flex flex-wrap items-center justify-center w-full mt-2 md:px-8 md:justify-end">
            <a href="https://forms.gle/K7NkZhsdRM42b4Ym8" rel="noreferrer" target="_blank" className="flex items-center justify-center text-xl px-6 py-2 md:px-5 md:py-1.5 text-white bg-orange-500 dark:bg-yellow-500 rounded-md">Inscríbete ahora</a>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Head;
