import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Notfound from './pages/Notfound';

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
