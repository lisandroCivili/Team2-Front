import React from 'react';
import { FaInstagramSquare, FaFacebook, FaTiktok } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import '../../../styles/menu.css';

function Footer() {
  return (
    <footer className="py-3 h-25">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 text-center text-md-start mb-3 mb-md-0">
            <div>
              <img src={logo} alt="Logo" className="img-fluid mb-2" />
            </div>
            <div>
              <p className="textoFooter">
                <strong>
                  <em>
                    En Flash Food, estamos comprometidos con ofrecerte una experiencia culinaria excepcional que despierte tus sentidos y satisfaga tus antojos más exigentes.
                  </em>
                </strong>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
            <h3 className="text-light">Atención al Cliente</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-light d-block mb-2">
                  <BsFillTelephoneFill className='iconosAtencionAlCliente' /> 123-456-7890
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light d-block mb-2">
                  <BsFillTelephoneFill className='iconosAtencionAlCliente' /> 123-456-7890
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light d-block mb-2">
                  <FaLocationDot className='iconosAtencionAlCliente' /> Narnia
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 text-center text-md-start">
            <h3 className="text-light">Nuestras Redes</h3>
            <div>
              <a href="#" className="mx-2 mx-md-1">
                <FaInstagramSquare className='iconosRedes' />
              </a>
              <a href="#" className="mx-2 mx-md-1">
                <FaFacebook className='iconosRedes' />
              </a>
              <a href="#" className="mx-2 mx-md-1">
                <FaTiktok className='iconosRedes' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
