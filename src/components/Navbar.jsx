'use client';

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";


export default function Navbar() {
    const { carrito, vacioCarrito, eliminarDelCarrito } = useCart();
    const [isOpen, setIsOpen] = useState(false); 

    return(
        <nav className="bg-mauve-900 text-white px-20">
            <section className="w-full flex justify-between items-center p-12">
                <div className="flex">
                <h1 className="text-lg font-bold text-amber-400">Corte & Navaja</h1>
                </div>
                <div className="flex items-center gap-6 text-zinc-300">
                <Link href={"/"} className=" hover:text-white">Home</Link>
                <Link href={"/barberia"} className=" hover:text-white">Barber</Link>
                <Link href={"/barbero"} className=" hover:text-white">Barberos</Link>
                <Link href={"/cortes"} className=" hover:text-white">Cortes</Link>
                <Link href={"/productos"} className=" hover:text-white">Productos</Link>
                <button 
                className="bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md"
                onClick={() => setIsOpen(!isOpen)}
                >
                    🛒 {carrito.length}
                </button>
                </div>
            </section>

            {isOpen && (
                <div className="absolute right-20 top-24 bg-mauve-950 border-amber-500 border-2 rounded-xl p-6 w-80 shadow-2xl text-white">
                    <div className="flex justify-between items-center mb-4 border-b border-zinc-700 pb-2">
                        <h3 className="text-amber-400 font-bold text-lg">Tu Carrito</h3>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="text-zinc-400 hover:text-white text-sm"
                        >
                            Cerrar
                        </button>
                    </div>

                    {carrito.length === 0 ? (
                        <p className="text-zinc-400 text-center py-4">El carrito está vacío.</p>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {/* Lista de productos agregados */}
                            <div className="max-h-60 overflow-y-auto flex flex-col gap-2 pr-1">
                                {carrito.map((item, index) => (
                                    <div key={`${item.id}-${index}`} className="flex justify-between items-center bg-mauve-900 p-2 rounded border border-zinc-800">
                                        <div>
                                            <p className="font-semibold text-sm line-clamp-1">{item.nombre}</p>
                                            <p className="text-amber-400 text-xs font-bold">{item.precio}</p>
                                        </div>
                                        <button
                                            onClick={() => eliminarDelCarrito(item.id)}
                                            className="text-red-400 hover:text-red-300 text-xs px-2 py-1 font-bold rounded hover:bg-mauve-950 transition"
                                            title="Eliminar producto"
                                        >
                                            quitar
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Botones de acción dentro del modal */}
                            <div className="border-t border-zinc-700 pt-4 flex gap-2">
                                <button 
                                    onClick={vacioCarrito}
                                    className="w-full bg-red-700 text-white py-2 rounded text-sm font-semibold hover:bg-red-600 transition"
                                >
                                    Vaciar
                                </button>
                                <button 
                                    onClick={() => alert('¡Gracias por tu compra!')}
                                    className="w-full bg-emerald-700 text-white py-2 rounded text-sm font-semibold hover:bg-emerald-600 transition"
                                >
                                    Finalizar
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}