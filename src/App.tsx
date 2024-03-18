import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './pages/Shop';

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Shop />
			<Footer />
		</div>
	);
};

export default App;
