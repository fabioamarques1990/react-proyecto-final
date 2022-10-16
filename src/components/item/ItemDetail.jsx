import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../header/context/Context';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const {addItem} = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0);

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    addItem(item, cantidad);
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 py-3">
                <h2> {item.title} </h2>
                <p> {item.description} </p>
                <p> <b>${item.price}</b> </p>
            </div>

            {cantidad === 0 ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> : <Link to={"/carrito"}>Ir al carrito</Link>}
        </div>
    </div>
  );
};

export default ItemDetail;