"use client";
import Link from "next/link";

import { useState } from "react";

export default function Cortes() {
  const [mensaje, setMensaje] = useState("");
  const [visible, setVisible] = useState(false);

  const cortes = [
    { id: 1, nombre: "Degrade", precio: "$15000" },
    { id: 2, nombre: "Clasico", precio: "$10000" },
    { id: 3, nombre: "Barba", precio: "$5500" },
    { id: 4, nombre: "Corte mas Barba", precio: "$20000" },
  ];

  const reservar = (nombre) => {
    setMensaje(`Turno reservado para ${nombre}`);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  return (
    <section>
      <header className="bg-green-950 flex flex-col py-30 justify-center items-center">
        <h1 className="text-6xl font-bold text-white">Cortes</h1>
        <p className="mt-8 text-white text-2xl font-sans">Conoce todos nuestros tipos de cortes disponibles.</p>
      </header>

      <div className="flex p-40 justify-around flex-wrap bg-mauve-800 ">
        {cortes.map((corte) => (
          <div
            key={corte.id}
            className="flex flex-col justify-around bg-mauve-900 px-10 py-20 border-amber-500 border-2 rounded-xl hover:scale-110 transition duration-400 h-80 w-70"
          >
            <h2 className="text-white text-2xl font-semibold">{corte.nombre}</h2>
            <p className="mt-2 mb-2 text-amber-500 text-xl">{corte.precio}</p>

            <button
              onClick={() => reservar(corte.nombre)}
              className="mt-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-500 transition duration-300 font-semibold inline-block"
            >
              Reservar
            </button>
          </div>
        ))}
      </div>

      <div
        className={`fixed top-5 right-5 transform transition-all duration-500 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <span>✔️</span>
          <span>{mensaje}</span>
        </div>
      </div>
    </section>
  );
}
