import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/sup-porto.jpg";
import Carrito from "./Carrito";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>
                    <img src={logo} alt="SUP PORTO" width="90" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_lc" aria-controls="nav_lc" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav_lc">
                    <ul className="navbar-nav my-3 my-lg-0 ms-lg-3 me-auto">
                        <Link className="nav-link active" aria-current="page" to={"/"}>Inicio</Link>
                        <Link className="nav-link" to={"/category/sup"}>SUP</Link>
                        <Link className="nav-link" to={"/category/surf"}>Surf</Link>
                        <Link className="nav-link" to="/">Contacto</Link>
                    </ul>
                    <div><Link className="nav-link me-2" to="/"><Carrito /></Link></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;