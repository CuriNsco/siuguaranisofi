import React from 'react'
import {logo, user, message} from '../assets/index'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-[#f7f7f7] w-auto h-auto'>
        <div className=' flex justify-between mx-32'>

        <div className='flex items-center'>
          <Link to='/' ><img src={logo} alt='logo' className=' w-[270px] h-[58px] my-4'/></Link> 
        </div>
        
        <div className='my-4'>
            <div className=' flex'>

                <div className='mx- flex'>
                    <img src={message} alt="mensaje" className='w-[20px] mx-2' />
                    <p className='bg-gray-400 px-3 rounded text-white font-semibold'>0</p>
                </div>

                <img src={user} alt='user' className='w-[20px] mx-2'></img>
                <p className='font-light'>SOFIA ANDREA ALFONSO</p>

            </div>

            <div className='flex justify-end mt-4'>
                <p className=' flex text-[13px]'>Propuesta:
                    <p className='font-bold mx-2'> Arquitectura</p>
                </p>
            </div>

        </div>

        </div>
    </nav>
  )
}

export default Navbar