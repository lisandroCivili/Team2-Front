import "../../../../styles/carrito.css";
import "../../../../styles/App.css";
import React, { useEffect, useState } from "react";
import ItemCarrito from "./ItemCarrito";
import Swal from "sweetalert2";
import carritoVacio from "../../../assets/carrito-vacio.webp";
import { Button, Form } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { crearPedido } from "../../../helpers/queries";
import { useForm } from "react-hook-form";

const Carrito = () => {

  const navegacion = useNavigate();

  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const [cantidades, setCantidades] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [usuario, setUsuario] = useState({})

  useEffect(() => {
    const carritoDeStorage =
      JSON.parse(sessionStorage.getItem("carrito")) || [];
    setProductosEnCarrito(carritoDeStorage);
    const usuarioLogeado =
      JSON.parse(sessionStorage.getItem("usuario")) || [];
    setUsuario(usuarioLogeado);
  }, [cantidades, precioTotal]);

  useEffect(() => {
    const total = productosEnCarrito.reduce((total, producto) => {
      return total + producto.precio * producto.cantidad;
    }, 0);
    setPrecioTotal(total);
  }, [productosEnCarrito]);

  const actualizarPrecioTotal = (carritoActualizado) => {
    const total = carritoActualizado.reduce((total, producto) => {
      return total + producto.precio * producto.cantidad;
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

 const finalizarCompra = async()=>{
  const pedido = {
    email: usuario.email,
    productos: productosEnCarrito,
    precioTotal: precioTotal,
    estado: "pendiente"
  };

  try {
    const respuesta = await crearPedido(pedido);
    if (respuesta.ok) {
      const data = await respuesta.json(); // Extraer el cuerpo de la respuesta JSON
      Swal.fire('¡Pedido realizado!', `Tu número de pedido es:`, 'success');
      sessionStorage.removeItem('carrito');
      setProductosEnCarrito([]);
      setPrecioTotal(0);
    } else {
      Swal.fire('¡Error!', 'Hubo un problema al procesar tu pedido. Por favor, inténtalo de nuevo más tarde.', 'error');
    }
  } catch (error) {
    console.error('Error al enviar el pedido:', error);
    Swal.fire('¡Error!', 'Hubo un problema al procesar tu pedido. Por favor, inténtalo de nuevo más tarde.', 'error');
  }
 }

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
                  <Button className="h-75 finalizarCompra" onClick={finalizarCompra}>Finalizar compra</Button>
                  <p className="precio">Precio Total: ${precioTotal}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


export default Carrito;
