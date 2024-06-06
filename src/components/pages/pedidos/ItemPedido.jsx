import React from 'react';
import { Button, Card, Col, Form, Accordion } from 'react-bootstrap';
import '../../../../styles/Administrador.css'
import { borrarPedido } from '../../../helpers/queries';
import Swal from 'sweetalert2';

const ItemPedido = ({pedido, setPedidos, pedidos}) => {

  const eliminarPedido = async(id)=>{
    Swal.fire({
      title: `¿Confirma entrega del pedido?`,
      showDenyButton: true,
      confirmButtonText: "Entregado",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        borrarPedido(pedido._id)
        setPedidos(pedidos)
      }
    });
   }

     return (
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><span className='titulo'>{pedido.email}</span></Accordion.Header>
        <Accordion.Body>
          <h2 className='etiqueta'>PRODUCTOS:</h2>
          {pedido.productos.map((producto)=>(
            <p key={producto._id} className='etiqueta'>•{producto.nombreProducto} x {producto.cantidad}</p>
          ))}
          <p className='etiqueta'>PRECIO TOTAL: ${pedido.precioTotal}</p>
          <p className='etiqueta'>ESTADO: {pedido.estado}</p>
          <Button className='btnEntregado' onClick={eliminarPedido}>MARCAR ENTREGADO</Button>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    );
};

export default ItemPedido;