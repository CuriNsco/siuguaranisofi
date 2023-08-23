import React from 'react'
import Navbar from "../Navbar.jsx";
import SubNavbar from "../SubNavbar.jsx";

const Inasistencias = () => {
  return (
    <div><Navbar/>
    <SubNavbar/>
    <div className='mx-80'>
    <div>
          <h1 className="text-[#0088cc] font-bold text-2xl ">Reporte de inasistencias</h1>
          <div className=" border-t-gray-100 border"/>
      </div>

      <div className='bg-[#fcf8e3] border-2 border-[#fbeed5] text-center py-2 mt-2'>
                <p className='font-bold text-[#c09853]'>
                No se registran inasistencias correspondientes a los períodos lectivos vigentes. 
                </p>
            </div>
    </div>
    </div>
  )
}

export default Inasistencias