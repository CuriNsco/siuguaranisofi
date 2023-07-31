import React from 'react'

const SubNavbar = () => {
  return (
    <div className='bg-[#fafafa] py-4 '>
        <div className='border-solid border border-gray-200 flex justify-center'>
        <ul>
            <li className='flex ml-3'>
                <a href="" className='subnavbar__a'>Inscripción a materias</a>
                <a href="" className='subnavbar__a'>Inscripción a exámenes</a>
                <a href="" className='subnavbar__a'>Reportes</a>
                <a href="" className='subnavbar__a'>Encuestas</a>
                <a href="" className='subnavbar__a'>Tramites</a>
                <a href="" className='subnavbar__a'>Mis datos personales</a>

                <div className='flex justify-end w-[850px]'>
                         <a href="" className='subnavbar__a '>Perfil: Alumno</a>
                </div>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default SubNavbar