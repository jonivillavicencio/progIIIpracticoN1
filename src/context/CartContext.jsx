'use client'

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {

    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        if(typeof window !== 'undefined') {
            const guardado = localStorage.getItem('carrito_barberia');
            if(guardado) setCarrito(JSON.parse(guardado));
        }
    }, []);

    const agregarAlCarrito = (producto) => {
        const nuevoCarrito = [...carrito, producto];
        setCarrito(nuevoCarrito);
        localStorage.setItem('carrito_barberia', JSON.stringify(nuevoCarrito));
    };

    const eliminarDelCarrito = (productoId) => {
        const nuevoCarrito = carrito.filter((item) => item.id !== productoId);
        setCarrito(nuevoCarrito);
        localStorage.setItem('carrito_barberia', JSON.stringify(nuevoCarrito));
    };


    const vacioCarrito = () => {
        setCarrito([]);
        localStorage.removeItem('carrito_barberia');
    };

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, vacioCarrito, eliminarDelCarrito }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);

