'use client';

import { useCart } from '../context/CartContext';


export default function Tarjeta({ producto }) {
    const { agregarAlCarrito } = useCart();


    return (
    <div className="flex flex-col justify-between bg-mauve-900 px-8 py-10 border-amber-500 border-2 rounded-xl h-full w-72">
        <div className="flex flex-col flex-grow">
        <img src={producto.imagen} alt={producto.nombre} className="w-full h-32 object-contain rounded-md mb-4" />
        <h2 className="text-white text-xl line-clamp-2 font-bold mb-2">{producto.nombre}</h2>
        <p className="text-zinc-300 line-clamp-3 text-sm mb-4">{producto.descripcion}</p>
        </div>
        <div className='mt-auto pt-4'>
        <p className="text-amber-400 text-2xl font-bold mb-4">{producto.precio}</p>
        <button 
            className="w-full bg-amber-600 text-white px-4 py-3 rounded-lg hover:bg-amber-500 transition duration-300 font-semibold shadow-md"
            onClick={() => { 
                agregarAlCarrito(producto);
                alert(`¡${producto.nombre} agregado al carrito!`);
            }}
            >
            Comprar
        </button>
        </div>
    </div>
    );
}