import React from 'react'
import { useParams } from 'react-router-dom'
import useGetSingleProduct from '../../hooks/useGetSingleProduct'
import UpdateProductForm from './UpdateProductForm'
import LoadingScreen from '../LoadingScreen'

const CustomizeProduct = () => {
  const { id } = useParams()
  const customizedProduct = useGetSingleProduct(id)

  if (!customizedProduct) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <UpdateProductForm customizedProduct={customizedProduct} />
  )
}

export default CustomizeProduct
