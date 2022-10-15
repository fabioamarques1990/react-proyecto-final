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
            <div>
                <p>¡Tu aventura está reservada!</p>
                <br />
                <p>El numero para acceder a tu reserva es:</p>
                <h3>{orderId}</h3>
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