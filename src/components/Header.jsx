import { Link } from "react-router-dom";
import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <h1>{storeName}</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        <Link to="/cart" className="cart-container">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;