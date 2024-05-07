import "../../../../styles/carrito.css";
import "../../../../styles/App.css";
import React, { useEffect, useState } from "react";
import ItemCarrito from "./ItemCarrito";
import Swal from "sweetalert2";
import carritoVacio from "../../../assets/carrito-vacio.webp";
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";


const Carrito = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const [cantidades, setCantidades] = useState(0)
  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
  const carritoDeStorage = JSON.parse(sessionStorage.getItem("carrito")) || [];
  setProductosEnCarrito(carritoDeStorage);
}, [cantidades]);

useEffect(() => {
  const total = productosEnCarrito.reduce((total, producto) => {
    return total + (producto.precio * producto.cantidad);
  }, 0);
  setPrecioTotal(total);
}, [productosEnCarrito]);

  const actualizarPrecioTotal = (carritoActualizado) => {
    const total = carritoActualizado.reduce((total, producto) => {
      return total + (producto.precio * producto.cantidad);
    }, 0);
    setPrecioTotal(total);
  };

  const eliminarDelCarrito = (id) => {
    Swal.fire({
      title: `¿Desea eliminar este producto de su carrito?`,
      showDenyButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        const carritoActualizado = productosEnCarrito.filter(
          (producto) => producto._id !== id
        );
        sessionStorage.setItem("carrito", JSON.stringify(carritoActualizado));
        setProductosEnCarrito(carritoActualizado);
        actualizarPrecioTotal(carritoActualizado);
      }
    });
  };

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-12 col-md-12 col-12">
            {productosEnCarrito.length === 0 ? (
              <div className="carritoVacio">
                <img src={carritoVacio} alt="" />
                <p>Todavía no tiene ningún pedido!</p>
                <NavLink className="volverAInicio" to="/">
                  Ir a agregar productos
                </NavLink>
              </div>
            ) : (
              <div>
                <table id="table1" className="table table-responsive">
                  <thead>
                    <tr>
                      <th id="th1">Producto</th>
                      <th id="th2">Precio</th>
                      <th id="th3">Cantidad</th>
                      <th id="th4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {productosEnCarrito.map((producto) => (
                      <ItemCarrito
                        key={producto._id}
                        producto={producto}
                        eliminarDelCarrito={eliminarDelCarrito}
                        setCantidades={setCantidades}
                      />
                    ))}
                  </tbody>
                </table>
                <div className="precioTotal">
                  <Button className="h-75 finalizarCompra">Finalizar compra</Button>
                  <p className="precio">Precio Total: ${precioTotal}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carrito;
