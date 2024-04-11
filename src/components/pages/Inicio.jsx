import { Container, Row } from "react-bootstrap";
import CardProducto from "./productos/CardProducto";
import { useEffect, useState } from "react"; 
import banner from "../../assets/banner.webp"
import bannerSmall from "../../assets/bannerSmall.png"
import "../../../styles/Inicio.css"
import { leerProductos } from "../../helpers/queries";

const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    recibirProductos()
  },[])

  const recibirProductos = async()=>{
    const respuesta = await leerProductos()
    if (respuesta.status === 200 ) {
      const datos = await respuesta.json()
      setProductos(datos)
    }else{
    console.log('No se encontraron productos')
  }
}
 

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
      <Container className="mt-5 text-center">
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
    
          <Row> 
            {
            productos.map((producto)=><CardProducto key={producto.id} producto={producto}/>)
            }
          </Row>
       
      </Container>
    </section>
  );
};


export default Inicio;
