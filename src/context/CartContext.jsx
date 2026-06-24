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
        localstorage.setItem('carrito_barberia', JSON.stringify(nuevoCarrito));
    };

    const vacioCarrito = () => {
        setCarrito([]);
        localStorage.removeItem('carrito_barberia');
    };

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, vacioCarrito }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);

