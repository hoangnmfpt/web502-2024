import { useState } from 'react';
import { useEffect } from 'react';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/products')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProducts(data);
			});
		return () => {
			// cleanup function
		};
	}, []);
	return (
		<div>
			<h1>Danh sách sản phẩm bán chạy</h1>
			{products.map((item) => (
				<div>{JSON.stringify(item)}</div>
			))}
		</div>
	);
};

export default ProductList;
