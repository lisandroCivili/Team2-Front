import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useState } from "react"; // Quitamos useEffect porque no estamos usando leerProductos
import "../../../styles/Inicio.css"
const Inicio = () => {
  const [productos, setProductos] = useState([]);

  // useEffect(()=>{ // Comentamos temporalmente la llamada a obtenerProductos
  //   obtenerProductos();
  // }, []);

  // const obtenerProductos = async()=>{ // Comentamos temporalmente la función obtenerProductos
  //   const respuesta = await leerProductos();
  //   if(respuesta.status === 200){
  //     const datos = await respuesta.json();
  //     setProductos(datos);
  //   }else{
  //     //mostrar un mensaje de error al usuario
  //   }
  // }

  return (
    <section className="mainSection">
     <div className="contBanner"> <img
        className="banner"
        src="/src/assets/bannerFF.jpg"
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
