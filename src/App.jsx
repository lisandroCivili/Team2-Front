import React, { useEffect } from "react";
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
import Carrito from "./components/pages/pedidos/Carrito.jsx";
import DetalleProducto from "./components/pages/productos/DetalleProducto.jsx";
import RutasProtegidas from "./components/routes/RutasProtegidas.jsx";
import RutasAdmin from "./components/routes/RutasAdmin.jsx";
import Usuarios from "./components/pages/usuarios/Usuarios.jsx";
import AcercaDe from "./components/pages/AcercaDe.jsx";
import Error404 from "./components/pages/Error404.jsx";

function App() {

  return <BrowserRouter>
    <Menu/>
      <Routes>
          <Route exact path="/" element={<Inicio/>}></Route>
          <Route path="/detalleproducto/:id" element={<DetalleProducto/>} ></Route>
          <Route exact path="/registro" element={<Registro/>}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/nosotros" element={<AcercaDe/>}></Route>
          <Route exact path="/error404" element={<Error404/>}></Route>
          <Route exact path="/carrito" element={<Carrito/>}></Route>
          <Route exact path="/listaUsuarios" element={<Usuarios/>}></Route>
          <Route exact path="/administrador/*" element={
            <RutasProtegidas>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>
          }></Route>
         
      </Routes>
      <Footer />
    </BrowserRouter>
}

export default App;