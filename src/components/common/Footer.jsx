import "../../../styles/menu.css";
import React from "react";
import { FaInstagramSquare, FaFacebook, FaTiktok } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import Image from 'react-bootstrap/Image';
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="py-3 h-25">
      <div className="container">
        <div className="row"> 
          <div className="col-md-4 col-lg-4 text-center text-lg-start contLogoFooter">
            <Link to="/">
              <Image src={logo} alt="logo de flashfood" className="logoFooter h-100"/>
            </Link>
          </div>
          <div className="col-md-4 col-lg-4 text-center p-4">
            <h3 className="text-light">Atencion al Cliente</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/error404" className="text-decoration-none text-light">
                  <BsFillTelephoneFill className="iconosAtencionAlCliente" />
                  123-456-7890
                </a>
              </li>
              <li>
                <a href="/error404" className="text-decoration-none text-light">
                  <BsFillTelephoneFill className="iconosAtencionAlCliente" />
                  123-456-7890
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/AZbZnJzLub4roVGL6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-light"
                >
                  <FaLocationDot className="iconosAtencionAlCliente" />
                  San Miguel de Tucumán
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-4 text-light text-center p-4">
            <h3>Nuestras Redes</h3>
            <div>
              <a href="/error404" className="mx-2 mx-md-1">
                <FaInstagramSquare className="iconosRedes" />
              </a>
              <a href="/error404" className="mx-2 mx-md-1">
                <FaFacebook className="iconosRedes" />
              </a>
              <a href="/error404" className="mx-2 mx-md-1">
                <FaTiktok className="iconosRedes" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
