import { useEffect, useState } from "react";
import "../../../../styles/Administrador.css";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { leerProductos, mostrarProducto } from "../../../helpers/queries";
import ItemProducto from "./ItemProducto";
import { Link } from "react-router-dom";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    recibirProductos();
  }, []);

  const recibirProductos = async () => {
    const respuesta = await leerProductos();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setProductos(datos);
    } else {
      throw new Error.log("No se encontraron productos");
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mt-5 cont-titulos-admin">
        <h1 className="display-4 disponibles">Productos disponibles</h1>
        <div className="d-flex flex-column flex-sm-row">
          <Button
            className="btn btnAgregar mb-2 mb-sm-0 me-sm-2"
            as={Link}
            to="/administrador/pedidos"
          >
            Pedidos pendientes
          </Button>
          <Button
            className="btn btnAgregar"
            as={Link}
            to="/administrador/agregarProducto"
          >
            Agregar producto
          </Button>
        </div>
      </div>
      <hr />
      <div className="contenedor-filas">
        <Row className="filas filas-none-sm">
          <Col sm={2} className="columna border p-3 text-center fs-4">
            Producto
          </Col>
          <Col
            sm={2}
            className="columna border-top border-bottom p-3 text-center fs-4"
          >
            Estado
          </Col>
          <Col sm={2} className="columna border p-3 text-center fs-4">
            Precio
          </Col>
          <Col
            sm={2}
            className="columna border-top border-bottom p-3 text-center fs-4"
          >
            Categoria
          </Col>
          <Col sm={2} className="columna border p-3 text-center fs-4">
            Imagen
          </Col>
          <Col sm={2} className="columna border p-3 fs-4">
            Opciones
          </Col>
        </Row>
        {productos.map((producto) => (
          <ItemProducto
            key={producto._id}
            producto={producto}
            setProductos={setProductos}
          ></ItemProducto>
        ))}
      </div>
    </Container>
  );
};

export default Administrador;
