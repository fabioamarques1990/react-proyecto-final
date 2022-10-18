import React from 'react'
import { useState } from 'react'
import Form from './Form';

const Checkout = () => {
    const [orderId, setOrderId] = useState('');

    const handleId = (numeroDeOrden) => {
        setOrderId(numeroDeOrden);
    };

    if (orderId) {
        return (
            <div className="order-confirmation">
                <div>
                    <h3>¡Tu aventura está reservada!</h3>
                </div>
                <br />
                <br />
                <div>
                    <p>El numero para acceder a tu reserva es:</p>
                    <p><b>{orderId}</b></p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Form handleId={handleId} />
        </div>
    )
}

export default Checkout