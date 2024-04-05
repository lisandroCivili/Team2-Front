import { Navbar, Nav, Container, Button } from "react-bootstrap";
import '../../../styles/menu.css'

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
              <Button end className='nav-link'>INICIO</Button>
              <Button end className='nav-link'>REGISTRO</Button>

                <Button end className="nav-link">
                  ADMINISTRADOR
                </Button>
                <Button variant="link" className="nav-link">
                  LOGOUT
                </Button>

              <Button end className="nav-link">
                LOGIN
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default Menu;