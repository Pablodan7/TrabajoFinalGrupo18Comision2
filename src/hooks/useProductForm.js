import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'

export const useProductForm = (editMode) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { products, addProduct, updateProduct } = useProductContext()

    const initialState = {
        title: '',
        price: '',
        description: '',
        category: '',
        image: ''
    }

    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (editMode && id) {
        const prod = products.find(p => p.id === parseInt(id))
        if (prod) setFormData(prod)
        }
    }, [editMode, id, products])

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const priceValue = parseFloat(formData.price)
        const newErrors = {}

        if (isNaN(priceValue) || priceValue <= 0) {
            newErrors.price = 'El precio debe ser mayor a 0.'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        return
        }

    if (editMode) {
        updateProduct({ ...formData, id: parseInt(id) })
    } else {
        addProduct(formData)
    }
        navigate('/')
    }

    return {
        formData,
        handleChange,
        handleSubmit,
        errors
    }
}  