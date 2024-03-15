import React from 'react'
import './App.css'
import { TProduct } from './interfaces/TProduct'
// import Home from './pages/Home'
import { TProduct } from '~/interfaces/Product'

const Home1 = (product: TProduct) => {
  return (
    <>
      <h2>{product.title}</h2>
      <p>Gia: {product.price}</p>
    </>
  )
}

type Props = { product: TProduct; name: string }

//! props = propeties = Các thuộc tính
const Home2 = (props: Props) => {
  return (
    <>
      <h2>{props.product.title}</h2>
      <p>Gia: {props.product.price}</p>
      <p>Nhung san pham nay thuoc ve {props.name}</p>
    </>
  )
}

function App() {
  let product: TProduct = {
    id: 1,
    title: 'Iphone 12',
    price: 1000,
    description: 'New product'
  }
  return (
    <>
      <h2>Hello</h2>
      {Home1(product)}
      <Home2 product={product} name={'Hoang'} />
      <div>Day la phan quang cao</div>
    </>
  )
}

export default App
