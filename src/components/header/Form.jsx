import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { db } from '../../firebaseConfig';
import { CartContext } from '../context/Context';

const Form = ({ handleId }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [celular, setCelular] = useState('');
    const { totalPrice, cart } = useContext(CartContext);
    const total = totalPrice();

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            customer: { nombre, apellido, celular },
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
    const handleApellido = (e) => setApellido(e.target.value);

    return (
        <div className="col-md-4 container bg-default">
            <h1 className="my-4" style={{ color: '#80CECC' }}>
                Déjanos tus datos y completa el pago
            </h1>

            <form action="" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-md-6 form-group">
                        <label for="firstname">Nombre</label>
                        <input type="text"
                            name="nombre"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={handleNombre}
                            required
                            className="form-control" />
                        <div className="invalid-feedback">
                            Nombre valido es requerido.
                        </div>
                    </div>

                    <div className="col-md-6 form-group">
                        <label for="lastname">Apellido</label>
                        <input type="text" cname="nombre"
                            placeholder="Apellido"
                            value={apellido}
                            onChange={handleApellido}
                            required
                            className="form-control" />
                        <div className="invalid-feedback">
                            Apellido valido es requerido.
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="phone">Celular</label>
                    <input type="number" cname="celular"
                        placeholder="Celular"
                        value={celular}
                        onChange={handleCelular}
                        required
                        className="form-control" />
                    <div className="invalid-feedback">
                        Celular valido es requerido.
                    </div>

                </div>

                <div className="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" className="form-control" id="email" placeholder="mi@email.com" required />
                </div>

                <hr></hr>

                <h4 className="mb-4">Información de Pago</h4>

                <div className="form-check">
                    <input type="radio" className="form-check-input" style={{ fontWeight: 'bold', color: 'white', backgroundColor: '#80CECC' }} id="tarjeta" name="payment-method" checked required />
                    <label for="tarjeta" className="form-check-label">Tarjeta</label>
                </div>

                <div className="form-check">
                    <input type="radio" className="form-check-input" style={{ fontWeight: 'bold', color: 'white', backgroundColor: '#80CECC' }} id="paypal" name="payment-method" required />
                    <label for="paypal" className="form-check-label">PayPal</label>
                </div>

                <div className="row mt-4">
                    <div className="col-md-6 form-group">
                        <label for="card-name">Nombre en la tarjeta</label>
                        <input type="text" className="form-control" id="card-name" placeholder required />
                        <div className="invalid-feedback">
                            Olvidaste poner el nombre
                        </div>
                    </div>

                    <div className="col-md-6 form-group">
                        <label for="card-no">Númer de tarjeta</label>
                        <input type="text" className="form-control" id="card-no" placeholder required />
                        <div className="invalid-feedback">
                            Olvidaste poner el número de tarjeta
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-md-5 form-group">
                        <label for="expiration">Fecha de expiración</label>
                        <input type="text" className="form-control" id="card-name" placeholder required />
                        <div className="invalid-feedback">
                            Olvidaste poner la fecha
                        </div>
                    </div>


                    <div className="col-md-5 form-group">
                        <label for="ccv-no">CVV</label>
                        <input type="text" className="form-control" id="sec-no" placeholder required />
                        <div className="invalid-feedback">
                            Olvidaste poner el CVV
                        </div>
                    </div>
                </div>

                <hr className="mb-4" />

                <button classNameName="btn btn-lg mx-1" style={{ fontWeight: 'bold', color: 'white', backgroundColor: '#80CECC' }} type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form

