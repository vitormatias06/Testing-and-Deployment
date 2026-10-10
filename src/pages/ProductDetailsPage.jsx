import { Link, useParams } from "react-router-dom";

function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <main>
        <h2>Product not found</h2>
        <Link to="/products">Back to Products</Link>
      </main>
    );
  }

  return (
    <main className="product-details">
      <img
        src={product.image}
        alt={product.name}
      />

      <div>
        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <h3>${product.price.toFixed(2)}</h3>

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>

        <br />
        <br />

        <Link to="/products">Back to Products</Link>
      </div>
    </main>
  );
}

export default ProductDetailsPage;