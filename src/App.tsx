import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { TProduct } from './interfaces/Product';
const App: React.FC = () => {
	// const [count, setCount] = useState(0);
	// Get API lay thong tin product
	const product: TProduct = {
		id: 1,
		title: 'iPhone 9',
		description: 'An apple mobile which is nothing like apple',
		price: 549,
		discountPercentage: 12.96,
		rating: 4.69,
		stock: 94,
		brand: 'Apple',
		category: 'smartphones',
		thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
		images: [
			'https://cdn.dummyjson.com/product-images/1/1.jpg',
			'https://cdn.dummyjson.com/product-images/1/2.jpg',
			'https://cdn.dummyjson.com/product-images/1/3.jpg',
			'https://cdn.dummyjson.com/product-images/1/4.jpg',
			'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
		],
	};

	type TProps = { product: TProduct; name: string };

	const Shop = (props: TProps) => {
		return (
			<div>
				<p>{props.name}</p>
				<p>{props.product.id}</p>
				<p>{props.product.title}</p>
				<p>{props.product.price}</p>
			</div>
		);
	};
	return (
		<div>
			{/* <div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div> */}

			<Header />
			{/* <Home /> */}
			<Shop product={product} name={'Hoang'} />
			<Footer />
		</div>
	);
};

export default App;
