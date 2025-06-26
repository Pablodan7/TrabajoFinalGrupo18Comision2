import { useParams } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'

export const useProductDetail = () => {
    const { id } = useParams()
    const { products } = useProductContext()
    return products.find(p => p.id === parseInt(id))
}
