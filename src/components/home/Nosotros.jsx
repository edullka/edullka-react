import React from 'react';

const Nosotros = () => {
  return (
    <div id="nosotros" className="pt-20 bg-white dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl 2xl:max-w-8xl sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wide text-yellow-500 uppercase">Nosotros</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Conócenos un poco más
          </p>
          <p className="max-w-2xl mt-4 text-lg text-gray-500 dark:text-gray-300 lg:mx-auto">
            Edullka nace con la iniciativa de mostrar las habilidades que necesitan los estudiantes y apasionados por las nuevas tecnologías en el campo de aplicación. Buscamos ser los primeros en darte la posibilidad de impulsar tus habilidades y volverte un futuro profesional competitivo en el mercado.
          </p>
          <p className="mt-4 text-lg font-bold tracking-wide text-yellow-400 uppercase">
            De estudiantes para estudiantes
          </p>
        </div>
    
        <div className="mx-6 mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-6 lg:grid-cols-6 md:gap-x-8 md:gap-y-10">

            <div className="flex-col col-span-2">
              <div className="relative flex items-center justify-center w-full h-60">
                <img src="/images/perfil-jhomar astuyauri.png" alt="" className="object-cover w-48 h-48 rounded-full" />
              </div>

              <div className="mx-4 my-6 mb-2 text-center">
                <dt className="text-xl font-bold leading-6 text-gray-900 dark:text-white">Jhomar Astuyauri</dt>
                <div className="font-medium text-yellow-500">Área de Gestión</div>
              </div>
              
              <div className="w-full pb-4">
                <ul className="flex items-center justify-center w-full">
                  <li className="mx-3"><a href="https://www.facebook.com/jhomar.astuyauriherencia.12/" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-facebook"></i></a></li>
                  <li className="mx-3"><a href="https://www.linkedin.com/in/jhomar-astuyauri/" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-linkedin"></i></a></li>
                  <li className="relative mx-3">
                    <i className="text-2xl text-gray-400 cursor-pointer hover:text-gray-500 far fa-envelope"></i>
                    <div className="absolute right-0 hidden w-auto py-1 mt-2 origin-top-left bg-white border rounded-md shadow-lg dark:border-gray-700 dark:bg-gray-700 ring-1 ring-black ring-opacity-5 contenedor-correo-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                      <p className="block px-4 py-2 text-sm text-gray-700 dark:text-white">jhomar.astuyauri@ieee.org</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
    
            <div className="flex-col col-span-2">
              <div className="relative flex items-center justify-center w-full h-60">
                <img src="/images/perfil-josé guerra.webp" alt="" className="object-cover w-48 h-48 rounded-full" />
              </div>

              <div className="mx-4 my-6 mb-2 text-center">
                <dt className="text-xl font-bold leading-6 text-gray-900 dark:text-white">José Guerra</dt>
                <div className="font-medium text-yellow-500">Área de Logística</div>
              </div>

              <div className="w-full pb-4">
                <ul className="flex items-center justify-center w-full">
                  <li className="mx-3"><a href="https://www.facebook.com/josecarlos.guerramartinez.5/" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-facebook"></i></a></li>
                  <li className="mx-3"><a href="https://www.linkedin.com/in/jos%C3%A9-carlos-guerra-martinez-7903b41b2/" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-linkedin"></i></a></li>
                  <li className="mx-3"><a href="https://www.instagram.com/jocgm09/" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-instagram"></i></a></li>
                  <li className="mx-3"><a href="https://github.com/JoCGM09" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-github"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="flex-col col-span-2">
              <div className="relative flex items-center justify-center w-full h-60">
                <img src="/images/perfil-manuel baella.webp" alt="" className="object-cover w-48 h-48 rounded-full" />
              </div>

              <div className="mx-4 my-6 mb-2 text-center">
                <dt className="text-xl font-bold leading-6 text-gray-900 dark:text-white">Manuel Baella</dt>
                <div className="font-medium text-yellow-500">Área de Diseño</div>
              </div>
              
              <div className="w-full pb-4">
                <ul className="flex items-center justify-center w-full">
                  <li className="mx-3"><a href="https://www.facebook.com/mbaellav" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-facebook"></i></a></li>
                  <li className="mx-3"><a href="https://www.linkedin.com/in/manuel-baella-vidal/" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-linkedin"></i></a></li>
                  <li className="mx-3"><a href="https://www.instagram.com/mnu_baella/" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-instagram"></i></a></li>
                  <li className="mx-3"><a href="https://github.com/mnuxD" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-github"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="flex-col col-span-2">
              <div className="relative flex items-center justify-center w-full h-60">
                <img src="/images/perfil-pamela villacorta.webp" alt="" className="object-cover w-48 h-48 rounded-full" />
              </div>

              <div className="mx-4 my-6 mb-2 text-center">
                <dt className="text-xl font-bold leading-6 text-gray-900 dark:text-white">Pamela Villacorta</dt>
                <div className="font-medium text-yellow-500">Área de Relaciones Públicas</div>
              </div>
              
              <div className="w-full pb-4">
                <ul className="flex items-center justify-center w-full">
                  <li className="mx-3"><a href="https://www.linkedin.com/in/pamela-villacorta" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-linkedin"></i></a></li>
                  <li className="relative mx-3">
                    <i className="text-2xl text-gray-400 cursor-pointer hover:text-gray-500 far fa-envelope correo-button-2"></i>
                    <div className="absolute right-0 hidden w-auto py-1 mt-2 origin-top-left bg-white border rounded-md shadow-lg dark:border-gray-700 dark:bg-gray-700 ring-1 ring-black ring-opacity-5 contenedor-correo-2" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                      <p className="block px-4 py-2 text-sm text-gray-700 dark:text-white">pvillacorta150@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex-col-reverse col-span-2">
              <div className="relative flex items-center justify-center w-full h-60">
                <img src="/images/perfil-jhairo valladares.webp" alt="" className="object-cover w-48 h-48 rounded-full" />
              </div>

              <div className="mx-4 my-6 mb-2 text-center">
                <dt className="text-xl font-bold leading-6 text-gray-900 dark:text-white">Jhairo Valladares</dt>
                <div className="font-medium text-yellow-500">Área de Diseño</div>
              </div>
              
              <div className="w-full pb-4">
                <ul className="flex items-center justify-center w-full">
                  <li className="mx-3"><a href="https://www.facebook.com/jhairo.valladares.sanchez" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-facebook"></i></a></li>
                  <li className="mx-3"><a href="https://www.linkedin.com/in/jhairo-valladares-9b9a17203" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-linkedin"></i></a></li>
                  <li className="mx-3"><a href="https://www.instagram.com/j11jamir" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-instagram"></i></a></li>
                  <li className="mx-3"><a href="https://www.behance.net/jhairovalladares" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-behance"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="flex-col col-span-2">
              <div className="relative flex items-center justify-center w-full h-60">
                <img src="/images/perfil-josé ñiquen.webp" alt="" className="object-cover w-48 h-48 rounded-full" />
              </div>

              <div className="mx-4 my-6 mb-2 text-center">
                <dt className="text-xl font-bold leading-6 text-gray-900 dark:text-white">José Ñiquen</dt>
                <div className="font-medium text-yellow-500">Área de Capacitaciones</div>
              </div>
              
              <div className="w-full pb-4">
                <ul className="flex items-center justify-center w-full">
                  <li className="mx-3"><a href="https://www.facebook.com/jose.niquen.f" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-facebook"></i></a></li>
                  <li className="mx-3"><a href="https://www.linkedin.com/in/jose-ñiquen" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-linkedin"></i></a></li>
                  <li className="mx-3"><a href="https://www.instagram.com/jose.niquen/" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-instagram"></i></a></li>
                  <li className="mx-3"><a href="https://github.com/joseniquen08" rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-github"></i></a></li>
                  <li className="relative mx-3">
                    <i className="text-2xl text-gray-400 cursor-pointer hover:text-gray-500 far fa-envelope correo-button-3"></i>
                    <div className="absolute right-0 hidden w-auto py-1 mt-2 origin-top-left bg-white border rounded-md shadow-lg dark:border-gray-700 dark:bg-gray-700 ring-1 ring-black ring-opacity-5 contenedor-correo-3" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                      <p className="block px-4 py-2 text-sm text-gray-700 dark:text-white">j.armando0807@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Nosotros;
