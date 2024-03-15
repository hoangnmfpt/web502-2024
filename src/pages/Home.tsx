import React from 'react'
import Banner from '@/components/Banner'
import ProductList from '@/components/ProductList'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TProduct } from '@/interfaces/TProduct'

type Props = {}
const Home = (props: Props) => {
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

export default Home
