import { useEffect, useState } from 'react';
import '../../../../styles/administrador.css'
import { Button, Container, Row, Col,Form } from "react-bootstrap";
import {leerProductos} from '../../../helpers/queries'
import ItemProducto from './ItemProducto';

const Administrador = () => {

  const [productos, setProductos] = useState([])

  useEffect(()=>{
    recibirProductos()
  },[])

  const recibirProductos = async()=>{
      const respuesta = await leerProductos();
      if (respuesta.status===200) {
        const datos = await respuesta.json()
        setProductos(datos)
      }else{
        console.log('No se encontraron productos')
      }
  }

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Productos disponibles</h1>
      </div>
      <hr />
      
      <Form className="mb-3">
        <Button className="btn btn-success float-end">
            <i className="bi bi-plus-circle"></i>
        </Button>
        <Form.Group controlId="formBusqueda" className="mb-3">
          <Form.Label className='display-6'>Buscar un producto</Form.Label>
          <Row>
            <Col sm={4} className='mb-2'>
              <Form.Control
                type="text"
                placeholder="Ingresa el nombre del producto"
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
        {
          productos.map((producto)=><ItemProducto key={producto.id} producto={producto}></ItemProducto>)
        }
        {/* <Row className='filas'>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Papas</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Estado</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Precio</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Categoria</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Imagen</Col>
            <Col sm={2} className="columna border border-top-0 border-success p-2 text-center">
                <Button className='btn btn-warning me-4'>
                    <i className="bi bi-pencil-square"></i>
                </Button>
                <Button className='btn btn-danger'>
                    <i className="bi bi-trash"></i>
                </Button>
            </Col>
        </Row>
        <Row className='filas'>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Hamburguesa</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Estado</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Precio</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Categoria</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Imagen</Col>
            <Col sm={2} className="columna border border-top-0 border-success p-2 text-center">
                <Button className='btn btn-warning me-4'>
                    <i className="bi bi-pencil-square"></i>
                </Button>
                <Button className='btn btn-danger'>
                    <i className="bi bi-trash"></i>
                </Button>
            </Col>
        </Row>
        <Row className='filas'>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Panchos</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Estado</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Precio</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Categoria</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Imagen</Col>
            <Col sm={2} className="columna border border-top-0 border-success p-2 text-center">
                <Button className='btn btn-warning me-4'>
                    <i className="bi bi-pencil-square"></i>
                </Button>
                <Button className='btn btn-danger'>
                    <i className="bi bi-trash"></i>
                </Button>
            </Col>
        </Row>
        <Row className='filas'>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Patas</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Estado</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Precio</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Categoria</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Imagen</Col>
            <Col sm={2} className="columna border border-top-0 border-success p-2 text-center">
                <Button className='btn btn-warning me-4'>
                    <i className="bi bi-pencil-square"></i>
                </Button>
                <Button className='btn btn-danger'>
                    <i className="bi bi-trash"></i>
                </Button>
            </Col>
        </Row> */}
      </div>
    </Container>
  );
};

export default Administrador;
