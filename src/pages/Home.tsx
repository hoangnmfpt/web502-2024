import Banner from '@/components/Banner'
import { TProduct } from '@/interfaces/TProduct'
import { Link } from 'react-router-dom'

type Props = {
  products: TProduct[]
}
const Home = ({ products }: Props) => {
  return (
    <div className='container'>
      <h1>Product List</h1>
      <div className='row'>
        {products.map((product) => (
          <div key={product.id} className='col'>
            <Link to={`/shop/${product.id}`}>
              <h2>{product.title}</h2>
            </Link>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Link to={`/shop/${product.id}`}>
              <img width={100} src={product.thumbnail} alt={product.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
