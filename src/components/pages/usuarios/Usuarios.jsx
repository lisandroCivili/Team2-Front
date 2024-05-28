import "../../../../styles/Administrador.css";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { listarUsuarios } from "../../../helpers/queries";
import ItemUsuario from "./ItemUsuario";
import { useEffect, useState } from "react";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    recibirUsuarios();
  }, [usuarios]);

  const recibirUsuarios = async () => {
    const respuesta = await listarUsuarios();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setUsuarios(datos.usuarios);
    } else {
      throw new Error("No se encontraron usuarios");
    }
  };


  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Listado de usuarios</h1>
      </div>
      <hr />
      <div className="contenedor-filas">
        <Row className="filas filasTitulosSM">
          <Col
            sm={4}
            className="columna border-top border-success p-3 text-center fs-4"
          >
            Usuario
          </Col>
          <Col
            sm={4}
            className="columna border-top border-bottom border-success p-3 text-center fs-4"
          >
            Email
          </Col>
          <Col
            sm={4}
            className="columna border-top border-bottom border-success p-3 text-center fs-4"
          >
            Rol
          </Col>
        </Row>
        <Row className="filas">
          {usuarios.map((usuario)=>(
            <ItemUsuario key={usuario._id} usuario={usuario}></ItemUsuario>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Usuarios;
