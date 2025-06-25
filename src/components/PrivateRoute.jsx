import { Navigate } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useProductContext()

  return isLoggedIn ? children : <Navigate to="/login" />
}

export default PrivateRoute;