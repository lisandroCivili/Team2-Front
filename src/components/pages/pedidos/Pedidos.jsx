import '../../../../styles/administrador.css'
import { Button, Container, Row, Col,Form } from "react-bootstrap";

const Pedidos = () => {
    return (
        <Container>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Listado de pedidos</h1>
      <Button className="btn btn-success float-end">
          <i className="bi bi-plus-circle"></i>
      </Button>
      </div>
      <hr />
      <div className='contenedor-filas'>
        <Row className='filas'>
            <Col sm={3} className="columna border border-success p-3 text-center fs-4">Usuario</Col>
            <Col sm={3} className="columna border-top border-bottom border-success p-3 text-center fs-4">Fecha</Col>
            <Col sm={3} className="columna border border-success p-3 text-center fs-4">Productos</Col>
            <Col sm={3} className="columna border border-success p-3 text-center fs-4">Estado</Col>
        </Row>
        <Row className='filas'>
            <Col sm={3} className="columna border-bottom border-success p-2 text-center">Estado</Col>
            <Col sm={3} className="columna border-bottom border-success p-2 text-center">Precio</Col>
            <Col sm={3} className="columna border-bottom border-success p-2 text-center">Categoria</Col>
            <Col sm={3} className="columna border border-top-0 border-success p-2 text-center">
                <Form>
                  <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        
      />
                </Form>
            </Col>
        </Row>
        <Row className='filas'>
            <Col sm={3} className="columna border-bottom border-success p-2 text-center">Estado</Col>
            <Col sm={3} className="columna border-bottom border-success p-2 text-center">Precio</Col>
            <Col sm={3} className="columna border-bottom border-success p-2 text-center">Categoria</Col>
            <Col sm={3} className="columna border border-top-0 border-success p-2 text-center">
                <Form>
                  <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        
      />
                </Form>
            </Col>
        </Row>
        <Row className='filas'>
            <Col sm={3} className="columna border-bottom border-success p-2 text-center">Estado</Col>
            <Col sm={3} className="columna border-bottom border-success p-2 text-center">Precio</Col>
            <Col sm={3} className="columna border-bottom border-success p-2 text-center">Categoria</Col>
            <Col sm={3} className="columna border border-top-0 border-success p-2 text-center">
                <Form>
                  <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        
      />
                </Form>
            </Col>
        </Row>
        <Row className='filas'>
            <Col sm={3} className="columna border-bottom border-success p-2 text-center">Estado</Col>
            <Col sm={3} className="columna border-bottom border-success p-2 text-center">Precio</Col>
            <Col sm={3} className="columna border-bottom border-success p-2 text-center">Categoria</Col>
            <Col sm={3} className="columna border border-top-0 border-success p-2 text-center">
                <Form>
                  <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        
      />
                </Form>
            </Col>
        </Row>
       
      </div>
    </Container>
    );
};

export default Pedidos;