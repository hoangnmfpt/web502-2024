import React, { useState } from 'react';

type Props = {};

const AddProduct = (props: Props) => {
	const [title, setTitle] = useState('');
	const hanleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};
	const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e.target);
	};
	return (
		<div>
			<h2>AddProduct</h2>
			<form onSubmit={handleSumit}>
				<div className="formGroup">
					<label htmlFor="title">Title product</label>
					<input
						type="text"
						placeholder="title"
						name="title"
						onChange={hanleChange}
					/>
				</div>
				<div className="formGroup">
					<button type="submit">Add Product</button>
				</div>
			</form>
		</div>
	);
};

export default AddProduct;
