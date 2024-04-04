import { Navbar, Nav, Container, Button } from "react-bootstrap";


const Menu = () => {

    return (
      <Navbar expand="lg" className="bg-body-secondary">
        <Container>
          <Navbar.Brand>
            <img
              className="img-fluid"
              width={50}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button end className='nav-link'>Inicio</Button>
              <Button end className='nav-link'>Registro</Button>

                <Button end className="nav-link">
                  Administrador
                </Button>
                <Button variant="link" className="nav-link">
                  Logout
                </Button>

              <Button end className="nav-link">
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default Menu;