import { useEffect, useState } from 'react';
import '../../../../styles/Administrador.css'
import { Button, Container, Row, Col,Form} from "react-bootstrap";
import {leerProductos, mostrarProducto} from '../../../helpers/queries'
import ItemProducto from './ItemProducto';
import { Link } from 'react-router-dom';

const Administrador = () => {

  const [productos, setProductos] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [filtro, setFiltro] = useState([])

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
 
  
  const handleBuscar = async ()=>{
    const respuesta = await mostrarProducto(busqueda)
    if (respuesta.status === 200) {
      const datos = await respuesta.json()
      setFiltro(datos)
      }else{
        console.log('Error al buscar producto')
        setFiltro([])
      }
    }
    
    
    const busquedaUsuario = (e)=>{
      setBusqueda(e.target.value)
    }

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Productos disponibles</h1>
      </div>
      <hr />
      
      <Form className="mb-3" onSubmit={(e)=>{e.preventDefault(); handleBuscar()}}>
        <Button className="btn btnAgregar float-end" as={Link} to="/administrador/agregarProducto">
            <i className="bi bi-plus-circle"></i>
        </Button>
        <Form.Group controlId="formBusqueda" className="mb-3">
          <Form.Label className='display-6'>Buscar un producto</Form.Label>
          <Row>
            <Col sm={4} className='mb-2'>
              <Form.Control
                type="text"
                placeholder="Ingresa el nombre del producto"
                onChange={busquedaUsuario}
              />
              {
                busqueda.length>0 && (
                  Form.Control.Append
                )
              }
            </Col>
            <Col sm={4}>
              <Button className='btnBuscar' onClick={handleBuscar}>
                Buscar
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>

      <div className='contenedor-filas'>
        <Row className='filas'>
            <Col sm={2} className="columna border p-3 text-center fs-4">Producto</Col>
            <Col sm={2} className="columna border-top border-bottom p-3 text-center fs-4">Estado</Col>
            <Col sm={2} className="columna border p-3 text-center fs-4">Precio</Col>
            <Col sm={2} className="columna border-top border-bottom p-3 text-center fs-4">Categoria</Col>
            <Col sm={2} className="columna border p-3 text-center fs-4">Imagen</Col>
            <Col sm={2} className="columna border p-3 fs-4">Opciones</Col>
        </Row>
        {
          filtro.length > 0 ? (
            filtro.map((producto) => (
              <ItemProducto key={producto._id} producto={producto} setProductos={setProductos}></ItemProducto>
            ))
          ) : (
            productos.map((producto) => (
              <ItemProducto key={producto._id} producto={producto} setProductos={setProductos}></ItemProducto>
            ))
          )
        }
      </div>
    </Container>
  );
};

export default Administrador;
