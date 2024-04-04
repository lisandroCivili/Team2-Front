import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../../assets/coffee_Logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Menu = () => {
  

  return (
    <Navbar expand="lg" className="bg-body-danger">
      <Container>
        <Navbar.Brand>
          <img
            
            
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link">
              Inicio
            </NavLink>
            <NavLink end className="nav-link">
              Registro
            </NavLink>
            
              <>
                <NavLink end className="nav-link" >
                  Administrador
                </NavLink>
                <Button variant="link" className="nav-link" >
                  logout
                </Button>
              </>
           
              <NavLink end className="nav-link" >
                Login
              </NavLink>
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
