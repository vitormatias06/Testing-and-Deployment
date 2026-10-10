import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h2>{product.name}</h2>

        <p className="product-description">
          {product.description}
        </p>

        <p className="product-price">
          ${product.price.toFixed(2)}
        </p>

        <button onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>

        <Link to={`/products/${product.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;