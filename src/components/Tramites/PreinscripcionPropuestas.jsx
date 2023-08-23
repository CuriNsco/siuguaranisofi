import React from 'react'
import Navbar from "../../components/Navbar.jsx";
import SubNavbar from "../../components/SubNavbar.jsx";

const PreinscripcionPropuestas = () => {
  return (
    <div><Navbar/>
    <SubNavbar/>
    
    <div className='mx-80'>
    <div>
          <h1 className="text-[#0088cc] font-bold text-2xl ">Preinscripción a Propuestas </h1>
          <div className=" border-t-gray-100 border"/>
      </div>

      <div className='flex mt-2'>

      <div className='bg-[#f5f5f5] rounded w-[270px] h-[44px] text-center flex items-center justify-start px-2'>
          <p>
            Preinscripciones
          </p>
      </div>


      <div className='bg-[#d9edf7] rounded border-2 border-[#bce8f1] w-[870px] mx-4 text-center flex items-center justify-center'>
          <p>
          No se registran preinscripciones.
          </p>
      </div>
      </div>

      <div className='bg-[#f5f5f5] w-[270px] h-[220px]'>
      <p className='font-semibold px-3 py-3 mt-4 '>
      Con esta operación podrás preinscribirte a otras Propuestas Formativas ofrecidas por la Institución. <br />

Tené presente que para hacer efectiva la inscripción, deberás completar los pasos definidos en tu unidad académica.
      </p>
    </div>

    </div>

    
    </div>
  )
}

export default PreinscripcionPropuestas