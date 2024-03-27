import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../apis/product'
import { Product } from '../common/Product'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  useEffect(() => {
    ;(async () => {
      const data = await getProduct(+id!)
      setProduct(data)
    })()
  }, [])
  return (
    <div>
      <h2>Chi tiet san pham</h2>
      <p>Id: {id}</p>
      {JSON.stringify(product)}
    </div>
  )
}

export default ProductDetail
