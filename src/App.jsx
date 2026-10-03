import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product, size = "One Size") => {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id && item.size === size);
      if (existing) {
        return items.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, size, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id, size, quantity) => {
    if (quantity < 1) {
      setCart((items) => items.filter((item) => !(item.id === id && item.size === size)));
      return;
    }
    setCart((items) =>
      items.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id, size) =>
    setCart((items) => items.filter((item) => !(item.id === id && item.size === size)));

  return (
    <>
      <ScrollToTop />
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} onCart={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onAdd={addToCart} />} />
        <Route path="/shop" element={<Shop onAdd={addToCart} />} />
        <Route path="/product/:id" element={<Product onAdd={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onUpdate={updateQuantity}
        onRemove={removeItem}
      />
    </>
  );
}