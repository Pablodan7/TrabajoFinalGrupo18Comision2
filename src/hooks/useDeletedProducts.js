import { useProductContext } from '../context/ProductContext'

export const useDeletedProducts = () => {
    const { products } = useProductContext()
    return products.filter(p => p.isDeleted)

    
}