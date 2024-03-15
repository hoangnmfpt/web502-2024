import { useEffect, useState } from 'react'
import './App.css'
import { Product } from './common/Product'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import instance from './apis'

// ! Props = Propeties (Thuộc tính)
// ! Lay ten cua nguoi dung tinh toan... co ket qua la yourname

// ! App là dumb component
const App = () => {
  const [product, setProduct] = useState<Product>({
    title: 'Gia tri khoi tao mac dinh',
    price: 0,
    description: ''
  })

  useEffect(() => {
    // fetch('http://localhost:3000/products/1')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(product)
    //     setProduct(data)
    //   })
    ;(async () => {
      const { data } = await instance.get('/products/1')
      console.log(data)
      setProduct(data)
    })()
  }, [])

  return (
    <>
      <Header />
      <Home product={product} />
      {/* Home la UI component */}
      <Footer />
    </>
  )
}

export default App
