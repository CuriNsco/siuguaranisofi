import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { arrowdown } from '../assets';

const SubNavbar = () => {
  const [isReportesOpen, setIsReportesOpen] = useState(false);
  const [isEncuestasOpen, setIsEncuestasOpen] = useState(false);
  const [isTramitesOpen, setIsTramitesOpen] = useState(false);

  const toggleReportesDropdown = () => {
    setIsReportesOpen(!isReportesOpen);
    setIsEncuestasOpen(false);
    setIsTramitesOpen(false);
  };

  const toggleEncuestasDropdown = () => {
    setIsEncuestasOpen(!isEncuestasOpen);
    setIsReportesOpen(false);
    setIsTramitesOpen(false);
  };

  const toggleTramitesDropdown = () => {
    setIsTramitesOpen(!isTramitesOpen);
    setIsReportesOpen(false);
    setIsEncuestasOpen(false);
  };

  
  return (
    <div className='bg-[#fafafa] py-4 relative'>
      <div className='border-solid border border-gray-200 flex justify-center items-center'>
        <ul className='flex'>
          <li className='relative flex'>
            <Link to='/InscripcionMaterias' className='subnavbar__a'>
              Inscripción a materias
            </Link>
          </li>
          <li className='relative flex'>
            <Link to='/InscripcionExamenes' className='subnavbar__a'>
              Inscripción a exámenes
            </Link>
          </li>
          <li className='relative flex'>
            <a
              href='#'
              onClick={toggleReportesDropdown}
              className='subnavbar__a cursor-pointer flex'
            >
              Reportes

              <img src={arrowdown} alt="arrow down" className='w-[7px] h-[7px] ml-2 mt-[7px]'/>
            </a>
            {isReportesOpen && (
              <div className='absolute bg-white border border-gray-300  my-9 rounded-lg  shadow-xl '>
                {/* Contenido del desplegable de Reportes */}
                <ul className='flex flex-col'>
                  <li className='flex flex-col w-[200px]'>
                    <Link to='/ActuacionProvisoria' className='reportes'>Actuacion provisoria</Link>
                    <Link to='/CronogramaEvaluaciones' className='reportes'>Cronograma de Evaluaciones</Link>
                    <Link to='/HistoriaAcademica' className='reportes'>Historia Academica</Link>
                    <Link to='/Inacistencias' className='reportes'>Inasistencias</Link>
                    <Link to='/PlanEstudios' className='reportes'>Plan de estudios</Link>
                    <Link to='/SeguimientoTesis' className='reportes'>Seguimiento de tesis</Link>
                    <Link to='/PromedioAvance' className='reportes'>Promedio y avance de carrera</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className='relative flex'>
            <a
              href='#'
              onClick={toggleEncuestasDropdown}
              className='subnavbar__a cursor-pointe flex'
            >
              Encuestas
              <img src={arrowdown} alt="arrow down" className='w-[7px] h-[7px] ml-2 mt-[7px]'/>
            </a>
            {isEncuestasOpen && (
              <div className='absolute bg-white border border-gray-300  my-9 rounded-lg shadow-xl'>
                {/* Contenido del desplegable de Encuestas */}
                <ul className='flex flex-col'>
                  <li className='flex flex-col w-[200px]'>
                    <Link to='/EncuestasPendientes' className='reportes'>Encuestas Pendientes</Link>
                    <Link to='/EncuestasRespondidas' className='reportes'>Encuestas Respondidas</Link>
                    </li>
                </ul>
              </div>
            )}
          </li>
          <li className='relative flex'>
            <a
              href='#'
              onClick={toggleTramitesDropdown}
              className='subnavbar__a cursor-pointer flex'
            >
              Tramites
              
              <img src={arrowdown} alt="arrow down" className='w-[7px] h-[7px] ml-2 mt-[7px]'/>
            </a>
            {isTramitesOpen && (
              <div className='absolute bg-white border border-gray-300  my-9 rounded-lg  shadow-xl '>
              {/* Contenido del desplegable de Reportes */}
              <ul className='flex flex-col'>
                <li className='flex flex-col w-[200px]'>
                  <Link to='/Orientacion' className='reportes'>Orientacion</Link>
                  <Link to='/PreinscripcionPropuestas' className='reportes'>Preinscripcion a propuestas</Link>
                  <Link to='/SolicitarCertificacion' className='reportes'>Solicitar Certificacion</Link>
                  <Link to='/ReaccionarOptativas' className='reportes'>Reasignar Optativas</Link>
                  <Link to='/ConvocatoriaBecas' className='reportes'>Convocatorias a becas</Link>
                </li>
              </ul>
            </div>
            )}
          </li>
          <li className='relative flex'>
            <Link to='/DatosPersonales' className='subnavbar__a'>
              Mis datos personales
            </Link>
          </li>
          <li className='flex justify-end ml-96'>
            <a href='' className='subnavbar__a'>
              Perfil: Alumno
            </a>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default SubNavbar;
