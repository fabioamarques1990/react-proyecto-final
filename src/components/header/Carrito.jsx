import React, {useContext} from "react";
import Carrito from "../../assets/carrito.png";
import Basura from "../../assets/basura.png";
import {CartContext} from "../context/Context";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {cartTotal, clear} = useContext(CartContext);

    return (
        <div>
            <button type="button" className="btn position-relative me-1" title="Vaciar Carrito" onClick={()=> {clear()}}>
                <img src={Basura} alt="Basura" />
            </button>
            <Link to={"/carrito"}>
                <button type="button" className="btn position-relative" title="Ir al Carrito">
                    <img src={Carrito} alt="Carrito" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
                </button>
            </Link>
        </div>
    )
}

export default CartWidget;

        