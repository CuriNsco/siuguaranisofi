import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import InscripcionMaterias from './components/InscripcionMaterias.jsx';
import InscripcionExamenes from './components/InscripcionExamenes.jsx';
import DatosPersonales from './components/DatosPersonales.jsx';
          // reportes
import ActuacionProvisoria from './components/Reportes/ActuacionProvisoria.jsx';
import CronogramaEvaluaciones from './components/Reportes/CronogramaEvaluaciones.jsx';
import HistoriaAcademica from './components/Reportes/HistoriaAcademica.jsx';
import Inacistencias from './components/Reportes/Inacistencias.jsx';
import MisInscripciones from './components/Reportes/MisInscripciones.jsx';
import OfertaComisiones from './components/Reportes/OfertasComisiones.jsx';
import PlanEstudios from './components/Reportes/PlanEstudios.jsx';
import PromedioAvance from './components/Reportes/PromedioAvance.jsx';
import SeguimientoTesis from './components/Reportes/SeguimientoTesis.jsx';
import EncuestasPendientes from './components/Encuestas/EncuestasPendientes.jsx';
import EncuestasRespondidas from './components/Encuestas/EncuestasRespondidas.jsx';


const router = createBrowserRouter([
    { path: "/", element: <App /> },
    // reportes
    { path: "ActuacionProvisoria", element: <ActuacionProvisoria /> },
    { path: "CronogramaEvaluaciones", element: <CronogramaEvaluaciones /> },
    { path: "DatosPersonales", element: <DatosPersonales /> },
    { path: "HistoriaAcademica", element: <HistoriaAcademica /> },
    { path: "Inacistencias", element: <Inacistencias /> },
    { path: "InscripcionExamenes", element: <InscripcionExamenes /> },
    { path: "InscripcionMaterias", element: <InscripcionMaterias /> },
    { path: "MisInscripciones", element: <MisInscripciones /> },
    { path: "OfertaComisiones", element: <OfertaComisiones /> },
    { path: "PlanEstudios", element: <PlanEstudios /> },
    { path: "PromedioAvance", element: <PromedioAvance /> },
    { path: "SeguimientoTesis", element: <SeguimientoTesis /> },

    // encuestas
    { path: "EncuestasPendientes", element: <EncuestasPendientes /> },
    { path: "EncuestasRespondidas", element: <EncuestasRespondidas /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
