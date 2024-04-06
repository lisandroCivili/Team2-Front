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
            Descripción: pp
            <br className="mb-2" />
            <span className="fw-bold">Precio: $precio</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <div className="d-grid gap-2">
            <Button className="btn btn-success">Ver más</Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
