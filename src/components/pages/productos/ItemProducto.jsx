import { Button, Container, Row, Col,Form } from "react-bootstrap";

const ItemProducto = ({producto}) => {
    return (
        <Row className='filas'>
            <Col sm={2} className="columna border-bottom border-success p-2 d-flex align-items-center justify-content-center">{producto.nombreProducto}</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 d-flex align-items-center justify-content-center">Estado</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 d-flex align-items-center justify-content-center">{producto.precio}</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 d-flex align-items-center justify-content-center">{producto.categoria}</Col>
            <Col sm={2} className="columna border-bottom border-success p-2 d-flex align-items-center justify-content-center"><img src={producto.imagen} alt="" className="imgAmdin"/></Col>
            <Col sm={2} className="columna border border-top-0 border-success p-2 d-flex align-items-center justify-content-center">
                <Button className='btn btn-warning me-4'>
                    <i className="bi bi-pencil-square"></i>
                </Button>
                <Button className='btn btn-danger'>
                    <i className="bi bi-trash"></i>
                </Button>
            </Col>
        </Row>
    );
};

export default ItemProducto;