import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Shop from './pages/ShopPage';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Notfound from './pages/NotfoundPage';
import ProductDetail from './pages/ProductDetailPage/ProductDetailPage';

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/shop/:productId" element={<ProductDetail />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
