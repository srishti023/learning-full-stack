import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetails />}/>
      </Routes>
    </div>
  )
}

export default App