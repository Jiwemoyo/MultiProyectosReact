import React from "react";

export const Tarjeta = ({ value, onClick }) => {
  return (
    <div className="bg-rosa rounded-md flex items-center justify-center h-28 w-28 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105" onClick={onClick}>
      {value}
    </div>
  );
};
