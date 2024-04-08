import '../../../../styles/Administrador.css'
import { Button, Container, Row, Col,Form } from "react-bootstrap";

const Usuarios = () => {

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">Listado de usuarios</h1>
      <Button className="btn btnAgregar float-end">
          <i className="bi bi-plus-circle"></i>
      </Button>
      </div>
      <hr />
      <div className='contenedor-filas'>
        <Row className='filas'>
            <Col sm={2} className="columna border border-success p-3 text-center fs-4">Nombre</Col>
            <Col sm={2} className="columna border-top border-bottom border-success p-3 text-center fs-4">Email</Col>
            <Col sm={2} className="columna border border-success p-3 text-center fs-4">Password</Col>
            <Col sm={2} className="columna border-top border-bottom border-success p-3 text-center fs-4">Perfil</Col>
            <Col sm={2} className="columna border border-success p-3 text-center fs-4">Estado</Col>
        </Row>
        <Row className='filas'>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Papas</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Estado</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Precio</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Categoria</Col>
            <Col sm={2} className="columna border border-top-0 border-success p-2 text-center">
                <Form>
                  <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        
      />
                </Form>
            </Col>
        </Row>
        <Row className='filas'>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Hamburguesa</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Estado</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Precio</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Categoria</Col>
            <Col sm={2} className="columna border border-top-0 border-success p-2 text-center">
                <Form>
                  <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        
      />
                </Form>
            </Col>
        </Row>
        <Row className='filas'>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Panchos</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Estado</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Precio</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Categoria</Col>
            <Col sm={2} className="columna border border-top-0 border-success p-2 text-center">
                <Form>
                  <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        
      />
                </Form>
            </Col>
        </Row>
        <Row className='filas'>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Patas</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Estado</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Precio</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 text-center">Categoria</Col>
            <Col sm={2} className="columna border border-top-0 border-success p-2 text-center">
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

export default Usuarios;
