
import React from "react";
// import "bootstrap-icons/font/bootstrap-icons.min.css";
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


function App() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
          <Route exact path="/" element={<Inicio/>}></Route>
          <Route exact path="/registro" element={<Registro/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/administrador" element={<Administrador/>}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
