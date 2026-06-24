'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Carrusel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const anteriorSlide = () => {
    const esPrimerSlide = currentIndex === 0;
    const nuevoIndice = esPrimerSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(nuevoIndice);
    };

    const siguienteSlide = () => {
    const esUltimoSlide = currentIndex === slides.length - 1;
    const nuevoIndice = esUltimoSlide ? 0 : currentIndex + 1;
    setCurrentIndex(nuevoIndice);
    };

    const irAlSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    };

    useEffect(() => {
    const temporizador = setInterval(() => {
        siguienteSlide();
    }, 3000);

    return () => clearInterval(temporizador);
    }, [currentIndex]);

    return (
    <div className="max-w-[800px] h-[300px] w-full m-auto py-4 px-4 relative group">
      {/* Contenedor de la Imagen */}
        <div className="w-full h-full rounded-2xl relative overflow-hidden flex items-center justify-center bg-white shadow-sm border border-gray-200">
        <Image
            src={slides[currentIndex].url}
            alt={`Marca ${currentIndex + 1}`}
            fill
            className="object-contain p-6 transition-all duration-500 ease-in-out"
            priority
        />
        </div>

      {/* Flecha Izquierda */}
        <button
        onClick={anteriorSlide}
        className="hidden group-hover:flex absolute top-[50%] -translate-y-1/2 left-8 rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors items-center justify-center z-10"
        >
        <span className="material-icons select-none text-[30px]">chevron_left</span>
        </button>

      {/* Flecha Derecha */}
        <button
        onClick={siguienteSlide}
        className="hidden group-hover:flex absolute top-[50%] -translate-y-1/2 right-8 rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors items-center justify-center z-10"
        >
        <span className="material-icons select-none text-[30px]">chevron_right</span>
        </button>

      {/* Indicadores */}
        <div className="flex justify-center py-4 gap-2">
        {slides.map((slide, slideIndex) => (
            <button
            key={slideIndex}
            onClick={() => irAlSlide(slideIndex)}
            className={`h-3 rounded-full transition-all ${
                currentIndex === slideIndex ? 'bg-blue-600 w-8' : 'bg-gray-400 w-3'
            }`}
            aria-label={`Ir al slide ${slideIndex + 1}`}
            />
        ))}
        </div>
    </div>
    );
}