import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../styles/acercade.css";

import imagen1 from "../../../assets/hombrear.jpg";
import imagen2 from "../../../assets/hombre-joven-barba-telefono-inteligente_25030-29862.jpg";
import imagen3 from "../../../assets/hombre-joven-barba-telefono-inteligente_25030-29860.jpg";
import imagen4 from "../../../assets/mujer-joven-blanco_25030-39547.jpg";

const AcercaDe = () => {
  const nombres = ["Lisandro", "Pablo", "Ramiro", "Cynthia"];
  const imagenes = [imagen1, imagen2, imagen3, imagen4];
  const parrafos = [
    "Si no estoy programando, probablemente estoy pensando en qué programar a continuación.",
    "Mi habilidad secreta: escribir código mientras duermo. Aunque luego se vea alocado.",
    "Cuando no estoy frente a la pantalla, estoy soñando despierto con líneas de código.",
    "Me llaman la Reina del Debugging. No porque lo haga bien, sino porque lo hago a menudo.",
  ];

  return (
    <main>
      <Container>
        <Row xs={1} md={2} lg={4} className="container">
          {nombres.map((nombre, index) => (
            <Col key={index}>
              <div className="card">
                <img src={imagenes[index]} alt={nombre} />
                <div className="content">
                  <h3>{nombre}</h3>
                  <p>{parrafos[index]}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default AcercaDe;
