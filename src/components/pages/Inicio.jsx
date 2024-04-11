import { Container, Row } from "react-bootstrap";
import CardProducto from "./productos/CardProducto";
import { useState } from "react"; 
import banner from "../../assets/banner.png"
import bannerSmall from "../../assets/bannerSmall.png"
import "../../../styles/Inicio.css"

const Inicio = () => {
  const [productos, setProductos] = useState([]);

 

  return (
    <section className="mainSection">
     <div className="contBanner"> <img
        className="banner"
        src={banner}
        alt="fondo comida"
      />
      </div>
     <div className="contBannerSmall"> <img
        className="bannerSmall"
        src={bannerSmall}
        alt="fondo comida"
      />
      </div>
      <Container className="mt-5">
        <h1 className="display-4">Nuestros Productos</h1>
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
