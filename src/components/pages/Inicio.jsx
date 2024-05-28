import { Container, Row, Carousel } from "react-bootstrap";
import CardProducto from "./productos/CardProducto";
import { useEffect, useState } from "react";
import bannerPP from "../../assets/bannerPP-min.jpg";
import bannerPapitas from "../../assets/banner_papitas-min.jpg";
import bannerMarca from "../../assets/banner.png"
import sinStock from "../../assets/sin-stock.png"
import "../../../styles/Inicio.css";
import { leerProductos } from "../../helpers/queries";


const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    recibirProductos();
  }, []);

  const recibirProductos = async () => {
    const respuesta = await leerProductos();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setProductos(datos);
    } else {
      throw new Error("No se encontraron productos")
    }
  };

  const agregarAlCarrito = (producto) => {
    
    let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
    carrito.push(producto);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
  };

  return (
    <section className="mainSection">
      <Carousel>
        <Carousel.Item className="first-slide">
          <img
            className="d-block w-100 img-fluid"
            src={bannerMarca}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerPP} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerPapitas}
            alt="Forty slide"
          />
        </Carousel.Item>
      </Carousel>

      <Container className="mt-5 containerMain">
        <div className="intro">
          <h1>BIENVENIDO A FLASH FOOD</h1>
          <p>
            ¿Hambre repentina? ¿Sin ganas de cocinar? ¡Descarga Flash Food y
            disfruta de la comida rápida que te encanta en solo unos clics!
            Olvídate de las filas y la espera. Con Flash Food, pides desde la
            comodidad de tu casa u oficina y recibes tu pedido ¡calentito y
            delicioso!
          </p>
        </div>
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
        {productos.length === 0 ? (
          <div className="sinStock"><img alt="Sin Stock" srcSet={sinStock} /></div>
        ):(
        <Row>
          {productos.map((producto) => (
            <CardProducto
              key={producto._id}
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </Row>

          
        )}
      </Container>
    </section>
  );
};

export default Inicio;
