import React from 'react'
import Navbar from "../../components/Navbar.jsx";
import SubNavbar from "../../components/SubNavbar.jsx";

const PlanEstudios = () => {
  return (
    <div><Navbar/>
    <SubNavbar/>
    
    <div className='mx-80'>
    <div>
          <h1 className="text-[#0088cc] font-bold text-2xl ">Plan de estudio</h1>
          <div className=" border-t-gray-100 border"/>
       </div>
    </div>

    <div className='mx-80 my-2 flex justify-between'>
      <p><span className='font-semibold'>Propuesta:</span> (011) Arquitectura</p>
      <p><span className='font-semibold'>Plan:</span> (2007) 2007</p>
      <p><span className='font-semibold'>	Versión:</span> 27 </p>
    </div>


    <div className='w-[full] h-[3630px] border-2 border-[#e5e5e5] mx-80 my-12'>
      <div className='w-[full] h-[35px] bg-[#2673bf] flex items-center'>
        <p className='text-white mx-2'><span className='font-semibold text-white'>Módulo:</span>Plan basico (13-0) </p>
      </div>


            {/* cabezera tables */}
      <div className='w-[full] border-2  border-[#e5e5e5] mx-3 my-2'>
      <div className='flex items-center bg-[#2673bf]'>
        <p className='text-white mx-2 my-1'><span className='font-semibold text-white'>Módulo:</span> Nivel </p>
      </div>


      {/* comienzo tables */}

      <div className='w-[full] mx-12'>
      <table className='w-full border-2 my-2'>
<thead className='text-[13px] border-2'>
  <tr className='border-2'>
    <th className='border-2'>Actividad</th>
    <th className='border-2'>Tipo<br/></th>
    <th className='border-2'>Año<br/></th>
    <th className='border-2'>Período</th>
    <th className='border-2'>Nota</th>
    <th className='border-2'>Origen</th>
    <th className='border-2'>Créditos</th>
    <th className='border-2'>Puntaje</th>
    <th className='border-2'>Correlativas</th>
  </tr>
</thead>
<tbody className='text-[13px]'>
  <tr className='border-2'>
    <td className='border-2'>INTRODUCCION A LA PROBLEMATICA DEL DISENO Y SU EXPRESION (13-003-4)<br/></td>
    <td className='border-2'>Materia<br/></td>
    <td className='border-2'></td>
    <td className='border-2'>NIVELACION<br/></td>
    <td className='border-2'>A (Promocionado)</td>
    <td className='border-2'>Promocion</td>
    <td className='border-2'>0.00</td>
    <td className='border-2'></td>
  </tr>
  <tr>
    <td className='border-2'>ESTRATEGIAS DE APRENDIZAJE (13-00305)</td>
    <td className='border-2'>Materia</td>
    <td className='border-2'></td>
    <td className='border-2'>NIVELACION</td>
    <td className='border-2'>A (Promocionado)</td>
    <td className='border-2'>Promocion</td>
    <td className='border-2'></td>
    <td className='border-2'></td>
  </tr>
</tbody>
</table>

      </div>
      </div>



                            {/* segunda table */}
              {/* cabecera table 2 */}

              <div className='w-[full] border-2  border-[#e5e5e5] mx-3 my-2'>
      <div className='flex items-center bg-[#2673bf]'>
        <p className='text-white mx-2 my-1'><span className='font-semibold text-white'>Módulo:</span> Nivel I</p>
      </div>

        {/* comienzo segunda table */}
        <div className='w-[full] mx-12'>

          <table className='w-full border-2 my-2'>

            <thead className='text-[13px] border-2'>

                  {/* titulos */}
                <tr className='border-2'>

                <th className='border-2'>Actividad</th>
                <th className='border-2'>Tipo<br/></th>
                <th className='border-2'>Año<br/></th>
                <th className='border-2'>Período</th>
                <th className='border-2'>Nota</th>
                <th className='border-2'>Origen</th>
                <th className='border-2'>Créditos</th>
                <th className='border-2'>Puntaje</th>
                <th className='border-2'>Correlativas</th>

                </tr>
                </thead>

                {/* cada materia con cada respuesta */}

                <tbody className='text-[13px]'>

                <tr className='border-2'>
                  <td className='border-2'>INTRODUCCION A LA TECNOLOGIA (13-00051)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>1</td>
                  <td className='border-2'>ANUAL<br/></td>
                  <td className='border-2'>5 (Aprobado)</td>
                  <td className='border-2'>Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>INTRODUCCION A LA HISTORIA DE LA ARQUITECTURA Y EL URBANISMO (13-00003)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>1</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>6 (Aprobado)</td>
                  <td className='border-2'>Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>SISTEMAS GRAFICOS DE EXPRESION (13-00004)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>1</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>7 (Promocionado)</td>
                  <td className='border-2'>Promocion</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>MORFOLOGIA I (13-00006)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>1</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>9 (Promocionado)</td>
                  <td className='border-2'>Promocion</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>ARQUITECTURA I (13-00007)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>1</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>7 (Promocionado)</td>
                  <td className='border-2'>Promocion</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>MATEMATICA I (13-00008)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>1</td>
                  <td className='border-2'>PRIMER CUATRIMESTRE</td>
                  <td className='border-2'>8 (Promocionado)</td>
                  <td className='border-2'>Promocion</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>FISICA (13-00009)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>1</td>
                  <td className='border-2'>PRIMER CUATRIMESTRE</td>
                  <td className='border-2'>7 (Promocionado)</td>
                  <td className='border-2'>Promocion</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>
                </tbody>
          </table>

        </div>

      </div>

                                      {/* TERCERA table */}
              {/* cabecera table 3 */}

              <div className='w-[full] border-2  border-[#e5e5e5] mx-3 my-2'>
      <div className='flex items-center bg-[#2673bf]'>
        <p className='text-white mx-2 my-1'><span className='font-semibold text-white'>Módulo:</span> Nivel II</p>
      </div>

        {/* comienzo TERCERA table */}
        <div className='w-[full] mx-12'>

          <table className='w-full border-2 my-2'>

            <thead className='text-[13px] border-2'>

                  {/* titulos */}
                <tr className='border-2'>

                <th className='border-2'>Actividad</th>
                <th className='border-2'>Tipo<br/></th>
                <th className='border-2'>Año<br/></th>
                <th className='border-2'>Período</th>
                <th className='border-2'>Nota</th>
                <th className='border-2'>Origen</th>
                <th className='border-2'>Créditos</th>
                <th className='border-2'>Puntaje</th>
                <th className='border-2'>Correlativas</th>

                </tr>
                </thead>

                {/* cada materia con cada respuesta */}

                <tbody className='text-[13px]'>

                <tr className='border-2'>
                  <td className='border-2'>CONSTRUCCIONES I (13-00011)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>2</td>
                  <td className='border-2'>ANUAL<br/></td>
                  <td className='border-2'>6 (Aprobado)</td>
                  <td className='border-2'>Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>INSTALACIONES I (13-00012)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>2</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>8 (Promocionado)</td>
                  <td className='border-2'>Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>ESTRUCTURAS I (13-00013)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>2</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>7 (Aprobado)</td>
                  <td className='border-2'>Promocion</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>HISTORIA DE LA ARQUITECTURA I (13-00014)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>2</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>5 (Aprobado)</td>
                  <td className='border-2'>Promocion</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>TEORIAS Y METODOS (13-00015)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>2</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>5 (Aprobado)</td>
                  <td className='border-2'>Promocion</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>MORFOLOGIA II (13-00016)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>2</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>9 (Promocionado)</td>
                  <td className='border-2'>Promocion</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>ARQUITECTURA II (13-00018)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>2</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>7 (Promocionado)</td>
                  <td className='border-2'>Promocion</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>
                </tbody>
          </table>

        </div>

      </div>



                                      {/* CUARTA table */}
              {/* cabecera table 4 */}

              <div className='w-[full] border-2  border-[#e5e5e5] mx-3 my-2'>
      <div className='flex items-center bg-[#2673bf]'>
        <p className='text-white mx-2 my-1'><span className='font-semibold text-white'>Módulo:</span> Nivel III</p>
      </div>

        {/* comienzo Cuarta table */}
        <div className='w-[full] mx-12'>

          <table className='w-full border-2 my-2'>

            <thead className='text-[13px] border-2'>

                  {/* titulos */}
                <tr className='border-2'>

                <th className='border-2'>Actividad</th>
                <th className='border-2'>Tipo<br/></th>
                <th className='border-2'>Año<br/></th>
                <th className='border-2'>Período</th>
                <th className='border-2'>Nota</th>
                <th className='border-2'>Origen</th>
                <th className='border-2'>Créditos</th>
                <th className='border-2'>Puntaje</th>
                <th className='border-2'>Correlativas</th>

                </tr>
                </thead>

                {/* cada materia con cada respuesta */}

                <tbody className='text-[13px]'>

                <tr className='border-2'>
                  <td className='border-2'>CONSTRUCCIONES II (13-00020)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>3</td>
                  <td className='border-2'>ANUAL<br/></td>
                  <td className='border-2'>	4 (Aprobado)</td>
                  <td className='border-2'>Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>INSTALACIONES II (13-00023)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>3</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>	8 (Promocionado)</td>
                  <td className='border-2'>Promoción</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>ESTRUCTURAS II (13-00024)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>3</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>	7 (Aprobado)</td>
                  <td className='border-2'>Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>HISTORIA DE LA ARQUITECTURA II (13-00025)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>3</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>	5 (Aprobado)</td>
                  <td className='border-2'>Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>MORFOLOGIA III (13-00027)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>3</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>	5 (Promocionado)</td>
                  <td className='border-2'>Promocion</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>ARQUITECTURA III (13-00028)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>3</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>	7 (Aprobado)</td>
                  <td className='border-2'>Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>MATEMATICA II (13-00029)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>3</td>
                  <td className='border-2'>PRIMER CUATRIMESTRE</td>
                  <td className='border-2'>8 (Aprobado)</td>
                  <td className='border-2'>Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>


                <tr>
                  <td className='border-2'>INFORMATICA (13-00148)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>3</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>	4 (Aprobado)</td>
                  <td className='border-2'>Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>
                </tbody>
          </table>

        </div>

      </div>


                                            {/* QUINTA table */}
              {/* cabecera table 5 */}

              <div className='w-[full] border-2  border-[#e5e5e5] mx-3 my-2'>
      <div className='flex items-center bg-[#2673bf]'>
        <p className='text-white mx-2 my-1'><span className='font-semibold text-white'>Módulo:</span> Nivel IV</p>
      </div>

        {/* comienzo Quinta table */}
        <div className='w-[full] mx-12'>

          <table className='w-full border-2 my-2'>

            <thead className='text-[13px] border-2'>

                  {/* titulos */}
                <tr className='border-2'>

                <th className='border-2'>Actividad</th>
                <th className='border-2'>Tipo<br/></th>
                <th className='border-2'>Año<br/></th>
                <th className='border-2'>Período</th>
                <th className='border-2'>Nota</th>
                <th className='border-2'>Origen</th>
                <th className='border-2'>Créditos</th>
                <th className='border-2'>Puntaje</th>
                <th className='border-2'>Correlativas</th>

                </tr>
                </thead>

                {/* cada materia con cada respuesta */}

                <tbody className='text-[13px]'>

                <tr className='border-2'>
                  <td className='border-2'>CONSTRUCCIONES III (13-00030)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>4</td>
                  <td className='border-2'>ANUAL<br/></td>
                  <td className='border-2'>7 (Aprobado)</td>
                  <td className='border-2'>	Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>ESTRUCTURAS III (13-00033)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>4</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>	7 (Aprobado)</td>
                  <td className='border-2'>Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>HISTORIA DE LA ARQUITECTURA III (13-00034)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>4</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>6 (Aprobado)</td>
                  <td className='border-2'>Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>URBANISMO I (13-00035)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>4</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>	7 (Promocionado)</td>
                  <td className='border-2'>	Promoción</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>ARQUITECTURA PAISAJISTA (13-00036)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>4</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>	6 (Aprobado)</td>
                  <td className='border-2'>Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>ARQUITECTURA IV (13-00037)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>4</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>	10 (Promocionado)</td>
                  <td className='border-2'>Promoción</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>INSTALACIONES III (13-00041)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>4</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>8 (Aprobado)</td>
                  <td className='border-2'>Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>
                </tbody>
          </table>

        </div>

      </div>



                                                  {/* SEXTA table */}
              {/* cabecera table 6 */}

              <div className='w-[full] border-2  border-[#e5e5e5] mx-3 my-2'>
      <div className='flex items-center bg-[#2673bf]'>
        <p className='text-white mx-2 my-1'><span className='font-semibold text-white'>Módulo:</span> Nivel V</p>
      </div>

        {/* comienzo sexta table */}
        <div className='w-[full] mx-12'>

          <table className='w-full border-2 my-2'>

            <thead className='text-[13px] border-2'>

                  {/* titulos */}
                <tr className='border-2'>

                <th className='border-2'>Actividad</th>
                <th className='border-2'>Tipo<br/></th>
                <th className='border-2'>Año<br/></th>
                <th className='border-2'>Período</th>
                <th className='border-2'>Nota</th>
                <th className='border-2'>Origen</th>
                <th className='border-2'>Créditos</th>
                <th className='border-2'>Puntaje</th>
                <th className='border-2'>Correlativas</th>

                </tr>
                </thead>

                {/* cada materia con cada respuesta */}

                <tbody className='text-[13px]'>

                <tr className='border-2'>
                  <td className='border-2'>PRODUCCION Y GESTION (13-00032)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>ANUAL<br/></td>
                  <td className='border-2'>	7 (Aprobado)</td>
                  <td className='border-2'>	Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>ESTRUCTURAS IV (13-00040)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>8 (Promocionado)</td>
                  <td className='border-2'>	Promoción</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>TOPOGRAFIA (13-00043)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>6 (Aprobado)</td>
                  <td className='border-2'>	Examen</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>URBANISMO II (13-00044)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>	7 (Promocionado)</td>
                  <td className='border-2'>	Promoción</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>EQUIPAMIENTO (13-00045)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>	8 (Promocionado)</td>
                  <td className='border-2'>	Promoción</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>

                <tr>
                  <td className='border-2'>ARQUITECTURA V (13-00046)</td>
                  <td className='border-2'>Materia</td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>ANUAL</td>
                  <td className='border-2'>8 (Promocionado)</td>
                  <td className='border-2'>Promoción</td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>
                </tbody>
          </table>

        </div>

      </div>

                                                        {/* SEPTIMA table */}
              {/* cabecera table 7 */}

              <div className='w-[full] border-2  border-[#e5e5e5] mx-3 my-2'>
      <div className='flex items-center bg-[#2673bf]'>
        <p className='text-white mx-2 my-1'><span className='font-semibold text-white'>Módulo:</span> Nivel VI</p>
      </div>

      <div className='w-[full] border-2  border-[#e5e5e5] mx-3 my-2'>
      <div className='flex items-center bg-[#2673bf]'>
        <p className='text-white mx-2 my-1'><span className='font-semibold text-white'>Materia Genérica:</span> GENERICA P.P.A. (13-00822) </p>
      </div>

      <h1 className=' mx-12 my-4  text-xl font-bold text-[#8d8d8d]'>Cumplimiento: Obtener 100 puntos de actividades aprobadas</h1>

        {/* comienzo septima table */}
        <div className='w-[full] mx-12'>

          <table className='w-full border-2 my-2'>

            <thead className='text-[13px] border-2'>

                  {/* titulos */}
                <tr className='border-2'>

                <th className='border-2'>Actividad</th>
                <th className='border-2'>Tipo<br/></th>
                <th className='border-2'>Año<br/></th>
                <th className='border-2'>Período</th>
                <th className='border-2'>Nota</th>
                <th className='border-2'>Origen</th>
                <th className='border-2'>Créditos</th>
                <th className='border-2'>Puntaje</th>
                <th className='border-2'>Correlativas</th>
                </tr>
                </thead>

                {/* cada materia con cada respuesta */}

                <tbody className='text-[13px]'>

                <tr className='border-2'>
                  <td className='border-2'>PRACTICA PROFESIONAL ASISTIDA (13-00049)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>6</td>
                  <td className='border-2'>ANUAL<br/></td>
                  <td className='border-2'> A (Promocionado)</td>
                  <td className='border-2'> Promoción</td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>

                <tr className='border-2'>
                  <td className='border-2'>PRACTICA PROFESIONAL ASISTIDA (13-00049)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>6</td>
                  <td className='border-2'>ANUAL<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                </tbody>
          </table>

        </div>

      </div>



        {/* comienzo septima table */}
        <div className='w-[full] mx-12'>

          <table className='w-full border-2 my-2'>

            <thead className='text-[13px] border-2'>

                  {/* titulos */}
                <tr className='border-2'>

                <th className='border-2'>Actividad</th>
                <th className='border-2'>Tipo<br/></th>
                <th className='border-2'>Año<br/></th>
                <th className='border-2'>Período</th>
                <th className='border-2'>Nota</th>
                <th className='border-2'>Origen</th>
                <th className='border-2'>Créditos</th>
                <th className='border-2'>Puntaje</th>
                <th className='border-2'>Correlativas</th>

                </tr>
                </thead>

                {/* cada materia con cada respuesta */}

                <tbody className='text-[13px]'>

                <tr className='border-2'>
                  <td className='border-2'>ARQUITECTURA VI (13-00050)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>6</td>
                  <td className='border-2'>ANUAL<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                </tr>
                </tbody>
          </table>

        </div>

      </div>

                                                              {/* OCTAVA table */}
              {/* cabecera table 8 */}

              <div className='w-[full] border-2  border-[#e5e5e5] mx-3 my-2'>
      <div className='flex items-center bg-[#2673bf]'>
        <p className='text-white mx-2 my-1'><span className='font-semibold text-white'>Módulo:</span> Nivel xx- IDIOMA</p>
      </div>

      <div className='w-[full] border-2  border-[#e5e5e5] mx-3 my-2'>
      <div className='flex items-center bg-[#2673bf]'>
        <p className='text-white mx-2 my-1'><span className='font-semibold text-white'>Materia Genérica:</span> IDIOMAS 2007 (13-00700) </p>
      </div>

      <h1 className=' mx-12 my-4  text-xl font-bold text-[#8d8d8d]'>Cumplimiento: Obtener 100 puntos de actividades aprobadas</h1>

        {/* comienzo OCHO table */}
        <div className='w-[full] mx-12'>

          <table className='w-full border-2 my-2'>

            <thead className='text-[13px] border-2'>

                  {/* titulos */}
                <tr className='border-2'>

                <th className='border-2'>Actividad</th>
                <th className='border-2'>Tipo<br/></th>
                <th className='border-2'>Año<br/></th>
                <th className='border-2'>Período</th>
                <th className='border-2'>Nota</th>
                <th className='border-2'>Origen</th>
                <th className='border-2'>Créditos</th>
                <th className='border-2'>Puntaje</th>
                <th className='border-2'>Correlativas</th>
                </tr>
                </thead>

                {/* cada materia con cada respuesta */}

                <tbody className='text-[13px]'>

                <tr className='border-2'>
                  <td className='border-2'>PORTUGUES (13-00137)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'>ANUAL<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>

                <tr className='border-2'>
                  <td className='border-2'>INGLES (13-00136)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'>ANUAL<br/></td>
                  <td className='border-2'> A (Aprobado)</td>
                  <td className='border-2'>Equivalencia</td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                </tbody>
          </table>

        </div>

      </div>


      </div>



                                                              {/* ULTIMA table */}
              {/* cabecera table 7 */}

              <div className='w-[full] border-2  border-[#e5e5e5] mx-3 my-2'>
      <div className='flex items-center bg-[#2673bf]'>
        <p className='text-white mx-2 my-1'><span className='font-semibold text-white'>Módulo:</span> Nivel xxx-OPTATIVAS</p>
      </div>

      <div className='w-[full] border-2  border-[#e5e5e5] mx-3 my-2'>
      <div className='flex items-center bg-[#2673bf]'>
        <p className='text-white mx-2 my-1'><span className='font-semibold text-white'>Materia Genérica:</span> GENERICA Plan 2007 (13-00812) </p>
      </div>

      <h1 className=' mx-12 my-4  text-xl font-bold text-[#8d8d8d]'>Cumplimiento: Obtener 100 puntos de actividades aprobadas</h1>

        {/* comienzo septima table */}
        <div className='w-[full] mx-12'>

          <table className='w-full border-2 my-2'>

            <thead className='text-[13px] border-2'>

                  {/* titulos */}
                <tr className='border-2'>

                <th className='border-2'>Actividad</th>
                <th className='border-2'>Tipo<br/></th>
                <th className='border-2'>Año<br/></th>
                <th className='border-2'>Período</th>
                <th className='border-2'>Nota</th>
                <th className='border-2'>Origen</th>
                <th className='border-2'>Créditos</th>
                <th className='border-2'>Puntaje</th>
                <th className='border-2'>Correlativas</th>
                </tr>
                </thead>

                {/* cada materia con cada respuesta */}

                <tbody className='text-[13px]'>

                <tr className='border-2'>
                  <td className='border-2'>TALLER DE INVESTIGACION DE DISEÑO ESTRUCTURAL (13-00078)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>

                <tr className='border-2'>
                  <td className='border-2'>INFORMATICA APLICADA A LA ARQUITECTURA (13-00079)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>DESARROLLO URBANO Y REGIONAL (13-00080)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>PRIMER CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>RESTAURACION Y CONSERVACION DEL PATRIMONIO (13-00081)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>HISTORIA CRITICA DE LA ARQUITECTURA LATINOAMERICANA (13-00082)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>DISEÑO ACUSTICO DE RECINTOS (13-00101)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>TECNOLOGIA APLICADA (13-00103)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>EL ARQUITECTO COMO PERITO (13-00104)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>PRIMER CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>ORGANIZACION Y PROGRAMACION DE OBRAS (13-00105)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>PRIMER CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>GRAFICA ARQUITECTONICA (13-00106)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'>7 (Promocionado)</td>
                  <td className='border-2'>Promoción</td>
                  <td className='border-2'></td>
                  <td className='border-2'>100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>GESTION URBANA Y METROPOLITANA (13-00107)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO BIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>AMBIENTE URBANO (13-00108)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>PRIMER CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>ILUMINACION NATURAL (13-00109)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>PROBLEMATICA DE LA MODERNIDAD (13-00110)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>DISEÑO BIOCLIMATICO Y SOLAR (13-00112)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>PRIMER CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>ESTRUCTURAS DE FUNDACION (13-00114)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>MANEJO Y GESTION DEL AMBIENTE (13-00115)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>PRESERVACION Y RESTAURACION DEL PATRIMONIO (13-00116)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>TECNICAS AUXILIARES Y COMPLEMENTOS DE TOPOGRAFIA (13-00117)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>PROBLEMATICA DE LA POSMODERNIDAD (13-00118)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>CONSERVACION Y RECUPERACION DEL PATRIMONIO (13-00121)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>TALLER DE INVESTIGACION DE DISEÑO ESTRUCTURAL (13-00122)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>PRIMERCUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>ESTRUCTURAS DE MADERA (13-00123)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>TEORIA, PLANIFICACION Y DISEÑO DEL ESPACIO TURISTICO (13-00124)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>DISEÑO DE ILUMINACION INTERIOR (13-00125)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>DISEÑO EXPERIMENTAL DE ESTRUCTURAS LAMINARES (13-00126)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>ACONDICIONAMIENTO ACUSTICO DE LOS EDIFICIOS (13-00129)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>PRIMER CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>ILUMINACION DEL PAISAJE URBANO (13-00130)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>PRIMER CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>TALLER DE INVESTIGACION EN ARQUITECTURA, URBANISMO Y DISEÑO. ELABORACION DE PROYECTOS. (13-00165)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>PRIMER CUATRIMESTRE<br/></td>
                  <td className='border-2'>8 (Promocionado)</td>
                  <td className='border-2'>Promoción</td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>DISEÑO DE TENSOESTRUCTURAS (13-00131)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>PRIMER CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>METODOLOGIA DE L A INVESTIGACION (13-00132)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>MATEMATICA DE GESTION (13-00133)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>SOCIOLOGIA (13-00134)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>DISEÑO DE ILUMINACION (13-00138)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>PRIMER CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>DISEÑO TURISTICO SUSTENTABLE (13-00139)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>
                <tr className='border-2'>
                  <td className='border-2'>SEMIOTICA (13-00142)<br/></td>
                  <td className='border-2'>Materia<br/></td>
                  <td className='border-2'>5</td>
                  <td className='border-2'>SEGUNDO CUATRIMESTRE<br/></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'></td>
                  <td className='border-2'> 100.00</td>
                </tr>

                </tbody>
          </table>

        </div>

      </div>

      </div>



    </div>
    
    </div>
  )
}

export default PlanEstudios