import CartItem from "../components/CartItem";

function CartPage({ cart, removeFromCart, cartTotal }) {
  return (
    <main className="cart-section">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((product, index) => (
              <CartItem
                key={`${product.id}-${index}`}
                product={product}
                onRemove={removeFromCart}
              />
            ))}
          </div>

          <div className="cart-total">
            <h3>Total: ${cartTotal.toFixed(2)}</h3>
          </div>
        </>
      )}
    </main>
  );
}

export default CartPage;