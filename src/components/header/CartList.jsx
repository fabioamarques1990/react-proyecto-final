import React, { useContext } from 'react';
import { CartContext } from '../context/Context';
import Basura from "../../assets/basura.png";
import { Link } from 'react-router-dom'
const CartList = () => {
  const { cart, deleteOne, totalPrice } = useContext(CartContext);

  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">

            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">Carrito</h3>
              <div>
                <p className="mb-0"><span className="text-muted">Monto total:</span>${totalPrice()}</p>
              </div>
            </div>

            {cart.map((producto) => (
              <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">

                    <div className="col-md-3 col-lg-3 col-xl-3" key={producto.id}>
                      <p className="lead fw-normal mb-2">{producto.title}</p>
                    </div>

                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <button onClick={() => deleteOne(producto.id)}><img src={Basura} alt="Basura" width="20" /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="card">
              <div className="card-body">
                <button type="button" className="btn btn-warning btn-block btn-lg"><Link style={{ textDecoration: 'none' }} to="/checkout">Checkout</Link></button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CartList;