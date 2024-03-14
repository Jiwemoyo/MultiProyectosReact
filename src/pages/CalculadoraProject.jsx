import React, { useState } from "react";
import numeros from '../assets/claculadoraPng.png'

export const CalculadoraProject = () => {
  const [operacion, setOperacion] = useState("0");

  const handleButtonClick = (valor) => {
    if (valor === "C") {
      setOperacion(operacion.slice(0, -1)); // Eliminar el último carácter
    } else if (operacion === "0") {
      setOperacion(valor);
    } else {
      setOperacion(operacion + valor);
    }
  };

  const handleClear = () => {
    setOperacion("0");
  };

  const handleCalculate = () => {
    try {
      setOperacion(eval(operacion).toString());
    } catch (error) {
      setOperacion("Error");
    }
  };

  return (
    <>
      <div className="container mx-auto flex items-center justify-center mb-24">
        <img src={numeros} alt="" className="mr-4 w-16 h-16 mb-3" />{" "}
        <h1 className="text-5xl font-bold mb-4 text-azulOscuro">
          Calculadora
        </h1>
      </div>
      <div className="flex justify-center items-center h-full font-bold">
        <div className="bg-verde p-8 rounded-lg shadow-lg">
          <div className="w-full mb-4 px-4 py-2 bg-white rounded">
            {operacion}
          </div>
          <div className="grid grid-cols-4 grid-rows-5 gap-4 text-center">
            <button
              onClick={handleClear}
              className="row-span-1 col-span-3 py-4 px-8 bg-white hover:bg-gray-300 rounded"
            >
              Clear
            </button>
            <button
              onClick={() => handleButtonClick("C")}
              className="row-span-1 py-4 px-8 bg-rosa hover:bg-red-600 text-azulOscuro rounded"
            >
              C
            </button>

            <button
              onClick={() => handleButtonClick("7")}
              className="py-4 px-8 bg-white hover:bg-gray-300 rounded"
            >
              7
            </button>
            <button
              onClick={() => handleButtonClick("8")}
              className="py-4 px-8 bg-white hover:bg-gray-300 rounded"
            >
              8
            </button>
            <button
              onClick={() => handleButtonClick("9")}
              className="py-4 px-8 bg-white hover:bg-gray-300 rounded"
            >
              9
            </button>
            <button
              onClick={() => handleButtonClick("/")}
              className="py-4 px-8 bg-amarillo hover:bg-yellow-600 text-azulOscuro rounded"
            >
              /
            </button>

            <button
              onClick={() => handleButtonClick("4")}
              className="py-4 px-8 bg-white hover:bg-gray-300 rounded"
            >
              4
            </button>
            <button
              onClick={() => handleButtonClick("5")}
              className="py-4 px-8 bg-white hover:bg-gray-300 rounded"
            >
              5
            </button>
            <button
              onClick={() => handleButtonClick("6")}
              className="py-4 px-8 bg-white hover:bg-gray-300 rounded"
            >
              6
            </button>
            <button
              onClick={() => handleButtonClick("*")}
              className="py-4 px-8 bg-amarillo hover:bg-yellow-600 text-azulOscuro rounded"
            >
              *
            </button>

            <button
              onClick={() => handleButtonClick("1")}
              className="py-4 px-8 bg-white hover:bg-gray-300 rounded"
            >
              1
            </button>
            <button
              onClick={() => handleButtonClick("2")}
              className="py-4 px-8 bg-white hover:bg-gray-300 rounded"
            >
              2
            </button>
            <button
              onClick={() => handleButtonClick("3")}
              className="py-4 px-8 bg-white hover:bg-gray-300 rounded"
            >
              3
            </button>
            <button
              onClick={() => handleButtonClick("-")}
              className="py-4 px-8 bg-amarillo hover:bg-yellow-600 text-azulOscuro rounded"
            >
              -
            </button>

            <button
              onClick={() => handleButtonClick("0")}
              className="row-span-2 py-4 px-8 bg-white hover:bg-gray-300 rounded"
            >
              0
            </button>
            <button
              onClick={() => handleButtonClick(".")}
              className="py-4 px-8 bg-white hover:bg-gray-300 rounded"
            >
              .
            </button>
            <button
              onClick={handleCalculate}
              className="row-span-2 col-span-2 py-4 px-8 bg-green-500 hover:bg-green-600 text-azulOscuro rounded"
            >
              =
            </button>
            <button
              onClick={() => handleButtonClick("+")}
              className="py-4 px-8 bg-amarillo hover:bg-yellow-600 text-azulOscuro rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
