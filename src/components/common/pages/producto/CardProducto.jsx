import { Col, Card, Button } from "react-bootstrap";


const CardProducto = () => {
 
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img className="card-img-top-nueva" />
        </div>
        <Card.Body>
        <Card.Title className="primary-font">nombreproducto</Card.Title>
        <Card.Text>
          Descripción: pp<br className="mb-2"/> 
          <span className="fw-bold">Precio: $pprecio</span></Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
        <Button className='btn btn-success me-2' >Ver más</Button>
      </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;