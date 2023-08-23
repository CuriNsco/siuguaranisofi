import React from 'react'
import Navbar from "../../components/Navbar.jsx";
import SubNavbar from "../../components/SubNavbar.jsx";

const SolitcitarCertificacion = () => {
  return (
    <div><Navbar/>
    <SubNavbar/>
    
    <div className='mx-80'>
    <div>
          <h1 className="text-[#0088cc] font-bold text-2xl ">Listado de solicitudes de certificaciones</h1>
          <div className=" border-t-gray-100 border"/>
       </div>

        <div className='grid grid-cols-4 grid-rows-2 text-center my-4'>
          <div className='col-span-4 grid grid-cols-4'>
            <p className=' font-semibold'>Titulo</p>
            <p className=' font-semibold'>Fecha inicio trámite</p>
            <p className=' font-semibold'>Estado actual</p>
            <p className=' font-semibold'>Fecha cambio estado</p>
          </div>

          <div className='bg-[#f9f9f9] row-start-2 col-span-4 grid grid-cols-4 -mt-2'>
            <p className=''>Bachiller Universitario en Ciencias Aplicadas</p>
            <p className=''>24/02/2020</p>
            <p className=''>	- </p>
            <p className=''>24/02/2020</p>
          </div>

        </div>
    
    </div>
    </div>
  )
}

export default SolitcitarCertificacion