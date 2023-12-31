import React from 'react'
import Navbar from "../../components/Navbar.jsx";
import SubNavbar from "../../components/SubNavbar.jsx";

const ReaccionarOptativas = () => {
  return (
    <div><Navbar/>
    <SubNavbar/>
    
    <div className='mx-80'>
    <div>
          <h1 className="text-[#0088cc] font-bold text-2xl ">Reasignación de Optativas</h1>
          <div className=" border-t-gray-100 border"/>
      </div>

      <div className='bg-[#fcf8e3] border-2 border-[#fbeed5] text-center py-2 mt-2'>
                <p className='font-bold text-[#c09853]'>
                El plan de estudios no tiene optativas compartidas entre genéricas.
                </p>
            </div>
    </div>
    
    </div>
  )
}

export default ReaccionarOptativas