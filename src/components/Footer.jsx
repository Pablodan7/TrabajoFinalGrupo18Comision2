import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 mt-auto">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4}>
            <h6 className="text-uppercase fw-bold">Facultad de Ingeniería - UNJu</h6>
            <p className="small mb-0">
              Proyecto académico para el Trabajo Final Integrador del Grupo 18.
            </p>
          </Col>

          <Col md={4}>
            <h6 className="text-uppercase fw-bold">Integrantes</h6>
            <ul className="list-unstyled">
              <li>Garzón Pablo Daniel</li>
              <li>Giron Luciano Gabriel</li>
              <li>Perez Ruarte Lisandro Yamil</li>
              <li>Guanuco Carlos</li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className="text-uppercase fw-bold">Enlaces</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/acercade" className="text-light text-decoration-none">
                  Acerca
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-light text-decoration-none">
                  Favoritos
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Pablodan7/TrabajoFinalGrupo18Comision2.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  GitHub Grupo 18
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <p className="text-center small mb-0 mt-3">
          &copy; {new Date().getFullYear()} Proyecto Final APU - Comisión 2 Grupo 18.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;