import React from 'react'
import ProductCard from './ProductCard'
import { Row, Col } from 'react-bootstrap'

const ProductListSection = ({ title, productsHook, emptyMessage }) => {
  const products = productsHook()

  return (
    <div>
      <h2>{title}</h2>
      {products.length === 0 ? (
        <p className="no-items">{emptyMessage}</p>
      ) : (
        <Row xs={1} md={2} className="g-4">
          {products.map(product => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default ProductListSection;