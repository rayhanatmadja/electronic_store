import React, { Fragment, useState, useEffect } from "react";
import commerce from "./lib/commerce";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProduct(data);
  };

  // add cart data
  const addCartHandler = async (productID, quantity) => {
    const item = await commerce.cart.add(productID, quantity);

    setCart(item.cart);
  };

  // get cart data
  const fetchCart = async () => {
    const cartData = await commerce.cart.retrieve();

    setCart(cartData);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <Fragment>
      <Navbar />
      <Products products={products} onAddCart={addCartHandler} />
    </Fragment>
  );
};

export default App;
