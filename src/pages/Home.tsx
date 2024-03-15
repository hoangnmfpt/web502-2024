import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductList from '@/components/ProductList'

type Props = {}
const Home = (props: Props) => {
  return (
    <div>
      <Header />
      <Banner />
      <h2>Danh sach san pham:</h2>
      <ProductList />
      <Footer />
    </div>
  )
}

export default Home
