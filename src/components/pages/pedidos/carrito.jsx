import '../../../../styles/carrito.css'
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSync, faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "../../../../styles/App.css"


const Carrito = () => {
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
                                {/* Repeat this block for each product */}
                                <tr>
                                    <td data-th="Producto">
                                        <div className="row">
                                            <div className="col-md-3 text-left">
                                                <img src="https://images.pexels.com/photos/13998632/pexels-photo-13998632.jpeg" alt="" className=" d-none d-md-block rounded mb-2 shadow " />
                                            </div>
                                            <div className="col-md-9 text-center ">
                                                <h3>Papas fritas</h3>
                                               
                                            </div>
                                        </div>
                                    </td>
                                    <td data-th="Precio" className='h4 '>$49.00</td>
                                    <td data-th="Quantity">
                                        <input type="number" className="form-control form-control-lg text-center"  />
                                    </td>
                                    <td className="cantidad" data-th="">
                                        <div className="text-right">
                                            
                                            <button className="btn btn-white border-secondary bg-danger btn-md mb-1">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* End of block */}
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
