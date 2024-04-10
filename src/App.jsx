
import { useState } from 'react'
import Login from './components/Login';
import Registro from './components/Registro';
import "bootstrap-icons/font/bootstrap-icons.min.css";
import React from "react";
import Inicio from "./components/common/pages/Inicio";
import Error404 from "./components/./common/pages/Error404";
import AcercaDe from "./components/common/pages/AcercaDe";
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Menu from './components/common/Menu'
import Footer from './components/common/Footer'
import Pedidos from './components/pages/pedidos/Pedidos.jsx'
import Usuarios from "./components/pages/usuarios/Usuarios.jsx";
import Administrador from "./components/pages/productos/Administrador.jsx";
import FormularioProducto from "./components/pages/productos/FormularioProducto.jsx";
import DetalleProducto from "./components/pages/productos/DetalleProducto.jsx";
import Carrito from "./components/pages/pedidos/carrito.jsx";
import "../styles/App.css"


function App() {
  return (
    <>
      <Menu></Menu>
      <Carrito></Carrito>
      <Footer></Footer>
    </>
  );
}

export default App;
