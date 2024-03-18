import { useEffect, useState } from 'react';
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

	useEffect(() => {
		fetch('http://localhost:3000/products/1')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProduct(data);
			});
		return () => {
			// cleanup function
		};
	}, []);

	// cleanup with useEffect
	/**
	 * ! Không có dependency: cứ có sự thay đổi về state thì gọi lại callback.
	 * ! [] : Chỉ chạy lại 1 lần componentDidMount
	 * ! [state1, state2, ...] : Gọi lại khi một trong số các state được liệt kê có sự thay đổi.
	 */
	const Shop = (props: { product: TProduct }) => {
		return (
			<div>
				<p>{props.product.id}</p>
				<p>{props.product.title}</p>
				<p>{props.product.price}</p>
			</div>
		);
	};

	// ! UI Component = dumb component

	// ! Props = Propeties = Thuộc tính
	// ! State = Trạng thái
	return (
		<div>
			<Header />
			{/* <button onClick={() => updateProduct()}>Cap nhat san pham</button> */}
			<Shop product={product} />
			<Footer />
		</div>
	);
};

export default App;
