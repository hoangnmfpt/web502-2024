import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { TProduct } from './interfaces/Product';

// ! app = smart component (component có chứa phần logic hoặc xử lý data)
const App: React.FC = () => {
	// const [count, setCount] = useState(0);
	// Get API lay thong tin product

	const [product, setProduct] = useState({
		title: 'Gia tri khoi tao',
		price: 0,
		description: '',
	});

	const updateProduct = () => {
		fetch('http://localhost:3000/products/1')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProduct(data);
			});
	};

	const Shop1 = (props: { product: TProduct }) => {
		return (
			<div>
				<p>{props.name}</p>
				<p>{props.product.id}</p>
				<p>{props.product.title}</p>
				<p>{props.product.price}</p>
			</div>
		);
	};

	// const shop2 = (product: TProduct) => {
	// 	return (
	// 		<>
	// 			<p>{product.id}</p>
	// 			<p>{product.title}</p>
	// 			<p>{product.price}</p>
	// 		</>
	// 	);
	// };

	// ! UI Component = dumb component

	// ! Props = Propeties = Thuộc tính
	// ! State = Trạng thái
	return (
		<div>
			<Header />
			<button onClick={() => updateProduct()}>Cap nhat san pham</button>
			<Shop1 product={product} />
			{/* {shop2(product)} */}
			<Footer />
		</div>
	);
};

export default App;
