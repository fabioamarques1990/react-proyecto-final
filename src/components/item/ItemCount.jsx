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
        <div className="row">
            <div className="col-md-6 offset-md-3" style={{ fontWeight: 'bold', color: 'grey' }}>
                <p><input type="button" className="btn rounded-circle" style={{ fontWeight: 'bold', color: 'white', backgroundColor: '#80CECC' }} value="-" onClick={() => { restar(cantidad - 1) }} /> {cantidad} <input type="button" className="btn rounded-circle" style={{ fontWeight: 'bold', color: 'white', backgroundColor: '#80CECC' }} value="+" onClick={() => { sumar(cantidad + 1) }} /></p>
                <p><input type="button" className="btn btn-lg mx-1" style={{ fontWeight: 'bold', color: 'white', backgroundColor: '#80CECC' }} value="Agregar" onClick={() => { agregarPaquetes() }} /></p>
            </div>
        </div>
    );
}

export default ItemCount;

