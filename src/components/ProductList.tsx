import React, { useEffect, useState } from 'react'
import instance from '../apis'
import { Product } from '../common/Product'

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // fetch('http://localhost:3000/products/1')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(product)
    //     setProduct(data)
    //   })
    ;(async () => {
      const { data } = await instance.get('/products')
      console.log(data)
      setProducts(data)
    })()
  }, [])
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <img width={100} src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </>
  )
}

export default ProductList
