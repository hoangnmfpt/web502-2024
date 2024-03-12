import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Product } from './types/Product'

function App() {
	const [count, setCount] = useState(0)
	const product: Product = {
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
			'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
		]
	}
	return (
		<>
			<div>
				<h2>{product.title}</h2>
				<img src={product.thumbnail} alt={product.title} />
				<h5>Gia san pham: {product.price}</h5>
			</div>
		</>
	)
}

export default App
