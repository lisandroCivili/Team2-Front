import "../../../styles/menu.css";
import { Navbar, Nav, Container, NavDropdown, Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

const Menu = () => {
  const navegacion = useNavigate();
  const [estaLogeado, setEstaLogeado] = useState(false);

  const usuario = JSON.parse(sessionStorage.getItem("usuario")) || "";
  let usuarioCorrecto = true;
  if (!usuario) {
    usuarioCorrecto = false;
  }

  useEffect(() => {
    setEstaLogeado(usuario);
  }, [usuarioCorrecto]);

  const logout = () => {
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("carrito");
    setUsuarioLogeado(false);
    navegacion("/login");
  };
  return (
    <Navbar expand="md" className="navbar">
      <Container className="contBotones">
        <Navbar.Brand as={Link} to="/" href="#home">
          <img
            src={logo}
            className="d-inline-block align-top logoMenu"
            alt="Flash Food logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navCollapseBotones">
          <Nav className="me-auto navContBotones" id="nav">
            <div className="botonesIzq">
              <NavLink className="nav-link" id="inicioBoton" to="/">
              <i className="bi bi-house-door-fill iconoInicio"></i>
              </NavLink>
              {estaLogeado && estaLogeado.rol === "Admin" ? (
                <Dropdown as={ButtonGroup}>
                <NavLink id="adminBoton" to="/administrador">Administración</NavLink>
          
                <Dropdown.Toggle split id="dropdown-split-basic" className="flechaDropdown"/>
          
                <Dropdown.Menu className="desplegable">
                  <Dropdown.Item href="#/action-1">Productos</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Pedidos pendientes</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Lista usuarios</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              ) : (
                <></>
              )}
            </div>  
            {!estaLogeado ? (
              <>
                <NavLink className="nav-link" id="loginBoton" to="/login">
                  Ingresar
                </NavLink>
                <NavLink className="nav-link" id="registroBoton" to="/registro">
                  Registrarse
                </NavLink>
              </>
            ) : (
              <div className="botonesDer">
                <NavLink className="nav-link" id="carritoBoton" to="/carrito">
                  <i className="bi bi-cart-fill iconoCarrito"></i>
                </NavLink>
                <NavLink className="nav-link" id="logoutBoton" onClick={logout}>
                  <i alt="Cerrar Sesion" className="bi bi-box-arrow-right iconoCerrarSesion"></i>
                </NavLink>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
