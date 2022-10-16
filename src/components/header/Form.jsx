import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { db } from '../../firebaseConfig';
import { CartContext } from './context/Context';

const Form = ({handleId}) => {
    const [nombre, setNombre] = useState('');
    const [celular, setCelular] = useState('');
    const {totalPrice, cart} = useContext(CartContext);
    const total = totalPrice();

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            customer: {nombre, celular},
            date: serverTimestamp(),
            cart,
            total
        };
        const refOrder = collection(db, 'orders');
        addDoc(refOrder, order).then((res) => {
            handleId(res.id);
        });
    };

    const handleNombre = (e) => setNombre(e.target.value);
    const handleCelular = (e) => setCelular(e.target.value);

  return (
    <form action="" onSubmit={handleSubmit}>
        <input 
            type="text"
            name="nombre" 
            placeholder='Nombre'
            value={nombre}
            onChange={handleNombre}
            required
        />
        <input 
            type="number"
            name="celular" 
            placeholder='Celular'
            value={celular}
            onChange={handleCelular}
            required
        />
        <button>Enviar</button>
    </form>
  )
}

export default Form