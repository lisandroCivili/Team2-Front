import '../../../styles/menu.css'
import { Navbar, Nav, Container} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {

    return (
      <Navbar expand="lg" className="navbar">
        <Container className="">
          {/* <Navbar.Brand>
            <img
              className="img-fluid"
              width={50}
            />
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav">
              <NavLink end className='nav-link' id="inicioBoton" to="/">INICIO</NavLink>
              <NavLink end className='nav-link' id="registroBoton" to="/registro">REGISTRO</NavLink>

                <NavLink end className="nav-link" id="adminBoton" to="/administrador">
                  ADMINISTRADOR
                </NavLink>
                <NavLink end className="nav-link" id="carritoBoton" to="/carrito">
                  CARRITO
                </NavLink>
                <NavLink variant="link" id="logoutBoton" className="nav-link">
                  LOGOUT
                </NavLink>

              <NavLink end className="nav-link" id="loginBoton" to="/login">
                LOGIN
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default Menu;

