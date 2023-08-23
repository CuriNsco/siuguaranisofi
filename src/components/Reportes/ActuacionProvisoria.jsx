import React from 'react'
import Navbar from "../../components/Navbar.jsx";
import SubNavbar from "../../components/SubNavbar.jsx";

const ActuacionProvisoria = () => {
  return (
    <div>
      <Navbar/>
      <SubNavbar/>
      <div className='mx-80'>
      <div>
          <h1 className="text-[#0088cc] font-bold text-2xl ">Actuación provisoria</h1>
          <div className=" border-t-gray-100 border"/>
      </div>

        <div>
          <div>
            <h1 className='font-bold text-[24px] my-2 text-[#8d8d8d] '>
              Cursadas
            </h1>
            <div className='bg-[#fcf8e3] border-2 border-[#fbeed5] text-center py-2'>
                <p>
                No hay información sobre actuaciones provisorias en cursadas 
                </p>
            </div>
          </div>



          <div>
            <h1 className='font-bold text-[24px] my-2 text-[#8d8d8d]  '>
             Promociones
            </h1>
            <div className='bg-[#fcf8e3] border-2 border-[#fbeed5] text-center py-2'>
                <p>
                No hay información sobre actuaciones provisorias en promociones 
                </p>
            </div>
          </div>




          <div>
            <h1 className='font-bold text-[24px] my-2 text-[#8d8d8d] '>
            Exámenes
            </h1>
            <div className='bg-[#fcf8e3] border-2 border-[#fbeed5] text-center py-2'>
                <p>
                No hay información sobre actuaciones provisorias en exámenes
                </p>
            </div>
          </div>



      </div>
    </div>
    </div>
  )
}

export default ActuacionProvisoria