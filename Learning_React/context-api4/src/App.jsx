import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [productData, setProductData] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products/')
    setProductData(response.data)
    
  }
  const firstData = async (id)=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(response.data);
  }

  useEffect(function(){
    getData()
  },[])
  return (
    <div className='allProducts'>
      {productData.map(function(elem,idx){
        return <a className='product' key = {idx} href="">
          <div>
            <img src={elem.image} alt="" />
            <h2>{elem.title}</h2>
          </div>
        </a>
      })}
      
      
    </div>
  )
}

export default App