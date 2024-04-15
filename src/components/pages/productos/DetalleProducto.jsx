import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { obtenerProducto } from "../../../helpers/queries";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({})

  useEffect(() => {
      cargarProducto();
  }, []);


  const cargarProducto = async()=>{
 
    const respuesta = await obtenerProducto(id)
    if(respuesta.status === 200){
      setProducto(await respuesta.json());
    }
  }

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
            className="card-img-top-nueva"
              src={producto.imagen}
              alt={producto.nombreProducto}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">{producto.nombreProducto}</Card.Title>
              <hr />
              <Card.Text>
              {producto.detalle}
              <br/>
              <span className="primary-font fw-semibold ">Categoria:</span> {producto.categoria}
              <br className='mb-3'/>
              <span className="primary-font fw-semibold ">Precio: ${producto.precio}</span></Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

 export default DetalleProducto;



