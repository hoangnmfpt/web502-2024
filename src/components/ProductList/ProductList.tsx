import { useEffect, useState } from 'react'
import instance from '../../apis'
import { Product } from '../../common/Product'
import { Link } from 'react-router-dom'

const ProductList = () => {
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
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/shop/${product.id}`}>
            <img width={100} src={product.thumbnail} alt={product.title} />
          </Link>
          <Link to={`/shop/${product.id}`}>
            <h2>{product.title}</h2>
          </Link>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </>
  )
}

export default ProductList
