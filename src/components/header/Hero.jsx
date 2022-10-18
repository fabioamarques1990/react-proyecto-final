import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="d-flex min-vh-100" lc-helper="background" style={{ background: "url(https://images.unsplash.com/photo-1506223064838-a9dff537fe98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80)  center / cover no-repeat", backgroundColor: "#444", backgroundBlendMode: "overlay" }}>
            <div className="align-self-center text-center text-light col-md-8 offset-md-2">
                <div className="lc-block mb-4">
                    <div editable="rich">
                        <h1 className="display-1 fw-bolder">Desconecta y disfruta</h1>
                    </div>
                </div>

                <div className="lc-block">
                    <div editable="rich">
                        <p className="lead">Seguro no vas a querer perder una puesta de sol como esta.</p>
                        <p className="lead">¡Llama a tus amigos, las cervezas las damos nosotros al final!</p>
                        <Link class="btn btn-lg btn-dark" to={"/category"} role="button">Ver paquetes</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero