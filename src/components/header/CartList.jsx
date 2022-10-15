import React, { useContext } from 'react';
import { CartContext } from '../context/Context';
import {Link} from 'react-router-dom'
const CartList = () => {
    const {cart, deleteOne, clear, totalPrice} = useContext(CartContext);

    return (
        <div>
            <h2>Total del carrito: ${totalPrice()}</h2>
            <hr />
            <h3>Paquetes seleccionados:</h3>
            <br />
            {cart.map((producto) => (
              <div key={producto.id}>
                <h3>{producto.title}</h3>
                <button onClick={() => deleteOne(producto.id)}>Borrar paquete</button>
              </div>  
            ))}
            <br />
            <hr />
            <button onClick={clear}>Borrar todos</button>
            <br />
            <hr />
            <Link to="/checkout" >Checkout</Link>
        </div>
    );
};

export default CartList;