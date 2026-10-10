import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import keyboardImage from "./assets/keyboard.jpg";
import mouseImage from "./assets/mouse.jpg";
import hubImage from "./assets/usb-hub.jpg";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

function App() {
  const products = [
    {
      id: 1,
      name: "Mechanical Keyboard",
      price: 79.99,
      image: keyboardImage,
      description:
        "A comfortable mechanical keyboard for work and gaming.",
    },
    {
      id: 2,
      name: "Gaming Mouse",
      price: 49.99,
      image: mouseImage,
      description: "A fast and precise mouse designed for gaming.",
    },
    {
      id: 3,
      name: "USB-C Hub",
      price: 39.99,
      image: hubImage,
      description:
        "Connect multiple devices with this compact USB-C hub.",
    },
  ];

  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      return JSON.parse(savedCart);
    }

    return [];
  });

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
    console.log("Added to cart:", product);
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => {
      const index = currentCart.findIndex(
        (product) => product.id === productId
      );

      if (index === -1) {
        return currentCart;
      }

      const newCart = [...currentCart];
      newCart.splice(index, 1);

      return newCart;
    });
  };

  const cartTotal = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          storeName="MatiasTech"
          cartCount={cart.length}
        />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage />
            }
          />

          <Route
            path="/products"
            element={
              <ProductsPage
                products={products}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/products/:id"
            element={
              <ProductDetailsPage
                products={products}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                removeFromCart={removeFromCart}
                cartTotal={cartTotal}
              />
            }
          />
        </Routes>

        <Footer
          storeName="MatiasTech"
          email="contact@matiastech.com"
          phone="(323) 202-3122"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;