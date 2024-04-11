import { Navbar, Nav, Container} from "react-bootstrap";
import '../../../styles/menu.css'
import { NavLink } from "react-router-dom";

const Menu = () => {

    return (
      <Navbar expand="lg" className="navbar">
        <Container className="d-flex flex-column">
          {/* <Navbar.Brand>
            <img
              className="img-fluid"
              width={50}
            />
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav">
              <NavLink end className='nav-link' to="/">INICIO</NavLink>
              <NavLink end className='nav-link' to="/registro">REGISTRO</NavLink>

                <NavLink end className="nav-link" to="/administrador">
                  ADMINISTRADOR
                </NavLink>
                <NavLink variant="link" className="nav-link">
                  LOGOUT
                </NavLink>

              <NavLink end className="nav-link" to="/login">
                LOGIN
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default Menu;

