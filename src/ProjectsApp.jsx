import React from "react";
import { Navbar } from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ToDoProject } from "./pages/ToDoProject";
import { CalculadoraProject } from "./pages/CalculadoraProject";
import { RelojMundial } from "./pages/RelojMundial";
import { EncontrarParejas } from "./pages/EncontrarParejas";

export const ProjectsApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/toDo" element={<ToDoProject />}></Route>
        <Route path="/calculadora" element={<CalculadoraProject />}></Route>
        <Route path="/reloj" element={<RelojMundial />}></Route>
        <Route path="/parejas" element={<EncontrarParejas />} />
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};
