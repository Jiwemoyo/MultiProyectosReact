import React from "react";
import { NavLink } from "react-router-dom";
import ToDoPNG from "../assets/ToDoPNG.png";
import numeros from "../assets/claculadoraPng.png";
import reloj from "../assets/relojPng.png";
import igual from "../assets/IgualPng.png";
export const Home = () => {
  return (
    <section className="bg-white  py-24 px-4 lg:px-16">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
          <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <NavLink to={"/toDo"}>
              <div className="h-28">
                <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-naranja rounded-xl justify-items-center align-middle">
                  <img
                    src={ToDoPNG}
                    className="w-36 h-36  mt-6 m-auto"
                    alt="Lista Tareas"
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                </div>
              </div>
              <div className="p-6   z-10 w-full   ">
                <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                  Lista de tareas
                </p>
              </div>
            </NavLink>
          </div>
          <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <NavLink to={"/calculadora"}>
              <div className="h-28">
                <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-verde rounded-xl justify-items-center align-middle">
                  <img
                    src={numeros}
                    className="w-36 h-36  mt-6 m-auto"
                    alt="Calculadora"
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                </div>
              </div>
              <div className="p-6   z-10 w-full   ">
                <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                  Calculadora
                </p>
              </div>
            </NavLink>
          </div>

          <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <NavLink to={"/reloj"}>
              <div className="h-28">
                <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-amarillo rounded-xl justify-items-center align-middle">
                  <img
                    src={reloj}
                    className="w-36 h-36  mt-6 m-auto"
                    alt="Reloj Mundial"
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                </div>
              </div>
              <div className="p-6   z-10 w-full   ">
                <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                  Reloj
                </p>
              </div>
            </NavLink>
          </div>

          <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <NavLink to={"/parejas"}>
              <div className="h-28">
                <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-rosa rounded-xl justify-items-center align-middle">
                  <img
                    src={igual}
                    className="w-36 h-36  mt-6 m-auto"
                    alt="JuegoMemoria"
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                </div>
              </div>
              <div className="p-6   z-10 w-full   ">
                <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                  Juego de memoria
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>

    // <div className=" flex justify-between px-24 mt-16">
    //   <NavLink to={"/toDo"}>
    //     <div className="tarjetitas shadow-naranja">
    //       <img src={ToDoPNG} alt="" className="w-32 h-32 mb-4" />
    //       <h3>ToDo List</h3>
    //     </div>
    //   </NavLink>
    //   <NavLink to={"/calculadora"}>
    //     <div className="tarjetitas shadow-verde">
    //       <img src={numeros} alt="" className="w-32 h-32 mb-4" />
    //       <h3>calculadora</h3>
    //     </div>
    //   </NavLink>
    //   <NavLink to={"/reloj"}>
    //     <div className="tarjetitas shadow-amarillo">
    //       <img src={reloj} alt="" className="w-32 h-32 mb-4" />
    //       <h3>Reloj</h3>
    //     </div>
    //   </NavLink>

    // </div>
  );
};
