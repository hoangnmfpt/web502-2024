import React from 'react'
import ProductList from '../components/ProductList'
import { Product } from '../common/Product'

interface Props {
  product: Product
}

const Home = (props: Props) => {
  return (
    <div>
      <h1>San pham duoc xem nhieu!</h1>
      <div>{props.product.id}</div>
      <h2 className='' style={{ color: 'red' }}>
        {props.product.title}
      </h2>
      <div>{props.product.price}</div>
      <div>{props.product.description}</div>
    </div>
  )
}

export default Home
