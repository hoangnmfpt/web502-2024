import React, { useEffect, useState } from "react";
import { TProduct } from "~/interfaces/Product";


const ProductList = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {  
    fetch('http://localhost:3000/products').then(res => res.json()).then(data => {setProducts(data)})
  }, []) 
  return <div>
    <h2>San pham danh cho nam:</h2>
    {products.map((product: TProduct) => <div key={product.id}>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <img width={360} src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
    </div>)}
  </div>;
};

export default ProductList;
