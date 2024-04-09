import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useState } from "react"; 
import "../../../styles/Inicio.css"

const Inicio = () => {
  const [productos, setProductos] = useState([]);

 

  return (
    <section className="mainSection">
     <div className="contBanner"> <img
        className="banner"
        src="/src/assets/bannerFF.jpg"
        alt="fondo comida"
      />
      </div>
      <Container className="mt-5">
        <h1 className="display-4 text-warning">Nuestros Productos</h1>
        <hr />
    
          <Row> 
            <CardProducto>

            </CardProducto>
          </Row>
       
      </Container>
    </section>
  );
};

export default Inicio;
