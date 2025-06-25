import React, { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [favorites, setFavorites] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState(null)

  // 📦 Obtener productos desde API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const enriched = data.map(p => ({ ...p, isDeleted: false }))
        setProducts(enriched)
      })
  }, [])

  // 🔁 Rehidratar sesión y favoritos del usuario
  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('sessionUser'))
    const allFavs = JSON.parse(localStorage.getItem('favoritesByUser')) || {}

    if (session) {
      setIsLoggedIn(true)
      setLoggedUser(session)
      setFavorites(allFavs[session.id] || [])
    }
  }, [])

  // 🔐 Login con ID o correo
  const login = (input, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find(
      u => (u.email === input || u.id === input) && u.password === password
    )

    if (user) {
      localStorage.setItem('sessionUser', JSON.stringify(user))
      setLoggedUser(user)
      setIsLoggedIn(true)

      const allFavs = JSON.parse(localStorage.getItem('favoritesByUser')) || {}
      setFavorites(allFavs[user.id] || [])

      return true
    }

    return false
  }

  const logout = () => {
    localStorage.removeItem('sessionUser')
    setLoggedUser(null)
    setIsLoggedIn(false)
    setFavorites([])
  }

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const updated = prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id]

      // Guardar favoritos por usuario
      const allFavs = JSON.parse(localStorage.getItem('favoritesByUser')) || {}
      allFavs[loggedUser.id] = updated
      localStorage.setItem('favoritesByUser', JSON.stringify(allFavs))

      return updated
    })
  }

  const deleteProduct = (id) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, isDeleted: true } : p))
    )
  }

  const addProduct = (product) => {
    const newId = Math.max(...products.map(p => p.id)) + 1
    setProducts(prev => [...prev, { ...product, id: newId, isDeleted: false }])
  }

  const updateProduct = (updatedProduct) => {
    setProducts(prev =>
      prev.map(p => (p.id === updatedProduct.id ? { ...updatedProduct } : p))
    )
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        favorites,
        isLoggedIn,
        loggedUser,
        login,
        logout,
        toggleFavorite,
        deleteProduct,
        addProduct,
        updateProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductContext)
