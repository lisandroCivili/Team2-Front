import React from 'react';
import Administrador from "../../components/pages/productos/Administrador";
import FormularioProducto from "../pages/productos/FormularioProducto"
import { Route, Routes } from 'react-router-dom';

const RutasAdmin = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Administrador/>}/>
            <Route exact path="/agregarProducto" element={<FormularioProducto editando={false} titulo='Nuevo producto' botonFinal='Agregar'/>}></Route>
            <Route exact path="/editarProducto/:id" element={<FormularioProducto editando={true} titulo='Editar producto' botonFinal='Editar'/>}></Route>

        </Routes>
    );
};

export default RutasAdmin;