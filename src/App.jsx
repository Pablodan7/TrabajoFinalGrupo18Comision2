import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import ProductDetail from './pages/ProductDetail'
import ProductForm from './components/ProductForm'
import Login from './pages/Login'
import Register from './pages/Register'
import AcercaDe from './pages/AcercaDe'
import NotFound from './pages/NotFound'
import Papelera from './pages/Papelera' // 🆕 Nueva vista
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column min-vh-100">
        <div className="container mt-4 flex-grow-1">
          <Routes>
            {/* Rutas públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Rutas protegidas */}
            <Route path="/" element={
              <PrivateRoute><Home /></PrivateRoute>
            } />
            <Route path="/favorites" element={
              <PrivateRoute><Favorites /></PrivateRoute>
            } />
            <Route path="/product/:id" element={
              <PrivateRoute><ProductDetail /></PrivateRoute>
            } />
            <Route path="/create" element={
              <PrivateRoute><ProductForm /></PrivateRoute>
            } />
            <Route path="/edit/:id" element={
              <PrivateRoute><ProductForm editMode /></PrivateRoute>
            } />
            <Route path="/acercade" element={
              <PrivateRoute><AcercaDe /></PrivateRoute>
            } />
            <Route path="/papelera" element={
              <PrivateRoute><Papelera /></PrivateRoute>
            } />

            {/* Ruta 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;

