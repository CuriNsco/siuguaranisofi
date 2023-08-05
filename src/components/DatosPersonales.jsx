import React from 'react'
import Navbar from './Navbar'
import SubNavbar from './SubNavbar'
import { sofi, info} from '../assets'

const DatosPersonales = () => {
  return (
    <div><Navbar/>
    <SubNavbar/>
    <div className='mx-60 flex'>
          <h1 className="text-[#0088cc] font-bold text-2xl ">Mis datos personales</h1>
          <div className=' w-[900px] h-[35px] flex justify-end'>
            <button className='bg-[#51b6e5] hover:bg-[#51b6d4] font-semibold text-[#ffffff] rounded px-3 py-1 border border-[#51b6f4]'>Confirmar</button>
          </div>
      </div>

      <div className=" border-t-gray-100 border mb-2 mx-60"/>

      <div className='flex mx-2 justify-center'>

      <div className=' w-auto flex justify-center mt-4'>
      <div className='bg-[#f5f5f5] border-2 border-[#e3e3e3] rounded w-[270px] h-[176px] flex items-center mx-2'>
          <div className='text-[13px] flex flex-col justify-evenly h-[176px]'>
          <div className='mx-2 font-bold'>Última confirmación: 13/03/2023</div> <br />

          <div className='mx-2'>Los campos marcados con (*) son obligatorios. </div><br />

          <div className='mx-2'>Una vez que hayas actualizado tus datos, presioná el botón "Confirmar".</div> 
          </div>
        </div>
        </div>

    <div className='flex flex-col items-center'>

    <div className=' w-[870px]'>

      <div className='bg-[#d9edf7] flex items-center border border-[#bce8f1] rounded mt-4'>
        <img src={info} alt="infoicon" className='my-1'/>
        <p className='font-bold text-[13px] mx-2'>Tus datos se encuentran vigentes. De todas maneras, si tenés algún dato para modificar, no olvides presionar el botón "Confirmar" al finalizar para indicar que se encuentran actualizados.</p>
      </div>
      <h1 className='text-[#8d8d8d] text-2xl font-bold mt-2'>
        Datos Personales
      </h1>
      <img src= {sofi} alt="foto perfil" className='border-4 border-[#cccccc] rounded my-2'/>
    </div>

        <div className='bg-[#f5f5f5] border-2 border-[#e3e3e3] rounded w-[870px] h-[892px] mx-2 mb-4'>

                                                       {/* 1 */}

      <div className='flex bg-[#f5f5f5]'>
          <div className='flex flex-col'>

            <div className='datos'>
              <p>Apellido </p>
              <div className='falsoinput'>ALFONSO</div>
            </div>

            <div className='datos'>
              <p>Tipo de documento</p>
              <div className='falsoinput'>Documento Nacional de Ide</div>
            </div>


            <div className='datos'>
              <p>Numero de cuil (sin guiones) </p>
              <div className='falsoinput'>27410510524</div>
            </div>

            <div className='datos'>
              <p className='text-[13px] font-bold'>Identidad de Género y Diversidad: ¿Cuál de estas opciones considerás que te describe mejor?.</p>
              <select name="" id="" className='falsoinput'>
              <option value='Mujer'>Mujer</option>
              <option value='Mujer'>Hombre</option>
              <option value='Mujer'>Transgenero</option>
              <option value='Mujer'>No Binario</option>
              <option value='Mujer'>Mujer trans</option>
              <option value='Mujer'>Hombre Trans</option>
              <option value='Mujer'>Gay</option>
              <option value='Mujer'>Bisexual</option>
              </select>
            </div>
            </div>
                                                    {/* 2 */}

              <div className='flex flex-col'>
              <div className='datos'>
              <p>Nombres </p>
              <div className='falsoinput'>SOFIA ANDREA</div>
              </div>
                        

            <div className='datos'>
              <p>Numero de documento</p>
              <div className='falsoinput'>41051052</div>
            </div>

            <div className='datos'>
              <p>Genero</p>
              <div className='falsoinput'>Femenino</div>
            </div>
        </div>
        </div>

        <div className='border-2 border-[#e3e3e3] rounded mx-4 my-4 '>
          <div className=' mx-2 my-3'>
        <h1 className='font-bold text-[#8d8d8d] text-[18px]'>
        Situación familiar
          </h1>
          <div className=" border-t-gray-100 border"/>
          </div>

          <div className='flex'>
          <div className='flex flex-col'>
              <div className='datos'>
              <p>Estado Civil</p>
              <div className='falsoinput'>SOLTERO/A</div>
              </div>
                        

            <div className='datos'>
              <p>Cantidad de hijos </p>
              <div className='falsoinput'>No tiene</div>
            </div>

            <div className='datos'>
              <p>Situación de tu padre</p>
              <div className='falsoinput'>Vive</div>
            </div>
        </div>

        <div className='flex flex-col mb-2 '>
              <div className='datos'>
              <p>¿Estás unido de hecho?</p>
              <input type='checkbox' className='mt-4'/>
              </div>
                        

            <div className='datos'>
              <p>Cantidad de familiares a cargo </p>
              <div className='falsoinput'>No tiene</div>
            </div>

            <div className='datos'>
              <p>Situación de tu madre</p>
              <div className='falsoinput'>Vive</div>
            </div>
        </div>

        </div>

        </div>

        <div className='border-2 border-[#e3e3e3] rounded mx-4 my-4 '>
          <div className=' mx-2 my-3'>
        <h1 className='font-bold text-[#8d8d8d] text-[18px]'>
        Turno Preferido
          </h1>
          <div className=" border-t-gray-100 border"/>
          </div>

          <div className='flex'>
          <div className='flex flex-col'>
              <div className='datos'>
              <p>Turno Preferido</p>
              <div className='falsoinput'>MAÑANA</div>
              </div>
              </div>
              </div>
              </div>



              <div className='border-2 border-[#e3e3e3] rounded mx-4 my-4 '>
          <div className=' mx-2 my-3'>
        <h1 className='font-bold text-[#8d8d8d] text-[18px]'>
        Pueblos Originarios
          </h1>
          <div className=" border-t-gray-100 border"/>
          </div>

          <div className='flex'>
          <div className='flex flex-col'>
              <div className='datos'>
              <p>¿Pertenecés a algún pueblo originario?</p>
              <div className='falsoinput'>NO</div>
              </div>
              </div>
              </div>
              </div>


        </div>
    </div>

    </div>
    </div>
  )
}

export default DatosPersonales

