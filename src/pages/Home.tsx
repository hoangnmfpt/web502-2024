import React from 'react'
import Banner from '@/components/Banner'
import ProductList from '@/components/ProductList'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TProduct } from '@/interfaces/TProduct'

const Home = (product: TProduct) => {
  return (
    <div>
      <Header />
      <Banner />
      <h2>Danh sach san pham:</h2>
      <ProductList />
      <Footer />
    </div>
  )
}

// const sum = (a: number, b: number) => {
//   return a + b
// }

// sum(2, 3)

export default Home
