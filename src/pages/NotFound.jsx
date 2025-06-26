import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="text-center mt-5">
            <h1>404 - Página no encontrada</h1>
            <p>La ruta que estás buscando no existe.</p>
            <Button as={Link} to="/" variant="primary">Volver al inicio</Button>
        </div>
    )
}

export default NotFound;