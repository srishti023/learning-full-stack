import React, { createContext, useEffect, useState} from 'react'
import axios from 'axios'
import { getAllProductData } from '../api/productApi'

export const ProductDataContext = createContext()
const ProductContext = (props) => {

    const [productData, setProductData] = useState([])
    const [selectedProduct, setselectedProduct] = useState(null)

    const setData = async ()=>{
        const data = await getAllProductData()
        setProductData(data)
    }
    const firstData = async (id)=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(response.data);
  }


  useEffect(function(){
    setData()
  },[])

  
  return (
    <div>
        <ProductDataContext.Provider value={productData}>
            {props.children}
        </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext