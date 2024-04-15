import Swal from 'sweetalert2' 
import { Button, Container, Row, Col,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProducto, leerProductos } from "../../../helpers/queries";

const ItemProducto = ({producto, setProductos}) => {

    const eliminarProducto = () =>{
        Swal.fire({
          title: `¿Seguro desea eliminar "${producto.nombreProducto}" de la lista?`,
          text: "¡No se puede revertir esta operación!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, eliminar",
          cancelButtonText: "Cancelar"
        }).then(async(result) => {
          if (result.isConfirmed) {
            const respuesta = await borrarProducto(producto._id)
            if (respuesta.status === 200) {
              Swal.fire({
                title: "Producto eliminado",
                text: `El producto ${producto.nombreProducto} fue eliminado.`,
                icon: "success"
              });
              const productosActualizadosRespuesta = await leerProductos()
              if (productosActualizadosRespuesta.status === 200) {
                const productosActualizados = await productosActualizadosRespuesta.json()
                setProductos(productosActualizados)
              }
            }else{
              Swal.fire({
                title: "Ocurrio un error",
                text: `No se pudo eliminar el producto, intente nuevamente en unos minutos.`,
                icon: "error"
              });
            }
          }
        });
      }

    return (
        <Row className='filas'>
            <Col sm={2} className="columna border-bottom p-2 d-flex align-items-center justify-content-center fs-5">{producto.nombreProducto}</Col>
            <Col sm={2} className="columna border-bottom p-2 d-flex align-items-center justify-content-center fs-5">Estado</Col>
            <Col sm={2} className="columna border-bottom p-2 d-flex align-items-center justify-content-center fs-5">${producto.precio}</Col>
            <Col sm={2} className="columna border-bottom p-2 d-flex align-items-center justify-content-center fs-5">{producto.categoria}</Col>
            <Col sm={2} id='imgColumnaAdmin' className="columna border-bottom p-2 d-flex align-items-center justify-content-center"><img src={producto.imagen} alt="" className="imgAmdin"/></Col>
            <Col sm={2} id='columnaOpciones' className="columna border border-top-0 p-2">
                <Link className='btn editar' to={'/administrador/editarProducto/'+producto._id}>
                    <i className="bi bi-pencil-square"></i>
                </Link>
                <Button className='btn eliminar' onClick={eliminarProducto}>
                    <i className="bi bi-trash"></i>
                </Button>
            </Col>
        </Row>
    );
};

export default ItemProducto;