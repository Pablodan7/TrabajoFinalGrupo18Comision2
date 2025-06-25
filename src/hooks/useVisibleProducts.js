import { useProductContext } from '../context/ProductContext'

export const useVisibleProducts = () => {
    const { products } = useProductContext()
    return products.filter(p => !p.isDeleted)
}