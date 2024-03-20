import ProductList from '../components/ProductList/ProductList'

interface Props {}

const Home = (props: Props) => {
  return (
    <div>
      <h1>San pham duoc xem nhieu:</h1>
      <ProductList />
    </div>
  )
}

export default Home
