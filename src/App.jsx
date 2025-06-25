import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritosProvider } from "./context/FavoritosContext";
import { ProductosProvider } from "./context/ProductosContext";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import DetalleProducto from "./pages/DetalleProducto";
import FormularioProducto from "./pages/FormularioProducto";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <ProductosProvider>
        <FavoritosProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="/producto/:id" element={<DetalleProducto />} />
              <Route path="/formulario/:id?" element={<FormularioProducto />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </FavoritosProvider>
      </ProductosProvider>
    </AuthProvider>
  );
}

export default App;
