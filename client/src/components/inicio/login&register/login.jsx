import React from "react";
import {Link} from 'react-router-dom';
import './login.css';
import NavBarLyR from "./navbarLogin&Register";
import Footer from "./footer";
export const Login = () => {
    return(
        <>
        <section>
          <NavBarLyR />
        </section>
        <div className="divLogin">
            <div className="divFormulario">
                <h3>Inicia sesion con tu Correo</h3>
            <form action="" className="formulario">
                <input type="text" placeholder="Correo electronico" />
                <div className="botonContinuar">
                <button >CONTINUAR</button>
                </div>
            </form>
        <div className="divGoRegister">
        <p>¿Primera vez en Disney+?</p>
        <Link to="/register" className="linkRegister">Suscribirse</Link>
        </div>
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Login