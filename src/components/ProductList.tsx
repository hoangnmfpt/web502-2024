import { useEffect, useState } from 'react';
import instance from '~/apis';
import { TProduct } from '~/interfaces/Product';
import style from './ProductList.module.scss';

const ProductList = () => {
	const [products, setProducts] = useState<TProduct[]>([]);

	useEffect(() => {
		// fetch('http://localhost:3000/products')
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		console.log(data);
		// 		setProducts(data);
		// 	});
		// return () => {
		// 	// cleanup function
		// };
		// ! Cách 2:
		const fetchProducts = async () => {
			const { data } = await instance.get(`/products`);
			// ! http://localhost:3000/products
			setProducts(data);
		};
		fetchProducts();
	}, []);
	return (
		<div>
			<h1>Danh sách sản phẩm bán chạy</h1>
			{products.map((item) => (
				<div className={style.productCart} key={item.id}>
					<h3 className="card-title">{item.title}</h3>
					<div>{item.price}</div>
					<img width={'100%'} src={item.thumbnail} alt={item.title} />
					<p>{item.description}</p>
				</div>
			))}
		</div>
	);
};

export default ProductList;
