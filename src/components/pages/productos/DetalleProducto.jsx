import { Container, Card, Row, Col, Button } from "react-bootstrap";

const DetalleProducto = () => {
    return (
        <Container className="my-3 mainSection">
            <Card>
                <Row>
                    <Col md={6}>
                        <Card.Img
                        variant="top"
                        />
                    </Col>
                    <Col md={6}>
                        <Card.Body>
                        <Card.Title className="primary-font">Nombre producto</Card.Title>
                        <hr />
                        <Card.Text>
                        Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion 
                        <br/>
                        <span className="primary-font fw-semibold ">Categoria:</span> Categoria
                        <br className='mb-3'/>
                        <span className="primary-font fw-semibold ">Precio: $$$$$</span></Card.Text>
                        <Button variant="primary">Agregar al carrito</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
    </Container>
    );
};

export default DetalleProducto;