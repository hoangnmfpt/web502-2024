import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Product } from './common/Product'

const product = {
  id: 1,
  title: 'Iphone 12',
  price: 1000,
  description: 'New product'
}

// ! Props = Propeties (Thuộc tính)
type Props = { product: Product; name: string }

const Home = (props: Props) => {
  return (
    <div>
      <h1>San pham duoc xem nhieu!</h1>
      <div>{props.product.id}</div>
      <div>{props.product.title}</div>
      <div>{props.product.price}</div>
      <div>{props.product.description}</div>
      <span>San pham nay cua {props.name}</span>
    </div>
  )
}

// ! Lay ten cua nguoi dung tinh toan... co ket qua la yourname

const Hello = ({ yourName }: { yourName: string }) => {
  return <div>Xin chao ban : {yourName}</div>
}

function App() {
  return (
    <>
      <Header />
      <Home product={product} name={'Hoang'} />
      <Hello yourName={'Hoang'} />
      <Footer />
    </>
  )
}

export default App
