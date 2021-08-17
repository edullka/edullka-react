import React from 'react'

const Metodologia = () => {
  return (
    <div id="metologia" className="pt-12 pb-12 bg-gray-100 dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl 2xl:max-w-8xl sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wide text-yellow-500 uppercase">Metodología</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Innovando la educación virtual
          </p>
        </div>
    
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center text-2xl text-white bg-yellow-500 rounded-md w-14 h-14">
                  <i className="fas fa-campground"></i>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-xl font-medium leading-6 text-gray-900 dark:text-white">
                  Campamento virtual
                </dt>
                <dd className="lg:mt-2 mt-0.5 text-base dark:text-gray-300 text-gray-500">
                  Enseñanza de cursos con estilo de campamento. Adaptamos esta actividad y lo llevamos a un entorno virtual.
                </dd>
              </div>
            </div>
    
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center text-2xl text-white bg-yellow-500 rounded-md w-14 h-14">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-xl font-medium leading-6 text-gray-900 dark:text-white">
                  Tutores
                </dt>
                <dd className="lg:mt-2 mt-0.5 text-base dark:text-gray-300 text-gray-500">
                  Cada campamento cuenta con tutores preseleccionados y capacitados para brindar una experiencia satisfactoria.
                </dd>
              </div>
            </div>
    
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center text-2xl text-white bg-yellow-500 rounded-md w-14 h-14">
                  <i className="fas fa-users"></i>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-xl font-medium leading-6 text-gray-900 dark:text-white">
                  Sinergia
                </dt>
                <dd className="lg:mt-2 mt-0.5 text-base dark:text-gray-300 text-gray-500">
                  Contamos con una metodología dinámica y grupal, con la intención de que puedan trabajar en equipo.
                </dd>
              </div>
            </div>
    
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center text-2xl text-white bg-yellow-500 rounded-md w-14 h-14">
                  <i className="fas fa-laptop-code"></i>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-xl font-medium leading-6 text-gray-900 dark:text-white">
                  Desafío
                </dt>
                <dd className="lg:mt-2 mt-0.5 text-base dark:text-gray-300 text-gray-500">
                  Antes de finalizar cada campamento se realiza un concurso con increíbles premios.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Metodologia;
