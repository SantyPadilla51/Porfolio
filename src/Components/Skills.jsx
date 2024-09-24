
const Skills = () => {
  return (
    <>
      <div id="Skills" className="m-3" >
        <h1 className="mt-96 text-white text-5xl uppercase font-bold">Skills</h1>
        <div>
          <h3 className="text-white mt-16 uppercase text-2xl font-bold">Lenguajes de Programacion</h3>
          <ul className="text-white mt-3 flex flex-wrap gap-5">
            <li className="flex items-center gap-2 bg-yellow-500 p-2 text-black"> <i className="fab fa-js icon text-2xl"></i> JavasCript</li>
            <li className="flex items-center gap-2 bg-gradient-to-l from-blue-700 to-yellow-300 p-2 text-black"> <i className="fab fa-python icon text-2xl"></i> Python</li>
            <li className="flex items-center gap-2 bg-green-600 p-2 text-black"> <i className="fab fa-node-js icon text-2xl"></i> NodeJs</li>
            <li className="flex items-center gap-2 bg-orange-600 p-2 text-black"> <i className="fab fa-html5 icon text-2xl"></i> HTML</li>
            <li className="flex items-center gap-2 bg-blue-600 p-2 text-black"> <i className="fab fa-css3 icon text-2xl"></i> Css</li>
            <li className="flex items-center gap-2 bg-blue-600 p-2 text-black"> <i className="fa fa-database icon text-2xl"></i> SQL</li>
            <li className="flex items-center gap-2 bg-green-600 p-2 text-black"> <i className="fa fa-database icon text-2xl"></i> MongoDB</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white mt-16 uppercase text-2xl font-bold">Frameworks y liberias</h3>
          <ul className="text-white mt-3 flex flex-wrap gap-5">
            <li className="flex items-center gap-2 text-black p-2 bg-violet-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-bootstrap" width="35" height="35" viewBox="0 0 24 24" stroke-width="1" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" />
                <path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" />
                <path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" />
              </svg>
              BootStrap
            </li>
            <li className="flex items-center gap-2 p-2 text-black bg-cyan-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tailwind" width="35" height="35" viewBox="0 0 24 24" stroke-width="1" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
              </svg>
              TailwindCSS</li>
            <li className="flex items-center gap-2 text-black p-2 bg-blue-500"> <i className="fab fa-react icon text-2xl"></i> React</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white mt-16 uppercase text-2xl font-bold">Software y Herramientas</h3>
          <ul className="text-white mt-3 flex gap-5">
            <li className="flex items-center gap-2 text-black p-2 bg-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-visual-studio" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1z" />
              </svg>
              Visual Studio Code
            </li>
            <li className="flex items-center gap-2 text-black p-2 bg-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-spreadsheet" width="35" height="35" viewBox="0 0 24 24" stroke-width="1" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M8 11h8v7h-8z" />
                <path d="M8 15h8" />
                <path d="M11 11v7" />
              </svg>
              Excel
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Skills