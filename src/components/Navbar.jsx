import React from "react";
import projectsPNG from "../assets/projectsPNG.png";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="py-4 px-4 md:px-8 lg:px-24 flex flex-col md:flex-row justify-between items-center">
      <NavLink to={"/"}>
        <div className="flex items-center">
          <img
            src={projectsPNG}
            alt=""
            className="mr-2"
            style={{ width: "50px", height: "auto" }}
          />
          <h1 className="text-2xl md:text-3xl font-bold text-azulOscuro">
            MultiProjects
          </h1>
        </div>
      </NavLink>

      <h2 className="font-semibold text-celeste mt-4 md:mt-0">
        made by Alessandro
      </h2>
    </div>
  );
};
