import { TProduct } from '@/interfaces/TProduct'
import { useEffect, useState } from 'react'

const ProductList = () => {
  // ! Dump component va smart component
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    // Cach 1:
    // fetch('http://localhost:3000/products')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //     setProducts(data)
    //   })

    // Cach 2:
    const getProducts = async () => {
      const res = await fetch('http://localhost:3000/products')
      const data = await res.json()
      setProducts(data)
    }
    getProducts()
  }, [])

  // ! DependencyList = Danh sách phụ thuộc
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductList
