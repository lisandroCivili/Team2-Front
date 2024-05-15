import React from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import '../../../../styles/Administrador.css'
const ItemPedido = ({pedido}) => {
    return (
      <Col sm={2} xl={4} md={4} className="mb-3">
      <Card id="cardProductos">
        <div>
          <img className="card-img-top-nueva" src={pedido.productos[0].imagen} alt={pedido.nombreProducto} />
        </div>
        <Card.Body id="cardBody">
          <Card.Title className="etiqueta">PRODUCTO: <span className='titulo'>{pedido.productos[0].nombreProducto}</span> </Card.Title>
          <Card.Text className="etiqueta">
          PRECIO: <span className="titulo">${pedido.precioTotal}</span>
          </Card.Text>
          <Card.Text className="etiqueta">
          E-MAIL: <span className="titulo">{pedido.email}</span>
          </Card.Text>
          <Card.Text className="etiqueta">
          ESTADO: <span className="titulo">{pedido.estado}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <div className="d-flex gap-2 justify-content-center">
            <Button className="btn">
              Marcar como entregado
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
    );
};

export default ItemPedido;