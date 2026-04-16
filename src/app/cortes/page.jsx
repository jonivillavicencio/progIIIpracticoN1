"use client";

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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Cortes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cortes.map((corte) => (
          <div
            key={corte.id}
            className="border p-4 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-semibold">{corte.nombre}</h2>
            <p className="text-amber-300">{corte.precio}</p>

            <button
              onClick={() => reservar(corte.nombre)}
              className="mt-2 bg-amber-50 text-red-800 px-3 py-1 rounded hover:bg-gray-800 transition"
            >
              Reservar
            </button>
          </div>
        ))}
      </div>

      {/* TOAST estilo WhatsApp */}
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
    </div>
  );
}