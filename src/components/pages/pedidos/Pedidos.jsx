import { useEffect, useState } from "react";
import "../../../../styles/Administrador.css";
import { Button, Container, Row, Col, Form, NavLink } from "react-bootstrap";
import { borrarPedido, leerPedidos } from "../../../helpers/queries";
import ItemPedido from "./ItemPedido";
import Swal from 'sweetalert2';

const Pedidos = () => {

  const [pedidos, setPedidos] = useState([])

  useEffect(()=>{
    recibirPedidos()
  },[pedidos])

  const recibirPedidos = async()=>{
    const respuesta = await leerPedidos();
    if (respuesta.status===200) {
      const datos = await respuesta.json()
      setPedidos(datos.pedidos)
    }else{
      throw new Error('No se encontraron productos')
    }
  }
  
 

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Listado de pedidos</h1>
      </div>
      <hr />
      <div className="contenedor-filas">
        <Row className="filas">
          {pedidos.length === 0 ? (
              <div className="carritoVacio">
              <p>No hay ningun pedido pendiente</p>
            </div>
          ):(
            pedidos.map((pedido) => (
              <ItemPedido key={pedido._id} pedido={pedido} setPedidos={setPedidos} pedidos={pedidos}></ItemPedido>
            ))
          )}
        </Row>  
      </div>
    </Container>
  );
};

export default Pedidos;
