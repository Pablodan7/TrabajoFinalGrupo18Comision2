import { useProductDetail } from '../hooks/useProductDetail'
import { useProductContext } from '../context/ProductContext'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductDetailCard = () => {
  const product = useProductDetail()
  const { toggleFavorite, favorites, deleteProduct } = useProductContext()
  const isFavorite = favorites.includes(product?.id)

  if (!product || product.isDeleted) return <p>Producto no encontrado</p>

  const handleDelete = () => {
    const confirm = window.confirm('¿Estás seguro de que deseas eliminar este producto?')
    if (confirm) deleteProduct(product.id)
  }

  return (
    <Card className="card-detail">
      <Card.Img variant="top" src={product.image} style={{ height: '300px', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title className='text-primary'>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <p><strong>Precio:</strong> ${product.price}</p>
        <p><strong>Categoría:</strong> {product.category}</p>
        <Button className="btn-detail" variant={isFavorite ? 'warning' : 'outline-warning'} onClick={() => toggleFavorite(product.id)}>
          {isFavorite ? '★ Quitar de favoritos' : '☆ Agregar a favoritos'}
        </Button>
        <div className="btn-detail">
          <Button as={Link} to={`/edit/${product.id}`} variant="primary">Editar</Button>
          <Button variant="danger" onClick={handleDelete}> Eliminar</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductDetailCard;