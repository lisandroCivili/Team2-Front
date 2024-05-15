import { useEffect, useState } from "react";
import "../../../../styles/Administrador.css";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { leerPedidos } from "../../../helpers/queries";
import ItemPedido from "./ItemPedido";

const Pedidos = () => {

  const [pedidos, setPedidos] = useState([])

  useEffect(()=>{
    recibirPedidos()
  },[])

  const recibirPedidos = async()=>{
    const respuesta = await leerPedidos();
    if (respuesta.status===200) {
      const datos = await respuesta.json()
      setPedidos(datos.pedidos)
    }else{
      console.log('No se encontraron productos')
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
          {
          pedidos.map((pedido) => (
            <ItemPedido key={pedido._id} pedido={pedido}></ItemPedido>
          ))
          }
        </Row>  
      </div>
    </Container>
  );
};

export default Pedidos;
