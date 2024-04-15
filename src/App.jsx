
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
import Carrito from "./components/pages/pedidos/Carrito.jsx";
import DetalleProducto from "./components/pages/productos/DetalleProducto.jsx";
import RutasProtegidas from "./components/routes/RutasProtegidas.jsx";
import RutasAdmin from "./components/routes/RutasAdmin.jsx";



function App() {

  const usuario = JSON.parse(sessionStorage.getItem("usuario")) || "";
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario);


  return <BrowserRouter>
    <Menu usuarioLogeado={usuarioLogeado} setUsuarioLogeado={setUsuarioLogeado}/>
      <Routes>
          <Route exact path="/" element={<Inicio/>}></Route>
          <Route path="/detalleproducto/:id" element={<DetalleProducto/>} ></Route>
          <Route exact path="/registro" element={<Registro/>}></Route>
          <Route exact path="/login" element={<Login setUsuarioLogeado={setUsuarioLogeado}/>}></Route>
          <Route exact path="/carrito" element={<Carrito/>}></Route>
          <Route exact path="/administrador/*" element={
            <RutasProtegidas>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>
          }></Route>
         
      </Routes>
    <Footer/>
    </BrowserRouter>
}

export default App;
