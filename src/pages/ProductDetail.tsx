import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import instance from '~/apis';
import { TProduct } from '~/interfaces/Product';

type Props = {};

const ProductDetail = (props: Props) => {
	const params = useParams();
	const [product, setProduct] = useState<TProduct | null>(null);

	useEffect(() => {
		const getProduct = async () => {
			const { data } = await instance.get(`/products/${params.productId}`);
			setProduct(data);
		};
		getProduct();
	}, []);
	return (
		<div>
			<h1>Chi tiet san pham co id la {params.productId}</h1>
			<h2>{product?.title}</h2>
			<img src={product?.thumbnail} alt={product?.title} />
			<div>Gia san pham: {product?.price}</div>
		</div>
	);
};

export default ProductDetail;
