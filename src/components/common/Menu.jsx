import "../../../styles/menu.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

const Menu = ({ usuarioLogeado, setUsuarioLogeado }) => {
  const navegacion = useNavigate();
  const [estaLogeado, setEstaLogeado] = useState(false);
  useEffect(() => {
    setEstaLogeado(usuarioLogeado !== null && usuarioLogeado !== "");
  }, [usuarioLogeado]);
  
  const logout = () => {
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("carrito")
    setUsuarioLogeado("");
    navegacion("/");
  };
  return (
    <Navbar expand="md" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className="d-inline-block align-top logoMenu"
            alt="Flash Food logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="nav">
            <NavLink className="nav-link" id="inicioBoton" to="/">
              INICIO
            </NavLink>
            {!estaLogeado ? (
              <>
                <NavLink className="nav-link" id="loginBoton" to="/login">
                  LOGIN
                </NavLink>
                <NavLink className="nav-link" id="registroBoton" to="/registro">
                  REGISTRARSE
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="nav-link" id="logoutBoton" onClick={logout}>
                  LOGOUT
                </NavLink>
                <NavLink className="nav-link" id="carritoBoton" to="/carrito">
                  <i className="bi bi-cart-fill"></i>
                </NavLink>
              </>
            )}
            {!estaLogeado && usuarioLogeado.rol === "Admin" ? (
              <NavDropdown
                title="ADMINISTRADOR"
                className="adminBoton nav-link"
              >
                <NavDropdown.Item as={Link} to={"/administrador"}>
                  Productos  
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <></>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
