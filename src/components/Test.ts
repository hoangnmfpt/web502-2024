import { TProduct } from '~/interfaces/Product';

const hello = (yourName: string) => {
	console.log(`Xin chao ban ${yourName}!`);
};
hello('Hoang');

const productItem = (product: TProduct) => {
	return `
    <div>
      <p>${product.id}</p>
      <p>${product.name}</p>
      <p>${product.price}</p>
    </div>
  `;
};

const product: TProduct = {
	id: 1,
	name: 'san pham A',
	price: 100,
};
productItem(product);
