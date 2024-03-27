import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home'

import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import instance from './apis'
import { Product } from './common/Product'
import Login from './pages/Login'
import NotFound from './pages/NotFound/NotFound'
import ProductDetail from './pages/ProductDetail'
import Register from './pages/Register'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/ProductAdd'

const App = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await instance.get('/products')
      console.log(data)
      setProducts(data)
    }
    getProducts()
  }, [])
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
            <Route path='/admin/add' element={<ProductAdd />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
