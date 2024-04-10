import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../styles/acercade.css'; 

const AcercaDe = () => {
    return (
      <main>
        <Container>
          <Row xs={1} md={2} lg={4} className="filaAcercaDe">
            
            <Col>
              <div className="card">
                <div className="face front">
                  <img src="../../../assets/hombrear.avif" alt="Lisandro" />
                  <h3>Lisandro</h3>
                </div>
                <div className="face back">
                  <h3>Lisandro</h3>
                  <p>Soy Lisandro, estudiante de programación en Rolling Code</p>
                  <div className="link">
                    <a href="#">Detalles</a>
                  </div>
                </div>
              </div>
            </Col>
          
            <Col>
              <div className="card">
                <div className="face front">
                  <img src="../../../assets/hombre-joven-barba-telefono-inteligente_25030-29860.jpg" alt="Pablo" />
                  <h3>Pablo</h3>
                </div>
                <div className="face back">
                  <h3>Pablo</h3>
                  <p>Soy Pablo, estudiante de programación en Rolling Code</p>
                  <div className="link">
                    <a href="#">Detalles</a>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col>
              <div className="card">
                <div className="face front">
                  <img src="../img/mujer-joven-blanco_25030-39547.avif" alt="Cynthia Ortiz" />
                  <h3>Cynthia </h3>
                </div>
                <div className="face back">
                  <h3>Cynthia </h3>
                  <p>Soy Cynthia , estudiante de programación, con esta página de películas concluimos el módulo 2 del curso full stack.</p>
                  <div className="link">
                    <a href="#">Detalles</a>
                  </div>
                </div>
              </div>
            </Col>
           
  
            <Col>
              <div className="card">
                <div className="face front">
                  <img src="../img/hombresanbarba.jpeg" alt="Ramiro" />
                  <h3>Ramiro</h3>
                </div>
                <div className="face back">
                  <h3>Ramiro</h3>
                  <p>Soy Ramiro, estudiante de programación, con esta página de películas concluimos el módulo 2 del curso full stack.</p>
                  <div className="link">
                    <a href="#">Detalles</a>
                  </div>
                </div>
              </div>
            </Col>
            {/* Fin del cuarto bloque */}
          </Row>
        </Container>
      </main>
    );
  };
  
  export default AcercaDe;