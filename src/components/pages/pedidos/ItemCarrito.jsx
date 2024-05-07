import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSync,
  faTrash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ItemCarrito = ({producto, eliminarDelCarrito,setCantidades}) => {

  const [cantidad, setCantidad] = useState(1);
  const [precioTotalIndividual, setPrecioTotalIndividual] = useState(producto.precio * cantidad);

  const handleEliminar = () => {
    eliminarDelCarrito(producto._id);
  };

  const handleCantidadProductos = (e) => {
    let nuevaCantidad = parseInt(e.target.value);
    if (nuevaCantidad < 1) {
      nuevaCantidad = 1; 
    }
    if (nuevaCantidad > 5) {
      nuevaCantidad = 5
      Swal.fire("¡Maximo 5 por cada producto!");
    }
    setCantidad(nuevaCantidad);
    setCantidades(nuevaCantidad)
    setPrecioTotalIndividual(producto.precio * nuevaCantidad);

  };
  useEffect(()=>{
    const productoActualizado = { ...producto, cantidad: cantidad };
    const carritoActualizado = JSON.parse(
      sessionStorage.getItem("carrito") || "[]"
    ).map((item) =>
      item._id === producto._id ? productoActualizado : item
    );
    sessionStorage.setItem("carrito", JSON.stringify(carritoActualizado));

  }, [cantidad])

  return (
    <tr>
      <td data-th="Producto">
        <div className="row">
          <div className="col-md-3 text-left">
            <img
              src={producto.imagen}
              alt={producto.nombreProducto}
              className=" d-none d-md-block rounded mb-2 shadow "
            />
          </div>
          <div className="col-md-9 text-center ">
            <h3>{producto.nombreProducto}</h3>
          </div>
        </div>
      </td>
      <td data-th="Precio" className="h4">
        ${precioTotalIndividual}
      </td>
      <td data-th="Quantity">
        <input
          type="number"
          className="form-control form-control-lg text-center"
          onChange={handleCantidadProductos}
          value={cantidad}
        />
      </td>
      <td className="cantidad" data-th="">
        <div className="text-right">
          <button
            className="btn btn-white border-secondary bg-danger btn-md mb-1"
            onClick={handleEliminar}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ItemCarrito;
