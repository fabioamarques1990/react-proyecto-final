import React, { useState, useEffect } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);

    const restar = (valor) => {
        if (valor > 0) {
            setCantidad(valor);
        }
    }

    const sumar = (valor) => {
        if (valor <= itemStock) {
            setCantidad(valor);
        }
    }

    const agregarPaquetes = () => {
        if (cantidad <= itemStock) {
            onAdd(cantidad);
            setItemStock(itemStock - cantidad);
            setCantidad(itemStock - cantidad);
        }
    }

    useEffect(() => {
        setItemStock(stock);
        }, [stock]);

    return (
            <div className="row text-center">
                <div className="col-md-2 text-center">
                    <div className="input-group text-center">
                        <input type="button" className="btn btn-secondary" value="-" onClick={() => { restar(cantidad - 1) }} />
                        <input type="text" className="form-control" value={cantidad} onChange={() => { }} />
                        <input type="button" className="btn btn-secondary" value="+" onClick={() => { sumar(cantidad + 1) }} />
                    </div>
                    <div className="d-grid gap-2 pt-3 text-center">
                        <input type="button" className="btn btn-secondary" value="Agregar" onClick={() => {agregarPaquetes()}} />
                    </div>
                </div>
            </div>
    );
}

export default ItemCount;