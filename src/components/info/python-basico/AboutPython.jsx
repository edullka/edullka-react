import React from 'react';

const AboutPython = () => {
  return (
    <>
      <div className="w-full mt-12 mb-4">
        <div className="w-full">
          <h3 className="text-3xl font-semibold tracking-wide text-center text-yellow-500">Conoce Python</h3>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-5 py-4 lg:flex-row">
        <div className="text-gray-400 bg-white border border-gray-200 rounded-lg shadow-md min-w-max dark:border-gray-700 dark:bg-gray-900">
            <div className="px-5 py-3 border-b border-gray-200 dark:border-gray-800">
                <div className="inline-block w-3 h-3 mr-2 bg-red-500 rounded-full"></div>
                <div className="inline-block w-3 h-3 mr-2 bg-yellow-300 rounded-full"></div>
                <div className="inline-block w-3 h-3 mr-2 bg-green-400 rounded-full"></div>
            </div>
            <div className="px-5 py-6 text-sm break-all md:text-base xl:text-lg code">
              <p><span className="text-redcode dark:text-greencode">print</span>(<span className="text-greencode-light dark:text-bluecode">"Hola, yo soy Python"</span>)</p>
              <br />
              <p><span className="dark:text-bluecode text-greencode-light">nombre</span><span className="dark:text-greencode text-redcode"> = input</span>(<span className="dark:text-bluecode text-greencode-light">'¿Cuál es tu nombre?\n'</span>)</p>
              <p><span className="text-redcode dark:text-greencode">print</span>(<span className="text-greencode-light dark:text-bluecode">'Hola, %s.'</span> <span className="text-redcode dark:text-greencode">%</span> <span className="text-greencode-light dark:text-bluecode">nombre</span>)</p>
            </div>
        </div>

        <div className="mx-12 mt-8 text-center lg:mt-0 lg:text-left">
          <h3 className="text-xl text-orange-500">Rápido y fácil de aprender</h3>
          <p className="text-gray-800 dark:text-gray-200">Los programadores experimentados en cualquier otro idioma pueden aprender Python muy rápidamente, y los principiantes encuentran fácil de aprender la sintaxis limpia y la estructura de sangría.</p>
          <br />
          <a href="https://repl.it/@joseniquen/EdullkaWeb-1" className="px-2 py-2 text-gray-500 border border-yellow-500 rounded-lg dark:text-gray-200 dark:bg-yellow-500" rel="noreferrer" target="_blank">Prueba aquí</a>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-center px-5 py-4 lg:flex-row">
        <div className="mx-12 mt-8 text-center lg:mt-0 lg:text-right">
          <h3 className="text-xl text-orange-500">Todo el flujo que esperabas</h3>
          <p className="text-gray-800 dark:text-gray-200">Python conoce las declaraciones de flujo de control habituales que se declaran en otros lenguajes — if, for, while y range — con algunos de sus propios cambios, por supuesto.</p>
          <br />
          <a href="https://repl.it/@joseniquen/EdullkaWeb-2" className="px-2 py-2 text-gray-500 border border-yellow-500 rounded-lg dark:text-gray-200 dark:bg-yellow-500" rel="noreferrer" target="_blank">Prueba aquí</a>
        </div>
        
        <div className="text-gray-400 bg-white border border-gray-200 rounded-lg shadow-md min-w-max dark:border-gray-700 dark:bg-gray-900">
          <div className="px-5 py-3 border-b border-gray-200 dark:border-gray-800">
              <div className="inline-block w-3 h-3 mr-2 bg-red-500 rounded-full"></div>
              <div className="inline-block w-3 h-3 mr-2 bg-yellow-300 rounded-full"></div>
              <div className="inline-block w-3 h-3 mr-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="px-5 py-6 text-sm break-all md:text-base xl:text-lg code">
            <p><span className="text-redcode-light dark:text-bluecode">numeros </span><span className="text-bluecode-light dark:text-greencode">= </span>[<span className="text-browncode dark:text-redcode-dark">2</span>,<span className="text-browncode dark:text-redcode-dark"> 4</span>,<span className="text-browncode dark:text-redcode-dark"> 6</span>,<span className="text-browncode dark:text-redcode-dark"> 8</span>]</p>
            <p><span className="text-redcode-light dark:text-bluecode">producto </span><span className="text-bluecode-light dark:text-greencode">= </span><span className="text-browncode dark:text-redcode-dark">1</span></p>
            <p><span className="text-purplecode dark:text-yellowcode">for </span><span className="text-redcode-light dark:text-bluecode">numero </span><span className="text-purplecode dark:text-yellowcode">in </span><span className="text-redcode-light dark:text-bluecode">numeros</span>:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-redcode-light dark:text-bluecode">producto </span><span className="text-bluecode-light dark:text-greencode">= </span><span className="text-redcode-light dark:text-bluecode">producto </span><span className="text-bluecode-light dark:text-greencode">* </span><span className="text-redcode-light dark:text-bluecode">numero</span></p>
            <br />
            <p><span className="text-redcode dark:text-greencode">print</span>(<span className="dark:text-bluecode text-greencode-light">'El producto es:'</span>, <span className="text-redcode-light dark:text-bluecode">producto</span>)</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-5 py-4 lg:flex-row">                  
        <div className="text-gray-400 bg-white border border-gray-200 rounded-lg shadow-md min-w-max dark:border-gray-700 dark:bg-gray-900">
          <div className="px-5 py-3 pr-20 border-b border-gray-200 dark:border-gray-800">
              <div className="inline-block w-3 h-3 mr-2 bg-red-500 rounded-full"></div>
              <div className="inline-block w-3 h-3 mr-2 bg-yellow-300 rounded-full"></div>
              <div className="inline-block w-3 h-3 mr-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="px-5 py-6 pr-20 text-sm break-all md:text-base xl:text-lg code">
            <p><span className="text-purplecode dark:text-yellowcode">def </span><span className="text-bluecode-light dark:text-bluecode">fibonacci</span>(<span className="text-bluecode-light dark:text-bluecode">n</span>):</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-redcode-light dark:text-bluecode">a</span>, <span className="text-redcode-light dark:text-bluecode">b </span><span className="text-bluecode-light dark:text-greencode">= </span><span className="text-browncode dark:text-redcode-dark">0</span>, <span className="text-browncode dark:text-redcode-dark">1</span></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purplecode dark:text-yellowcode">while </span><span className="text-redcode-light dark:text-bluecode">a </span><span className="dark:text-greencode">&lt;</span><span className="text-redcode-light dark:text-bluecode"> n</span>:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-redcode dark:text-greencode">print</span>(<span className="text-redcode-light dark:text-bluecode">a</span>, <span className="text-redcode-light dark:text-bluecode"> end</span><span className="text-bluecode-light dark:text-greencode">=</span><span className="text-greencode-dark dark:text-bluecode">' '</span>)</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-redcode-light dark:text-bluecode">a</span>, <span className="text-redcode-light dark:text-bluecode">b </span><span className="text-bluecode-light dark:text-greencode">= </span><span className="text-redcode-light dark:text-bluecode">b</span>, <span className="text-redcode-light dark:text-bluecode">a</span><span className="text-bluecode-light dark:text-greencode">+</span><span className="text-redcode-light dark:text-bluecode">b</span></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-redcode dark:text-greencode">print</span>()</p>
            <p><span className="text-redcode-light dark:text-bluecode">fibonacci</span>(<span className="text-browncode dark:text-redcode-dark">1000</span>)</p>
          </div>
        </div>

        <div className="mx-12 mt-8 text-center lg:mt-0 lg:text-left">
          <h3 className="text-xl text-orange-500">Funciones definidas</h3>
          <p className="text-gray-800 dark:text-gray-200">El núcleo de la programación extensible es definir funciones. Python permite argumentos obligatorios y opcionales, argumentos de palabras clave e incluso listas de argumentos arbitrarios.</p>
          <br />
          <a href="https://repl.it/@joseniquen/EdullkaWeb-3" className="px-3 py-2 text-gray-500 border border-yellow-500 rounded-lg dark:text-gray-200 dark:bg-yellow-500" rel="noreferrer" target="_blank">Prueba aquí</a>
        </div>
      </div>
    </>
  )
}

export default AboutPython;
