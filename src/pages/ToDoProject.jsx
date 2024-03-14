import React, { useState } from "react";
import fondoImgane from "../assets/ToDoPNG.png";

export const ToDoProject = () => {
  const [inputValue, setInputValue] = useState("");
  const [tareas, setTareas] = useState([]);
  const [tareasHechas, setTareasHechas] = useState([]);

  const handleValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, inputValue]);
    setInputValue("");
  };

  const handleTaskComplete = (index) => {
    const tareaCompletada = tareas[index];
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
    setTareasHechas([...tareasHechas, tareaCompletada]);
  };

  const handleTaskUndo = (index) => {
    const tareaPendiente = tareasHechas[index];
    const nuevasTareasHechas = tareasHechas.filter((_, i) => i !== index);
    setTareasHechas(nuevasTareasHechas);
    setTareas([...tareas, tareaPendiente]);
  };

  const handleDeleteTask = (index, isPending) => {
    if (isPending) {
      const nuevasTareas = tareas.filter((_, i) => i !== index);
      setTareas(nuevasTareas);
    } else {
      const nuevasTareasHechas = tareasHechas.filter((_, i) => i !== index);
      setTareasHechas(nuevasTareasHechas);
    }
  };

  return (
    <>
      <div className="text-center">
        <div className="container mx-auto flex items-center justify-center">
          <img src={fondoImgane} alt="" className="mr-4 w-16 h-16 mb-3" />
          <h1 className="text-5xl font-bold mb-4 text-azulOscuro">
            Lista de Tareas
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="mb-4 mx-auto">
          <input
            type="text"
            placeholder="Ingrese una nueva tarea"
            value={inputValue}
            onChange={handleValue}
            className="w-96 px-4 py-2 border-b-4 border-azulOscuro rounded-md shadow-sm focus:outline-none mt-20"
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-azulOscuro text-naranja rounded-md shadow-sm hover:bg-naranja hover:text-azulOscuro focus:outline-none font-bold"
            disabled={inputValue.trim() === ""}
          >
            Agregar
          </button>
        </form>
        <div className="flex justify-center font-bold mx-24 mt-20">
          <div className="w-1/2 px-16 border-4 border-naranja min-h-fit mx-auto">
            <h2 className="text-xl font-bold mb-2">Tareas Pendientes</h2>
            {tareas.map((tarea, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  onChange={() => handleTaskComplete(index)}
                  className="mr-2"
                />
                <p className="mx-auto">{tarea}</p>
                <button
                  onClick={() => handleDeleteTask(index, true)}
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          <div className="w-1/2 px-16 border-4 border-naranja min-h-fit mx-auto">
            <h2 className="text-xl font-bold mb-2">Tareas Hechas</h2>
            {tareasHechas.map((tarea, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  defaultChecked
                  onChange={() => handleTaskUndo(index)}
                  className="mr-2"
                />
                <p
                  style={{ textDecoration: "line-through" }}
                  className="mx-auto"
                >
                  {tarea}
                </p>
                <button
                  onClick={() => handleDeleteTask(index, false)}
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
