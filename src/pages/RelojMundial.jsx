import React, { useState } from "react";
import reloj from "../assets/relojPng.png";

export const RelojMundial = () => {
  const urlBase = "http://worldtimeapi.org/api/timezone";

  const [ciudad, setCiudad] = useState("");
  const [dataHora, setDataHora] = useState(null);

  const fetchClima = async () => {
    try {
      const response = await fetch(`${urlBase}/${ciudad}`);
      const data = await response.json();
      setDataHora(data);
    } catch (error) {
      console.log(`Ha ocurrido el siguiente problema: ${error}`);
    }
  };

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) fetchClima();
  };

  return (
    <div className=" text-center">
      <div className="container mx-auto flex items-center justify-center">
        <img src={reloj} alt="" className="mr-4 w-16 h-16 mb-3" />
        <h1 className="text-5xl font-bold mb-4 text-azulOscuro">
          Zona Horaria
        </h1>
      </div>
      <form onSubmit={handleSubmit} className=" font-bold">
        <input
          type="text"
          value={ciudad}
          onChange={handleCambioCiudad}
          className=" w-96 6 px-4 py-2 border-b-4 border-azulOscuro rounded-md shadow-sm focus:outline-none mt-20"
          placeholder="Formato: Continente/Ciudad"
        />
        <button
          type="submit"
          className=" bg-amarillo border-2 border-azulOscuro font-bold p-2 ml-2 w-20 rounded-xl"
        >
          Buscar
        </button>
      </form>
      {dataHora && (
        <div className=" mt-12 text-3xl font-bold">
          <h2>
            {" "}
            la hora en {ciudad} es {dataHora.datetime}
          </h2>
        </div>
      )}
      <h3 className=" mt-48 font-bold text-rosa">
        ⚠️ Puede que su ciudad no se encuentre en la base de datos ya que la API
        solo tiene almacenada las ciudades mas importantes
      </h3>
    </div>
  );
};
