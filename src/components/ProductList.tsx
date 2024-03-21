import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "~/apis";
import { TProduct } from "~/interfaces/Product";

type Props =   {
  category: string
}
const ProductList = (props: Props) => {
  console.log(props)
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    // Cach 2:
    const getAllProducts = async () => {
      try {
        const { data } = await instance.get(`/products`);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);
  return (
    <div>
      <h1>Danh sach san pham</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/shop/${product.id}`}>
            <h2>{product.title}</h2>
          </Link>

          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.discountPercentage && "Dang cap nhat"}</p>
          <p>{product.rating}</p>
          <p>{product.stock}</p>
          <p>{product.brand}</p>
          <p>{product.category}</p>
          <Link to={`/shop/${product.id}`}>
            <img width={300} src={product.thumbnail} alt={product.title} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
