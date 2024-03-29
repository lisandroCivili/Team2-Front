import { useState } from 'react';
import '../../../styles/Administrador.css'
import { Button, Container, Row, Col,Form } from "react-bootstrap";

const Administrador = () => {

    const [busqueda, setBusqueda] = useState('')

    const handleBusqueda = ()=>{
        setBusqueda(event.target.value);
    }

    const buscar = ()=>{

    }
  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Productos disponibles</h1>
        <Button className="btn btn-success">
          <i className="bi bi-file-earmark-plus"></i>
        </Button>
      </div>
      <hr />
      <Form className="mb-3">
        <Form.Group controlId="formBusqueda" className="mb-3">
          <Form.Label className='display-6'>Buscar un producto</Form.Label>
          <Row>
            <Col sm={4} className='mb-2'>
              <Form.Control
                type="text"
                placeholder="Ingresa el nombre del producto"
                value={busqueda}
                onChange={handleBusqueda}
              />
            </Col>
            <Col sm={4}>
              <Button variant="success">
                Buscar
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      <div className='contenedor-filas'>
        <Row className='filas'>
            <Col sm={2} className="columna border border-success p-3 text-center fs-4">Producto</Col>
            <Col sm={2} className="columna border-top border-bottom border-success p-3 text-center fs-4">Estado</Col>
            <Col sm={2} className="columna border border-success p-3 text-center fs-4">Precio</Col>
            <Col sm={2} className="columna border-top border-bottom border-success p-3 text-center fs-4">Categoria</Col>
            <Col sm={2} className="columna border border-success p-3 text-center fs-4">Imagen</Col>
            <Col sm={2} className="columna border border-success p-3 text-center fs-4">Opciones</Col>
        </Row>
        <Row className='filas'>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Papas</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Estado</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Precio</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Categoria</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Imagen</Col>
            <Col sm={2} className="columna border border-top-0 border-success p-3 text-center">
                <Button className='btn btn-warning me-4'>
                    <i className="bi bi-pencil-square"></i>
                </Button>
                <Button className='btn btn-danger'>
                    <i className="bi bi-trash"></i>
                </Button>
            </Col>
        </Row>
        <Row className='filas'>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Hamburguesa</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Estado</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Precio</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Categoria</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Imagen</Col>
            <Col sm={2} className="columna border border-top-0 border-success p-3 text-center">
                <Button className='btn btn-warning me-4'>
                    <i className="bi bi-pencil-square"></i>
                </Button>
                <Button className='btn btn-danger'>
                    <i className="bi bi-trash"></i>
                </Button>
            </Col>
        </Row>
        <Row className='filas'>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Panchos</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Estado</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Precio</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Categoria</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Imagen</Col>
            <Col sm={2} className="columna border border-top-0 border-success p-3 text-center">
                <Button className='btn btn-warning me-4'>
                    <i className="bi bi-pencil-square"></i>
                </Button>
                <Button className='btn btn-danger'>
                    <i className="bi bi-trash"></i>
                </Button>
            </Col>
        </Row>
        <Row className='filas'>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Patas</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Estado</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Precio</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Categoria</Col>
            <Col sm={2} className="columna border-bottom border-success p-3 text-center">Imagen</Col>
            <Col sm={2} className="columna border border-top-0 border-success p-3 text-center">
                <Button className='btn btn-warning me-4'>
                    <i className="bi bi-pencil-square"></i>
                </Button>
                <Button className='btn btn-danger'>
                    <i className="bi bi-trash"></i>
                </Button>
            </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Administrador;
