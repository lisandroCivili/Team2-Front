import '../../../../styles/carrito.css'
import "../../../../styles/App.css"
import React, { useEffect, useState } from 'react';
import ItemCarrito from './ItemCarrito';
import Swal from 'sweetalert2';


const Carrito = () => {

    const [productosEnCarrito, setProductosEnCarrito] = useState([]);

    useEffect(()=>{
        const carritoDeStorage = JSON.parse(localStorage.getItem("carrito")) || [];
        setProductosEnCarrito(carritoDeStorage);
        console.log(carritoDeStorage);
    },[])

    const eliminarDelCarrito = (id)=>{
        Swal.fire({
            title: `¿Dese eliminar este producto de su carrito?`,
            showDenyButton: true,
            confirmButtonText: "Eliminar",
            denyButtonText: `Cancelar`
          }).then((result) => {
            if (result.isConfirmed) {

                const carritoActualizado = productosEnCarrito.filter(producto => producto.id !== id);
                localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
                
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
                                    productosEnCarrito.map(producto => <ItemCarrito key={producto.id} producto={producto} eliminarDelCarrito={eliminarDelCarrito}/>)
                                }
                            </tbody>
                        </table>
                      
                    </div>
                </div>
                <div className="row mt-4 d-flex align-items-center">
                    <div className="col-sm-6 order-md-2 text-right">
                        <a href="catalog.html" className="btn btn-primary mb-4 btn-lg pl-5 pr-5">Comprar</a>
                    </div>
                  
                </div>
            </div>
        </section>
    );
}

export default Carrito ;
