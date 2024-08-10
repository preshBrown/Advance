import React from 'react'
import {  useParams } from 'react-router-dom'

const ProductDetails = (props) => {
  const   params  =  useParams()

  return (
    <>
    
    <h1>ProductDetails</h1>
    <p>{ params.id }</p>
    </>

  )
}

export default ProductDetails