import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../database/firebaseconfig';
import Head from './info/Head';
import '../styles/Informacion.css';
import About from './info/About';
import AboutPython from './info/python-basico/AboutPython';
import Error from './Error';
import Loading from './Loading';

const Informacion = () => {

  let { nombre } = useParams();

  const [camp, setCamp] = useState([]);
  const [detalles, setDetalles] = useState([]);
  const [planEst, setPlanEst] = useState({plan: [{temas: [], nombre: ""}]});
  const [loading, setLoading] = useState(true);

  const comp = {
    'python-basico': <AboutPython />
  };

  useEffect(() => {
    const getInfoCamp = async () => {
      const docs = await db.collection('campamentos').doc(nombre);
      docs.get().then((doc) => {
        if(doc.exists){
          const infoCamp = {id: doc.id, ...doc.data()};
          setCamp(infoCamp);
        } else {
          console.log("No hay");
        }
      }).catch((error) => {
        console.log(error);
      });
      await docs.collection('mas-info').doc('detalles').get().then((det) => {
        if(det.exists){
          const details = {id: det.id, ...det.data()};
          setDetalles(details);
        } else {
          console.log("Tampoco hay");
        }
      }).catch((error) => {
        console.log(error);
      });
      await docs.collection('mas-info').doc('plan-estudios').get().then((plan) => {
        if(plan.exists){
          const plan_estudios = {id: plan.id, ...plan.data()};
          setPlanEst(plan_estudios);
        } else {
          console.log("Tampoco hay");
        }
      }).catch((error) => {
        console.log(error);
      });
    }
    const cargarPagina = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    getInfoCamp();
    cargarPagina();
  }, [nombre]);
  
  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
          nombre === camp.id ? (
            <div style={{paddingTop: "0.1px"}} className="bg-white dark:bg-gray-800">
              <main className="mt-16 md:mx-14 lg:mx-24" style={{fontFamily: "'Roboto', sans-serif"}}>
                <div className="py-12 bg-white dark:bg-gray-800">
                  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <Head 
                      nombre={camp.nombre} 
                      logo={camp.logo} 
                      tipo={camp.tipo} 
                      descripcion={camp.descripcion} 
                      etiquetas={camp.etiquetas} 
                      version={camp.ultima_version} 
                      link={camp.link}
                    />
  
                    <div className="w-full mt-8 mb-2">
                      <div className="w-full">
                        <h3 className="text-3xl font-semibold text-center text-yellow-500">Sobre el campamento</h3>
                      </div>
                    </div>
  
                    <div className="mx-4 mt-6 overflow-hidden bg-white border border-gray-300 shadow dark:border-gray-800 dark:bg-gray-900 lg:mx-0 sm:rounded-lg">
                      <div className="flex items-center justify-between px-4 py-5 sm:px-6">
                        <h3 className="text-2xl font-medium leading-6 text-gray-900 dark:text-white">
                          Detalles
                        </h3>
                        <h3 className="p-2 text-2xl font-bold leading-6 text-gray-800 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-white">{detalles.tipo}</h3>
                      </div>
                      <div className="border-t border-gray-300 dark:border-gray-200">
                        <dl className="divide-y divide-gray-300">
                          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-600 dark:text-gray-300">
                              Fecha de inicio
                            </dt>
                            <dd className="mt-1 text-base text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                              {detalles.fecha_inicio}
                            </dd>
                          </div>
                          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-600 dark:text-gray-300">
                              Duración
                            </dt>
                            <dd className="mt-1 text-base text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                              {detalles.duracion}
                            </dd>
                          </div>
                          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
                              Talleres
                            </dt>
                            <dd className="mt-1 text-base text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
                              {detalles.talleres}
                            </dd>
                          </div>
                          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
                              Mentores
                            </dt>
                            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
                              <ul className="border border-gray-200 divide-y divide-gray-300 rounded-md">
                                {
                                  detalles.mentores.map((mentor, index) => (
                                    <li key={index} className="flex items-center py-3 pl-3 pr-4 text-sm">
                                      <div className="flex items-center justify-center flex-initial w-10 h-10">
                                        <img src={mentor.img} alt="" className="object-cover w-10 h-10 rounded-full" />
                                      </div>
                                      <div className="flex-col flex-initial md:flex-row lg:text-black md:flex md:items-center md:justify-center">
                                        <div className="ml-4 text-base font-base dark:text-white">{mentor.nombre}</div>
                                      </div>
                                      <div className="flex-auto">
                                        <ul className="flex items-center justify-end w-full">
                                          {mentor.facebook !== "" ? (<li className="mx-3"><a href={mentor.facebook} rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-facebook"></i></a></li>) : (<></>)}
                                          {mentor.linkedin !== "" ? (<li className="mx-3"><a href={mentor.linkedin} rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-linkedin"></i></a></li>) : (<></>)}
                                          {mentor.github !== "" ? (<li className="mx-3"><a href={mentor.github} rel="noreferrer" target="_blank"><i className="text-2xl text-gray-400 hover:text-gray-500 fab fa-github"></i></a></li>) : (<></>)}
                                        </ul>
                                      </div>
                                    </li>
                                  ))
                                }
                              </ul>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
  
                    <div className="mx-4 mt-10 overflow-hidden bg-white border border-gray-300 shadow dark:border-gray-800 dark:bg-gray-900 lg:mx-0 sm:rounded-lg">
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-2xl font-medium leading-6 text-gray-900 dark:text-white">
                          Plan de Estudios
                        </h3>
                      </div>
                      <div className="border-t border-gray-300 dark:border-gray-200">
                        <div className="grid grid-flow-row px-6 py-6 text-center md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                          {
                            planEst.plan.map((tema, index1) => (
                              <div key={index1} className="flex flex-col items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-200">
                                <p className="mb-2 text-xl font-medium text-orange-500">{tema.nombre}</p>
                                <ul className="text-base dark:text-gray-100">
                                  {
                                    tema.temas.map((titulo, index2) => (
                                      <li key={index2}>{titulo}</li>
                                    ))
                                  }
                                </ul>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                    <About componente={comp[nombre]} />
                  </div>
                </div>
              </main>
            </div>
          ) : (
            <Error />
          )
        )
      }
    </>
  );
}

export default Informacion;
