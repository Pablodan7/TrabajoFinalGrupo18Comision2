import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap'
import { useProductContext } from '../context/ProductContext'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const { isLoggedIn, logout, loggedUser } = useProductContext()
  const { darkMode, toggleTheme } = useTheme()

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">FashionApp</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/favorites">Favoritos</Nav.Link>
                <Nav.Link as={Link} to="/create">Crear Producto</Nav.Link>
                <Nav.Link as={Link} to="/acercade">Acerca de</Nav.Link>
                <Nav.Link as={Link} to="/papelera">Papelera</Nav.Link>
              </>
            )}
          </Nav>

          <div className="d-flex gap-2 align-items-center">
            <Button variant="outline-light" onClick={toggleTheme}>
              {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
            </Button>

            {isLoggedIn ? (
              <>
                <span className="text-light me-2">Bienvenido, {loggedUser?.id}</span>
                <Button variant="outline-light" onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                <Button as={Link} to="/login" variant="outline-light">Iniciar Sesión</Button>
                <Button as={Link} to="/register" variant="outline-light">Registrarse</Button>
              </>
            )}
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar;