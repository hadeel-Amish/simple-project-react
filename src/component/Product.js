import { Link } from "react-router-dom";
import "./Product.css";
function Product(props) {
  const { product, showButton } = props;
  // console.log(props);
  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p>price:{product.price}$</p>
          {showButton && (
            <Link className="btn btn-primary" to={`/product/${product.id}`}>
              Details
            </Link>
          )}
          {/* <button className="btn btn-primary">Details</button> */}
        </div>
      </div>
    </>
  );
}
export default Product;
