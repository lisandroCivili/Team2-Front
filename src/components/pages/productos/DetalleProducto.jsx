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

  // const cargarProducto = async () => {
  //   const respuesta = await obtenerProducto(id);
  //   if (respuesta.status === 200) {
  //     //extraer el producto de la respuesta
  //     const productoBuscado = await respuesta.json();
  //     setProducto(productoBuscado)
  //   }
  // };
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






// import { useEffect, useState } from "react";
// import { Container, Card, Row, Col } from "react-bootstrap";
// import { obtenerProducto } from "../../../helpers/queries";
// import { useParams } from "react-router-dom";

// const DetalleProducto = () => {
//   const { id } = useParams();
//   const [producto, setProducto] = useState({});
  
//   useEffect(() => {
//     const cargarProducto = async () => {
//       try {
//         const respuesta = await obtenerProducto(id);
//         if (respuesta.status === 200) {
//           const productoBuscado = await respuesta.json();
//           setProducto(productoBuscado);
//           console.log("Matias")
//         } else {
//           // Manejo de errores si la solicitud no es exitosa
//           console.error("Error al cargar el producto");
//         }
//       } catch (error) {
//         // Manejo de errores si hay un error en la solicitud
//         console.error("Error al cargar el producto:", error);
//       }
//     };

//     cargarProducto();
//   }, [id]);

//   return (
//     <Container className="my-3 mainSection">
//       <Card>
//         <Row>
//           <Col md={6}>
//             <Card.Img
//               variant="top"
//               src={producto.imagen}
//               alt={producto.nombreProducto}
//             />
//           </Col>
//           <Col md={6}>
//             <Card.Body>
//               <Card.Title className="primary-font">{producto.nombreProducto}</Card.Title>
//               <hr />
//               <Card.Text>
//                 {producto.descripcion_amplia}
//                 <br />
//                 <span className="primary-font fw-semibold">Categoría:</span> {producto.categoria}
//                 <br className='mb-3'/>
//                 <span className="primary-font fw-semibold">Precio: ${producto.precio}</span>
//               </Card.Text>
//             </Card.Body>
//           </Col>
//         </Row>
//       </Card>
//     </Container>
//   );
// };

// export default DetalleProducto;
