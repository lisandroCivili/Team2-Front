import React from 'react';
import { Button } from 'react-bootstrap';
import errorImage from '../../assets/pagina-error-404-negocio-comida_51549-73-removebg-preview.png';
import '../../../styles/error404.css';


const Error404 = () => {
    return (
        <section className="error404-container text-center">
            <img src={errorImage} alt="Error 404" className="error404-image" />
            <div className="error404-content">
                <h2 className="error404-heading">Página no encontrada</h2>
                <p className="error404-message">Lo sentimos, la página que estás buscando no existe.</p>
                <Button variant='danger' className="error404-button">Volver al inicio</Button>
            </div>
          
        </section>
    );
};

export default Error404;
