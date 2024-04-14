import "../../../styles/menu.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Menu = () => {
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
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" id="nav">
            <NavLink className="nav-link" id="inicioBoton" to="/">
              INICIO
            </NavLink>
            <NavLink className="nav-link" id="registroBoton" to="/registro">
              REGISTRO
            </NavLink>
            {/* <NavLink className="nav-link" id="logoutBoton">
              LOGOUT
            </NavLink> */}
            <NavLink className="nav-link" id="loginBoton" to="/login">
              LOGIN
            </NavLink>
            <NavLink className="nav-link" id="carritoBoton" to="/carrito">
            <i className="bi bi-cart-fill"></i>
            </NavLink>
            {/* <NavDropdown title="ADMINISTRADOR" className="adminBoton nav-link">
              <NavDropdown.Item as={Link} to="/administrador">
                Productos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/error404">
                Pedidos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/error404">
                Usuarios
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
