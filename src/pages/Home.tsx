import { Link } from 'react-router-dom'
import { Product } from '../common/Product'

interface Props {
  products: Product[]
}

const Home: React.FC<Props> = ({ products }) => {
  return (
    <div>
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
    </div>
  )
}

export default Home
