import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";

export default function App() {
  return (
    <div>
    <Navbar/>
    <SubNavbar/>
    <div className="mx-80">

      <div>
          <h1 className="text-[#0088cc] font-bold text-2xl ">Bienvenido SOFÍA ANDREA ALFONSO</h1>
          <div className=" border-t-gray-100 border"/>
      </div>

      <div>
        <div className="flex justify-between">
          <h2 className="text-[#8d8d8d] font-bold text-xl py-2 ">Períodos lectivos</h2>

          <div className=" mr-[250px] flex items-center">
            <h2 className="text-[#8d8d8d] font-bold text-xl">Encuestas Pendientes</h2>
            </div>
        </div>

          <div>
            <div>
            <h2 className="text-[#8d8d8d] font-bold">13 - TESIS (Arq) / TRABAJO FINAL (D.I)</h2>
            </div>

            <div className=" px-12 flex justify-between">
              <ol>
                <p className="font-semibold">Tipo: <span className="font-light">Anual</span></p>
                <p className="font-semibold flex flex-col">Fechas del período lectivo:
                  <span className="font-semibold px-8">
                  Inicio: <span className="font-light">01/03/2023</span>
                  </span>
                  <span className="font-semibold px-8">
                  Finalizacion: <span className="font-light">30/01/2024</span>
                  </span>
                </p>
                <p className="font-semibold flex flex-col">Período de inscripción #1:
                <span className="font-semibold px-8">
                  Inicio: <span className="font-light">06/03/2023</span>
                  </span>
                  <span className="font-semibold px-8">
                  Finalizacion: <span className="font-light">06/03/2023</span>
                  </span>
                </p>
              </ol>
              <div className="bg-yellow-100 text-center py-2 px-32 border-2 h-[50px] flex items-center ">
                <p className="flex">
              No hay encuestas pendientes para completar
              </p>
              </div>
            </div>
          </div>


          <div className=" border-t-gray-100 border w-[30%] mt-2"/>


          <div className=" mt-4">
            <h2 className="text-[#8d8d8d] font-bold">13 - Anual</h2>

            <div className=" px-12">
              <ol>
                <p className="font-semibold">Tipo: <span className="font-light">Anual</span></p>
                <p className="font-semibold flex flex-col">Fechas del período lectivo:
                  <span className="font-semibold px-8">
                  Inicio: <span className="font-light">20/03/2023</span>
                  </span>
                  <span className="font-semibold px-8">
                  Finalizacion: <span className="font-light">30/12/2023</span>
                  </span>
                </p>
                <p className="font-semibold flex flex-col">Período de inscripción #1:
                <span className="font-semibold px-8">
                  Inicio: <span className="font-light">07/03/2023</span>
                  </span>
                  <span className="font-semibold px-8">
                  Finalizacion: <span className="font-light">08/03/2023</span>
                  </span>
                </p>
              </ol>
            </div>
            <div className=" border-t-gray-100 border w-[30%] mt-2"/>
          </div>
      </div>

    </div>
    </div>
  )
}