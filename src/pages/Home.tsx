import React from 'react'
import Banner from '~/components/Banner'
import ProductList from '~/components/ProductList'

const Home = () => {
  return (
    <div>
      <Banner />
      <h2>Danh sach san pham</h2>
      <ProductList />
    </div>
  )
}

export default Home
