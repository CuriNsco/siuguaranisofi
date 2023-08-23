import React from 'react'
import Navbar from "../../components/Navbar.jsx";
import SubNavbar from "../../components/SubNavbar.jsx";

const PromedioAvance = () => {
  return (
    <div><Navbar/>
    <SubNavbar/>
    
    <div className='mx-80'>
      <div>
          <h1 className="text-[#0088cc] font-bold text-2xl ">Promedio y avance de la carrera</h1>
          <div className=" border-t-gray-100 border"/>
       </div>
      
        <div className='bg-[#d9edf7] border-2 border-[#bce8f1] rounded text-center py-2 mt-2'>
          <p className='font-bold my-2'>Promedio general de la carrera:<span className='text-white bg-[#3a87ad] rounded-2xl px-2 py-[2px] font-semibold'>6.10</span></p>
          <p className='font-bold my-2'>Porcentaje de avance:<span className='text-white bg-[#3a87ad] rounded-2xl px-2 py-[2px] font-semibold'>97.56%</span></p>
        </div>

    </div>
    </div>
  )
}

export default PromedioAvance