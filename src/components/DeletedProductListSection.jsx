import React from 'react'
import { useDeletedProducts } from '../hooks/useDeletedProducts'
import { useProductContext } from '../context/ProductContext'
import { Row, Col, Button, Card } from 'react-bootstrap'

const DeletedProductListSection = () => {
  const deletedProducts = useDeletedProducts()
  const { updateProduct } = useProductContext()

  const restore = (product) => {
    const restored = { ...product, isDeleted: false }
    updateProduct(restored)
  }

  return (
    <div className="mt-4">
      <h2>Papelera de Productos</h2>
      {deletedProducts.length === 0 ? (
        <p>No hay productos en la papelera.</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {deletedProducts.map(product => (
            <Col key={product.id}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{ objectFit: 'contain', height: '200px', padding: '1rem' }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text style={{ fontSize: '0.9rem' }}>{product.description}</Card.Text>
                  <Button variant="success" onClick={() => restore(product)}>
                    Restaurar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default DeletedProductListSection;
