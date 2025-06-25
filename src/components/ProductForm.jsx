import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useProductForm } from '../hooks/useProductForm'

const ProductForm = ({ editMode }) => {
  const { formData, handleChange, handleSubmit, errors } = useProductForm(editMode)

  return (
    <Container style={{ maxWidth: '600px' }}>
      <h2>{editMode ? 'Editar Producto' : 'Crear Producto'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control name="title" value={formData.title} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            name="price"
            type="number"
            min="0.01"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            isInvalid={!!errors.price}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.price}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control name="description" as="textarea" value={formData.description} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoría</Form.Label>
          <Form.Control name="category" value={formData.category} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>URL de Imagen</Form.Label>
          <Form.Control name="image" value={formData.image} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit">{editMode ? 'Actualizar' : 'Crear'}</Button>
      </Form>
    </Container>
  )
}

export default ProductForm;