import React from 'react'
import Navbar from "../../components/Navbar.jsx";
import SubNavbar from "../../components/SubNavbar.jsx";

const EncuestasRespondidas = () => {
  return (
    <div><Navbar/>
    <SubNavbar/>
    
    <div className='mx-80'>
    <div>
          <h1 className="text-[#0088cc] font-bold text-2xl ">Encuestas Respondidas</h1>
          <div className=" border-t-gray-100 border"/>
      </div>

      <div className='bg-[#fcf8e3] border-2 border-[#fbeed5] text-center py-2 mt-2'>
                <p className='font-bold text-[#c09853]'>
                Todas las encuestas estan respondidas en tiempo y forma.
                </p>
            </div>
    </div>
    
    </div>
  )
}

export default EncuestasRespondidas