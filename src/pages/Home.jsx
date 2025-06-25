import ProductListSection from '../components/ProductListSection'
import { useVisibleProducts } from '../hooks/useVisibleProducts'

const Home = () => (
  <ProductListSection
    title="Listado de Productos"
    productsHook={useVisibleProducts}
    emptyMessage="No hay productos disponibles."
  />
)

export default Home;
