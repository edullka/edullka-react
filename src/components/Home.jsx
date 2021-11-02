import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Campamentos from './home/Campamentos';
import Metodologia from './home/Metodologia';
import '../styles/Home.css'
import Nosotros from './home/Nosotros';
import Frase from './home/Frase';

const Home = () => {

  const [activos, setActivos] = useState(0);
  const [stateWsp, setStateWsp] = useState("");

  useEffect(() => {
      const getData = async() => {
        const url = 'https://discord.com/api/guilds/865355294975459349/widget.json';
        
        const respuesta = await fetch(url);
        const data = await respuesta.json();
  
        setActivos(data.members.length);
      }
      getData();
  }, []);

  const popUpWsp = () => {
    if(stateWsp === "active"){
      setStateWsp("");
    } else{
      setStateWsp("active");
    }
  }

  return (
    <div>
      <div>
        <header className="relative bg-scroll bg-white bg-center bg-repeat bg-cover h-sm-header 2xl:h-header">
          <div className="relative overflow-hidden bg-white h-sm-header 2xl:h-header dark:bg-gray-700">
            <div className="relative mx-auto lg:flex h-sm-header 2xl:h-header max-w-7xl 2xl:max-w-8xl">
              <div className="absolute z-20 w-full px-12 mt-16 sm:px-20 lg:px-0 md:px-80 bottom-2 sm:bottom-4 lg:bottom-auto lg:w-auto lg:right-0 lg:mt-8 lg:mr-8 lg:items-center lg:flex lg:top-16">
                <p className="w-full mb-2 font-medium text-center break-words sm:mb-4 sm:mx-4 lg:mb-0 lg:text-lg dark:text-white lg:w-60 font-roboto">¡Únete a nuestra comunidad en discord!</p>
                <div className="rounded-md shadow sm:mx-20 md:mx-0">
                  <a href="https://discord.gg/Q2XKVdCse9" className="relative flex items-center justify-center w-full h-12 px-8 py-3 text-xl font-medium text-white transition duration-500 ease-in-out transform border border-transparent rounded-md hover:-translate-y-1 hover:scale-110 bg-discord hover:bg-discord-light font-roboto">
                    <i className="fab fa-discord"></i>
                    <span>&nbsp;&nbsp;Discord</span>
                    <b className="absolute px-4 py-0.5 text-sm bg-green-600 rounded -right-4 -top-3"><span className="animate-pulse">En línea {activos}</span></b>
                  </a>
                </div>
              </div>
              <div className="z-10 w-full bg-white h-sm-header 2xl:h-header dark:bg-gray-700 lg:w-5/12 2xl:w-2/6">
                <main className="flex items-center justify-center h-full px-4 mx-auto mt-0 lg:justify-start max-w-7xl 2xl:max-w-8xl sm:px-6 lg:px-8">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="mt-8 mb-8 text-4xl font-black tracking-tight text-center text-gray-900 font-roboto dark:text-white lg:text-left leading-titulo 2xl:text-7.5xl sm:text-7xl">
                      <p className="block xl:inline">Descubre una nueva
                      <span className="block text-yellow-500 saturacion-home xl:inline"> metodología </span>
                      de aprendizaje</p>
                    </h1>
                    <p className="mb-2 text-2xl text-center text-gray-500 dark:text-white lg:text-left font-roboto lg:mt-8 lg:text-2xl sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">¡Empezamos el <span className="font-bold text-yellow-500 saturacion-home">Campamento de Python</span>!</p>
                    <p className="mb-4 text-center text-gray-500 text-md dark:text-white lg:text-left font-roboto lg:mt-2 lg:text-md sm:mt-2 sm:text-md sm:max-w-xl sm:mx-auto md:mt-2 lg:mx-0">Inscripciones abiertas del 19 al 31 de de octubre</p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow" >
                        <a href="https://forms.gle/K7NkZhsdRM42b4Ym8" style={{pointerEvents: "none"}}  rel="noreferrer" target="_blank" className="flex items-center justify-center w-full h-12 px-8 py-3 text-base font-medium text-white bg-yellow-500 opacity-70 border border-transparent rounded-md saturacion-home font-roboto sm:h-full hover:bg-yellow-600 md:py-4 md:text-lg md:px-10">
                          Inscríbete
                        </a>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link to="/campamentos/python-basico" className="flex items-center justify-center w-full h-12 px-8 py-2 text-base font-medium text-gray-600 border border-gray-500 rounded-md font-roboto sm:h-full sm:flex-col dark:text-white dark:border-white hover:bg-gray-500 hover:text-white md:py-2 md:text-lg md:px-10">
                          Más información
                        </Link>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
              <div className="hidden lg:justify-end lg:flex lg:items-end lg:w-7/12 2xl:w-4/6">
                <img className="object-contain bg-bottom lg:h-auto" src="images/header-edullka.png" alt="" />
              </div>
            </div>
            <div className="fixed z-40 bottom-9 right-8">
              <div onClick={popUpWsp} className="flex items-center justify-center w-16 h-16 rounded-full cursor-pointer wsp-button bg-greencode-wsp">
                <i className="relative text-4xl text-white fab fa-whatsapp"></i>
              </div>
            </div>
            <div className={"fixed z-40 " + stateWsp + " overflow-hidden bg-white contenedor-chat w-80 h-72 bottom-28 right-10 rounded-xl"} style={{transition: "transform 0.3s ease-in-out", transform: "translate(115%)"}}>
              <div className="relative flex flex-col justify-between w-full h-full bg-cover contenido-chat" style={{backgroundImage: `url(images/wsp-wallpaper.jpg)`}}>
                <div className="z-10 flex items-center justify-start p-3 bg-gray-300 dark:bg-gray-600 top">
                  <div onClick={popUpWsp} className={"absolute cursor-pointer close-button top-5 right-5"}><i className="text-2xl text-black fas fa-times dark:text-white"></i></div><img src="images/carpa.png" className="h-10 p-1 mr-3 bg-white border border-white w-11" style={{borderRadius: "50%"}} alt="favicon" />
                  <div className="flex flex-col estado-chat"><strong className="block mb-1 text-lg font-medium leading-4 dark:text-white">Edullka</strong><span className="text-sm leading-3 dark:text-white">En línea</span></div>
                </div>
                <div className="z-10 flex items-center justify-start p-3 bg-gray-300 dark:bg-gray-600 bottom">
                  <textarea className="p-2 leading-5 bg-white border border-white border-solid outline-none appearance-none resize-none rounded-xl h-11" style={{width: "calc(100% - 35px)"}} id="mensaje" cols="30" rows="1" placeholder="Escribe un mensaje aquí"></textarea>
                  <div className="cursor-pointer send-button" id="send-button">
                    <i className="block ml-3 text-2xl transform rotate-45 dark:text-white bi bi-cursor-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main style={{fontFamily: "'Roboto', sans-serif"}}>
          <Metodologia />
          <Campamentos />
          {/* <Nosotros /> */}
          <Frase />
        </main>
      </div>
    </div>
  )
}

export default Home;
