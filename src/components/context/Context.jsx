import React, { useState, createContext } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            let producto = cart.find(x => x.id === item.id);
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, cantidad: cantidad }]);
        }
    }

    const deleteOne = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id)
        setCart(productosFiltrados);
    };

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.cantidad, 0);
    }

    const totalPrice = () => {
        return cart.reduce((total, item) => total += item.price, 0);
    }
    console.log(totalPrice);

    return (
        <CartContext.Provider value={{ cart, addItem, clear, deleteOne, cartTotal, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export default Provider;