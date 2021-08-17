import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Inscripcion.css';

const Formulario = () => {
  let { nombre } = useParams();
  
  return (
    <div className="sm:h-screen dark:bg-gray-800">
      <div className="block pt-16 mx-auto max-w-7xl 2xl:max-w-8xl">
        <div className="py-12 md:grid md:grid-cols-3 sm:mx-4 md:mx-6 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0 font-roboto">
              <h2 className="text-3xl font-medium text-yellow-500 saturacion-home">Inscripción</h2>
              <h3 className="text-xl font-semibold leading-10 text-gray-800 uppercase dark:text-gray-300">Campamento de Python</h3>
              <p className="mt-2 text-sm font-medium text-gray-600 lg:text-base dark:text-gray-400">
                ¡Estás a punto de dar el siguiente paso!
              </p>
              <p className="mt-2 text-sm text-gray-600 lg:text-base dark:text-gray-400">
                Somos Edullka, un campamento virtual que nace de la iniciativa de estudiantes de pregrado con el fin de poder ayudar a más estudiantes que deseen aprender temas relacionados a programación.
              </p>
              <p className="mt-2 text-sm text-gray-600 lg:text-base dark:text-gray-400">
                En esta oportunidad con el fin de conocerte mejor y brindarte una mejor experiencia según tus necesidades, te pedimos llenar el siguiente formulario.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="text-gray-700 shadow sm:rounded-md dark:bg-gray-800 dark:text-white sm:border sm:overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium">
                        Nombres <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        placeholder="ej. Roberto Marcos"
                        className="block w-full mt-1 placeholder-gray-400 border-gray-300 rounded-md shadow-sm dark:placeholder-gray-500 dark:bg-gray-800 dark:text-white focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium">
                        Apellidos <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        placeholder="ej. Martinez Mendoza"
                        className="block w-full mt-1 placeholder-gray-400 border-gray-300 rounded-md shadow-sm dark:placeholder-gray-500 dark:bg-gray-800 dark:text-white focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium">
                        Correo electrónico <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        placeholder="ej. nombre@servicio.dom"
                        className="block w-full mt-1 placeholder-gray-400 border-gray-300 rounded-md shadow-sm dark:placeholder-gray-500 dark:bg-gray-800 dark:text-white focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="phone" className="block text-sm font-medium">
                        Teléfono <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="phone"
                        placeholder="ej. 978916354"
                        className="block w-full mt-1 placeholder-gray-400 border-gray-300 rounded-md shadow-sm dark:placeholder-gray-500 dark:bg-gray-800 dark:text-white focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="birthday" className="block text-sm font-medium">
                        Fecha de nacimiento <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="birthday"
                        id="birthday"
                        autoComplete="birthday"
                        placeholder="ej. 01/01/2000"
                        className="block w-full mt-1 placeholder-gray-400 border-gray-300 rounded-md shadow-sm dark:placeholder-gray-500 dark:bg-gray-800 dark:text-white focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="university" className="block text-sm font-medium">
                        Universidad <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="university"
                        id="university"
                        autoComplete="university"
                        placeholder="ej. Universidad Nacional de Ingeniería"
                        className="block w-full mt-1 placeholder-gray-400 border-gray-300 rounded-md shadow-sm dark:placeholder-gray-500 dark:bg-gray-800 dark:text-white focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="carrer" className="block text-sm font-medium">
                        Carrera <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="carrer"
                        id="carrer"
                        autoComplete="carrer"
                        placeholder="ej. Ingeniería electrónica"
                        className="block w-full mt-1 placeholder-gray-400 border-gray-300 rounded-md shadow-sm dark:placeholder-gray-500 dark:bg-gray-800 dark:text-white focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="cycle" className="block text-sm font-medium">
                        Ciclo <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="cycle"
                        id="cycle"
                        autoComplete="cycle"
                        placeholder="ej. 2"
                        className="block w-full mt-1 placeholder-gray-400 border-gray-300 rounded-md shadow-sm dark:placeholder-gray-500 dark:bg-gray-800 dark:text-white focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                      />
                    </div>
                  </div>
                  <fieldset className="mt-6 mb-6 text-gray-700 dark:text-white">
                    <div>
                      <p className="text-sm font-medium">
                        Respecto al manejo de Python ¿En qué nivel consideras que estás? <span className="text-red-600">*</span>
                      </p>
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-ninguno"
                          name="push-notifications"
                          type="radio"
                          className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-400"
                        />
                        <label htmlFor="push-ninguno" className="block ml-3 text-sm font-medium">
                          Ningún conocimiento previo
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-basico"
                          name="push-notifications"
                          type="radio"
                          className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-400"
                        />
                        <label htmlFor="push-basico" className="block ml-3 text-sm font-medium">
                          Básico
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-400"
                        />
                        <label htmlFor="push-nothing" className="block ml-3 text-sm font-medium">
                          Intermedio
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-400"
                        />
                        <label htmlFor="push-nothing" className="block ml-3 text-sm font-medium">
                          Avanzado
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="px-4 py-3 text-right border-t bg-gray-50 dark:bg-gray-800 sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-orange-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formulario;
