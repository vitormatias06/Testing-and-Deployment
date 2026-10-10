import "./CartItem.css";

function CartItem({ product, onRemove }) {
  return (
    <div className="cart-item">
      <div>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>

      <button onClick={() => onRemove(product.id)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;