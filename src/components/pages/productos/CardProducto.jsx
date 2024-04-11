import { Col, Card, Button } from "react-bootstrap";

const CardProducto = ({producto}) => {
  return (
    <Col sm={2} xl={4} md={4}className="mb-3">
      <Card id="cardProductos">
        <div>
          <img className="card-img-top-nueva" src={producto.imagen}/>
        </div>
        <Card.Body id="cardBody">
          <Card.Title id="cardTitulo">{producto.nombreProducto}</Card.Title>
          <Card.Text id="cardCategoria">
            <span>{producto.categoria}</span>
          </Card.Text>
          <Card.Text id="cardPrecio">
            <span className="fw-bold">Precio: ${producto.precio}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <div className="d-flex gap-2 justify-content-center">
            <Button className="btn">Ver más</Button>
            <Button className="btn"><i class="bi bi-cart-plus-fill"></i></Button>      
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
