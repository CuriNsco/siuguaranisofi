import React from 'react'
import Navbar from './Navbar'
import SubNavbar from './SubNavbar'
import NohayActividad from './NohayActividad'
import { arrowleft } from '../assets'

const InscripcionMaterias = () => {
  return (
    <div><Navbar/>
    <SubNavbar/>
    <div className='mx-80'>
    <div>
          <h1 className="text-[#0088cc] font-bold text-2xl ">Inscripción a materias</h1>
          <div className=" border-t-gray-100 border"/>
      </div>

      <div className='flex '>
        <NohayActividad/>
        <div className=' mt-4 ml-8 border-2 border-t-white border-r-white py-2 px-2'>
          <h1 className='text-[18px] font-bold'>
            Comenzar inscripcion
          </h1>
          <div className='flex items-center'> 
            <img src={arrowleft} alt="arrowleft" className='w-[13px] h-[13px] mt-2'/>
          <p className='text-[13px] mt-2'>
          Seleccioná una actividad del listado para ver aquí las comisiones y subcomisiones a las que te podés inscribir
          </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default InscripcionMaterias