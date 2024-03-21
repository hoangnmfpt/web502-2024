import { Link } from "react-router-dom";
import { TProduct } from "~/interfaces/Product";

type TProps = {
  products: TProduct[];
};
const ProductList = (props: TProps) => {
  // Get the products from the server
  return (
    <div>
      <h1>Danh sach san pham</h1>
      {props.products.map((product) => (
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
