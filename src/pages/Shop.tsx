import React from 'react';
import { TProduct } from '~/interfaces/Product';

type Props = {
	product: TProduct;
};

// ! Props = Properties (Thuộc tính)

const Shop = (props: Props) => {
	return (
		<div>
			<p>{props.product.id}</p>
			<p>{props.product.name}</p>
			<p>{props.product.price}</p>
		</div>
	);
};

export default Shop;
