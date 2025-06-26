import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'

const RegisterForm = () => {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (!id.trim()) return setError('Debe ingresar un ID de usuario')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Correo inválido')
    if (password.length < 6) return setError('La contraseña debe tener al menos 6 caracteres')
    if (password !== confirmPassword) return setError('Las contraseñas no coinciden')

    const storedUsers = JSON.parse(localStorage.getItem('users')) || []
    if (storedUsers.some(user => user.id === id)) return setError('El ID ya está en uso')
    if (storedUsers.some(user => user.email === email)) return setError('El correo ya está registrado')

    const newUser = { id, email, password }
    localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]))

    setSuccess('Usuario registrado correctamente')
    setTimeout(() => navigate('/login'), 1500)
  }

  return (
    <Container style={{ maxWidth: '400px' }} className="mt-4">
      <h2 className="mb-4">Registro</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>ID de Usuario</Form.Label>
          <Form.Control type="text" value={id} onChange={e => setId(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirmar contraseña</Form.Label>
          <Form.Control type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
        </Form.Group>
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">{success}</p>}
        <Button type="submit" variant="success">Registrarse</Button>
      </Form>
    </Container>
  )
}

export default RegisterForm;