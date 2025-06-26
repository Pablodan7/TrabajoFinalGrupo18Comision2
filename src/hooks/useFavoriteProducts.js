import { useProductContext } from '../context/ProductContext'

export const useFavoriteProducts = () => {
    const { products, favorites } = useProductContext()
    return products.filter(p => favorites.includes(p.id) && !p.isDeleted)
}