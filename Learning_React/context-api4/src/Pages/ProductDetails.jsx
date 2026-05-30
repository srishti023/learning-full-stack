import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const productData = useContext(ProductDataContext)
  
  const {id} = useParams()
  const selectedProduct = productData.find(
  (elem) => elem.id == id
);

  return (
    <div>
        <div>
            <img src={selectedProduct.image} alt="" />
            <h2>{selectedProduct.title}</h2>
            <h5>${selectedProduct.price}</h5>
          </div>
    </div>
  )
}

export default ProductDetails