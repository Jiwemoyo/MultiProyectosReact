import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ProjectsApp } from "./ProjectsApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ProjectsApp />
    </React.StrictMode>
  </BrowserRouter>
);
