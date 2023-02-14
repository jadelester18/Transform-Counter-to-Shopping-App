import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { PRODUCTS_DATA } from "./data/products";

function App() {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const [cartItems, setCartItems] = useState([]);

  const [showCart, setShowCart] = useState(false);

  const toggleCartItems = () => {
    setShowCart(!showCart);
  };

  const handleAddToCart = (prod) => {
    const cartItem = cartItems.find((item) => item.prod.id === prod.id);

    if (cartItem) {
      setCartItems(
        cartItems.map((item) => {
          if (item.prod.id === prod.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        })
      );
    } else {
      setCartItems([...cartItems, { prod, quantity: 1 }]);
    }
  };

  const handleReducItemFromCart = (prod) => {
    const cartItem = cartItems.find((item) => item.prod.id === prod.id);

    if (cartItem.quantity === 1) {
      setCartItems(cartItems.filter((cItem) => cItem.prod.id !== prod.id));
    } else {
      setCartItems(
        cartItems.map((item) => {
          if (item.prod.id === prod.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
      );
    }
  };

  return (
    <>
      <CssBaseline />
      <Navbar
        showCartSummary={showCart}
        showPopCartItems={toggleCartItems}
        cartItems={cartItems}
        cartItemCount={cartItems.length}
      />
      <Container sx={{ marginTop: 3 }}>
        <Products
          quantityOfItemInCart={cartItems}
          onAddToCart={handleAddToCart}
          onRemoveToCart={handleReducItemFromCart}
          products={products}
        />
      </Container>
    </>
  );
}

export default App;
