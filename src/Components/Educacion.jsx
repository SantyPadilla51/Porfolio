
export const Educacion = () => {
    return (
        <>
            <div id="Educacion" className="m-3">
                <h1 className="text-cyan-700 mt-72 uppercase text-5xl font-bold">Educacion</h1>

                <ul className="text-white mt-14">
                    <li className="mb-16">
                        <h2> Tecnicatura Superior en Desarrollo de Software - IFTS 18</h2>
                        <button className="text-black bg-white mt-2 p-3 hover:bg-slate-400">En Curso</button>
                    </li>
                    <li className="mb-16">
                        <h2> React de 0 a Experto - Udemy</h2>
                        <button className="text-black bg-white mt-2 p-3 hover:bg-gray-400">En Curso</button>
                    </li>
                    <li className="mb-16">
                        <h2> NodeJS de 0 a Experto - Udemy</h2>
                        <button className="text-black bg-white mt-2 p-3 hover:bg-gray-400">En Curso</button>
                    </li>
                    <li className="mb-16">
                        <h2>Curso de JavasCript Moderno - Udemy</h2>
                        <img src="../../public/certificado-udemy-js.jpg" alt="" width="400" height="200" className="mt-4"/>
                    </li>
                    <li className="mb-10">
                        <h2>Desarrollo Web - CoderHouse</h2>
                        <img src="../../public/Certificado-Coder-House.png" alt="" width="400" height="200" className="mt-4"/>
                    </li>
                </ul>
            </div>

        </>
    )
}
