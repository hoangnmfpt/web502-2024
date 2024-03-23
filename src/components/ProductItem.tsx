import { Link } from "react-router-dom";
import { TProduct } from "~/interfaces/Product";

type Props = { product: TProduct };
const ProductItem = (props: Props) => {
  return (
    <>
      <div key={props.product.id} className="productItem">
        <Link to={`/shop/${props.product.id}`}>
          <h2>{props.product.title}</h2>
        </Link>
        <p>{props.product.description}</p>
        <p>{props.product.price}</p>
        <p>{props.product.discountPercentage}</p>
        <p>{props.product.rating}</p>
        <p>{props.product.stock}</p>
        <p>{props.product.brand}</p>
        <p>{props.product.category}</p>
        <Link to={`/shop/${props.product.id}`}>
          <img
            width={300}
            src={props.product.thumbnail}
            alt={props.product.title}
          />
        </Link>
      </div>
    </>
  );
};

export default ProductItem;
