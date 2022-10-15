import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/sup-porto.jpg";
import Carrito from "./Carrito";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src={logo} alt="SUP PORTO" width="90" />
                    
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Inicio</Link>
                            <Link className="nav-link" to={"/category/sup"}>SUP</Link>
                            <Link className="nav-link" to={"/category/surf"}>Surf</Link>
                            <Link className="nav-link" to="/">Contacto</Link>
                            <Link className="nav-link" to="/"><Carrito /></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;