import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CardProducto = ({ producto, agregarAlCarrito }) => {
  const sesion = JSON.parse(sessionStorage.getItem("usuario")) || [];
  
  const guardarSessionStorage = () => {
    let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
    const productoExistente = carrito.find(item => item._id === producto._id);
    if (sesion.length === 0) {
      Swal.fire("!Inicie sesion o registrese para agregar productos!");
      if (productoExistente) {
        Swal.fire("!Este producto ya se encuentra en su carrito!");
      }
    }else{

      agregarAlCarrito(producto);
  
        Swal.fire({
        text:`Se agregó ${producto.nombreProducto} al carrito.`,
        imageUrl: `${producto.imagen}`,
        imageHeight: 150,
        imageWidth: 200,
        imageAlt: `${producto.nombreProducto}`
      });
    }
    
  };

  return (
    <Col sm={2} xl={4} md={4} className="mb-3">
      <Card id="cardProductos">
        <div>
          <img className="card-img-top-nueva" src={producto.imagen} alt={producto.nombreProducto} />
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
            <Button className="btn" as={Link} to={`/DetalleProducto/${producto._id}`}>
              Ver más
            </Button>
            <Button className="btn" onClick={guardarSessionStorage}>
              <i className="bi bi-cart-plus-fill"></i>
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;

