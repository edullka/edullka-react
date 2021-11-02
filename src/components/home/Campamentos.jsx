import React from 'react';
import Card from './Card';

const Campamentos = () => {
  return (
    <div id="campamentos" className="pt-20 bg-white dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl 2xl:max-w-8xl sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wide text-yellow-500 uppercase">Campamentos</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Increíbles opciones novedosas
          </p>
        </div>
    
        <div className="mx-6 mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 lg:grid-cols-6 md:gap-x-8 md:gap-y-10">

            <Card 
              tipo={"Programación"} 
              nombre={"Campamento de Python"} 
              disabled={false} 
              logo={"images/python.webp"} 
              lista={[
                "images/perfil-jhomar astuyauri.png",
                "images/perfil-josé ñiquen.webp",
                "images/perfil-leonardo moina.jpeg"
              ]} 
              inscripcion={"https://forms.gle/K7NkZhsdRM42b4Ym8"} 
              informacion={"campamentos/python-basico"}
            />

            <Card 
              tipo={"Programación"} 
              nombre={"Campamento de HTML5, CSS3 y JavaScript"} 
              disabled={true} 
              logo={"images/web.webp"} 
              lista={[
                "images/user.webp",
                "images/user.webp",
                "images/user.webp",
                "images/user.webp",
                "images/user.webp"
              ]}  
            />

            <Card 
              tipo={"Programación"} 
              nombre={"Campamento de C"} 
              disabled={true} 
              logo={"images/c.webp"} 
              lista={[
                "images/user.webp",
                "images/user.webp",
                "images/user.webp",
                "images/user.webp",
                "images/user.webp"
              ]}  
            />
            
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Campamentos;
