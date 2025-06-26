import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'
import { Form, Button, Container } from 'react-bootstrap'

const LoginForm = () => {
  const { login } = useProductContext()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const success = login(username, password)
    if (success) {
      navigate('/')
    } else {
      setError('ID o correo y/o contraseña incorrectos')
    }
  }

  return (
    <Container className="login-box" style={{ maxWidth: '400px' }}>
      <h2 className="my-4">Iniciar Sesión</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>ID o Correo electrónico</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        {error && <p className="text-danger">{error}</p>}
        <Button type="submit" variant="primary">Ingresar</Button>
      </Form>
    </Container>
  )
}

export default LoginForm;