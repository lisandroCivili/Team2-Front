import '../../../../styles/carrito.css'
import "../../../../styles/App.css"
import React, { useEffect, useState } from 'react';
import ItemCarrito from './ItemCarrito';
import Swal from 'sweetalert2';
import { crearPedido } from '../../../helpers/queries';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';


const Carrito = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  useEffect(() => {
    const carritoDeStorage = JSON.parse(sessionStorage.getItem("carrito")) || [];
    setProductosEnCarrito(carritoDeStorage);
  }, []);

  const eliminarDelCarrito = (id) => {
    Swal.fire({
      title: `¿Dese eliminar este producto de su carrito?`,
      showDenyButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        const carritoActualizado = productosEnCarrito.filter(producto => producto._id !== id);
        sessionStorage.setItem("carrito", JSON.stringify(carritoActualizado));
        
        setProductosEnCarrito(carritoActualizado);
    }
  });
}

     

    return (
        <section className="pt-5 pb-5">
            <div className="container">
                <div className="row w-100">
                    <div className="col-lg-12 col-md-12 col-12" >
                        <table id="table1" className=" table  table-responsive " >
                            <thead>
                                <tr>
                                    <th id='th1'>Producto</th>
                                    <th id='th2'>Precio</th>
                                    <th id='th3'>Cantidad</th>
                                    <th id='th4'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productosEnCarrito.map(producto => <ItemCarrito key={producto._id} producto={producto} eliminarDelCarrito={eliminarDelCarrito}/>)
                                }
                            </tbody>
                        </table>
                      
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carrito ;
