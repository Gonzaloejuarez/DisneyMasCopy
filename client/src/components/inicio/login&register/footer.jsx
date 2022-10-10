import React from "react"
import DisenyImg from '../../../images/disney.png';
import './footer.css'
export const Footer = () => {
    return(
        <div className="divAbajo">
        <div className="divImagen">
            <img src={DisenyImg} className='logoDisneyFooter' />
        </div>
        <div>
            <div className="info_footer">
            <article>
                <p>
                    Politica de privacidad
                </p>
            </article>
            <article>
                <p>
                    Acuerdo de suscripcion
                </p>
            </article>
            <article>
                <p>
                    Ayuda
                </p>
            </article>
            <article>
                <p>
                    Dispositivos compatibles
                </p>
            </article>
            </div>
            <div className="info_footer">
            <article>
                <p>
                    Acerca de Disney+
                </p>
            </article>
            <article>
                <p>
                    Publicidad personalizada
                </p>
            </article>
            </div>
            <div className="info_footer">
                <article style={{width:"50%"}}>
                    <p>
                    Disney+ es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad. El servicio Disney+ es comercializado por The Walt Disney Company (Argentina) S.A., Tucumán 1, Piso 4º (C1049AAA) Ciudad Autónoma de Buenos Aires, Argentina y número de CUIT 30-63984459-1.
                    </p>
                </article>
            </div>
            </div>
        </div>
    )
}

export default Footer