
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './context/ProductContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/custom.css'
import { ThemeProvider } from './context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)