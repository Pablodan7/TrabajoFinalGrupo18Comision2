import ProductListSection from '../components/ProductListSection'
import { useFavoriteProducts } from '../hooks/useFavoriteProducts'

const Favorites = () => (
  <ProductListSection
    title="Favoritos"
    productsHook={useFavoriteProducts}
    emptyMessage="No hay productos favoritos."
  />
)

export default Favorites;