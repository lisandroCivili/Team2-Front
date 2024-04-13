
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "../styles/App.css"
import "../styles/menu.css"
import { useState } from 'react'
import Menu from './components/common/Menu.jsx';
import Footer from './components/common/Footer.jsx';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Inicio from "./components/pages/Inicio.jsx";
import Registro from "./components/pages/usuarios/Registro.jsx";
import Login from "./components/pages/usuarios/Login.jsx";
import Administrador from "./components/pages/productos/Administrador.jsx";
import FormularioProducto from "./components/pages/productos/FormularioProducto.jsx";
import Error404 from "./components/pages/Error404.jsx";
import Carrito from "./components/pages/pedidos/Carrito.jsx";



function App() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
          <Route exact path="/" element={<Inicio/>}></Route>
          <Route exact path="/registro" element={<Registro/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/administrador" element={<Administrador/>}></Route>
          <Route exact path="/administrador/agregarProducto" element={<FormularioProducto editando={false} titulo='Nuevo producto' botonFinal='Agregar'/>}></Route>
          <Route exact path="/administrador/editarProducto/:id" element={<FormularioProducto editando={true} titulo='Editar producto' botonFinal='Editar'/>}></Route>
          <Route exact path="/carrito" element={<Carrito/>}></Route>
          <Route exact path="*" element={<Error404/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
