import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Context';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0);

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    addItem(item, cantidad);
  }

  return (
    <div className="container py-6" >
      <div className="row position-relative" >
        <div className="col-lg-9 text-center" >
          <div className="lc-block card bg-light border-0 p-lg-6" >
            <div className="card-body col-lg-12 py-5" style={{ backgroundColor: '#F3FAFA' }} >
              <div className="lc-block mb-5 col-xl-10 mx-auto">
                <div editable="rich">
                  <h2 className="h5" style={{ color: 'grey', fontWeight: 'bolder' }}>{item.title}</h2>

                </div>
              </div>
              <div className="lc-block">
                <div editable="rich">
                  <p className="text-muted rfs-9"> {item.description} </p>
                  <p className="text-muted lead" style={{ color: 'grey', fontWeight: 'bolder' }}>${item.price}.00MXN</p>
                  {cantidad === 0 ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> : <Link to={"/carrito"} className="btn btn-lg mx-1a" style={{ fontWeight: 'bold', color: 'white', backgroundColor: '#80CECC' }} >Ir al Carrito</Link>}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

