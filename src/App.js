import React, { Fragment, useState, useEffect } from "react";
import commerce from "./lib/commerce";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProduct(data);
  };

  // get cart data
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  // add cart data
  const addCartHandler = async (productID, quantity) => {
    const item = await commerce.cart.add(productID, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <Fragment>
      <Navbar totalItems={cart.total_items} />
      {/* <Products products={products} onAddCart={addCartHandler} /> */}
      <Cart cart={cart} />
    </Fragment>
  );
};

export default App;
