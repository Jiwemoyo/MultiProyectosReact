import React, { useEffect, useState } from "react";
import { Tarjeta } from "../components/Tarjeta";
import igual from "../assets/IgualPng.png";

export const EncontrarParejas = () => {
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    const symbols = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const initialCards = symbols
      .concat(symbols)
      .sort(() => Math.random() - 0.5);
    setCards(initialCards);
  }, []);

  const handleCardClick = (index) => {
    if (selected.length === 2 || matched.includes(index)) return;

    setSelected((prev) => [...prev, index]);

    if (selected.length === 1) {
      if (cards[selected[0]] === cards[index]) {
        setMatched([...matched, selected[0], index]);
      }
      setTimeout(() => setSelected([]), 1000);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center font-bold">
      <div className="container mx-auto flex items-center justify-center mb-8">
        <img src={igual} alt="" className="mr-4 w-16 h-16" />
        <h1 className="text-5xl font-bold text-azulOscuro">Juego de memoria</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((value, index) => (
          <Tarjeta
            key={index}
            value={
              matched.includes(index) || selected.includes(index) ? value : ""
            }
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
