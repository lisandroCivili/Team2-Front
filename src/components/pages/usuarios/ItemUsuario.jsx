import React from 'react';
import { Col } from 'react-bootstrap';
import "../../../../styles/Administrador.css"

const ItemUsuario = ({usuario}) => {
    return (
        <>
            <Col
            sm={4}
            className="columna border-bottom border-success p-2 text-center"
          >
            {usuario.nombreUsuario}
          </Col>
          <Col
            sm={4}
            className="columna border-bottom border-success p-2 text-center"
          >
            {usuario.email}
          </Col>
          <Col
            sm={4}
            className="columna border-bottom border-success p-2 text-center  filasDatosSM"
          >
            {usuario.rol}
          </Col>
        </>
    );
};

export default ItemUsuario;