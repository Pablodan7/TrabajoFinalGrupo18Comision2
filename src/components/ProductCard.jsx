import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'

const ProductCard = ({ product }) => {
  const { toggleFavorite, favorites, deleteProduct } = useProductContext()
  const isFavorite = favorites.includes(product.id)

  if (product.isDeleted) return null

  const handleDelete = () => {
    const confirm = window.confirm('¿Estás seguro de que deseas eliminar este producto?')
    if (confirm) deleteProduct(product.id)
  }

  return (
    <Card className="mb-3 card-custom">
      <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Badge bg="secondary">{product.category}</Badge>

        <div className="d-flex justify-content-between mt-3">
          <Button as={Link} to={`/product/${product.id}`} variant="info">Ver más</Button>
          <Button
            className="btn-fav"
            variant={isFavorite ? "warning" : "outline-warning"}
            onClick={() => toggleFavorite(product.id)}
          >
            {isFavorite ? "★" : "☆"}
          </Button>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <Button as={Link} to={`/edit/${product.id}`} variant="outline-primary" size="sm">Editar</Button>
          <Button variant="danger" size="sm" onClick={handleDelete}>Eliminar</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;
