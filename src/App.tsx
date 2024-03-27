import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home'

import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import instance from './apis'
import { Product } from './common/Product'
import Login from './pages/Login'
import NotFound from './pages/NotFound/NotFound'
import ProductDetail from './pages/ProductDetail'
import Register from './pages/Register'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/ProductAdd'
import { createProduct } from './apis/product'

const App = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await instance.get('/products')
      console.log(data)
      setProducts(data)
    }
    getProducts()
  }, [])

  const handleAddProduct = (product: Product) => {
    ;(async () => {
      const data = await createProduct(product)
      setProducts([...products, data])
    })()
    navigate('/admin')
  }
  return (
    <>
      <Header />
      <main className='container main'>
        <Routes>
          <Route path='/'>
            <Route index element={<Home products={products} />} />
            <Route path='/shop/:productId' element={<ProductDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route path='/admin'>
            {/* {(role = 'admin')} */}
            <Route index element={<Dashboard products={products} />} />
            <Route path='/admin/add' element={<ProductAdd onAdd={handleAddProduct} />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
