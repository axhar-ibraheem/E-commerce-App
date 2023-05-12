import Header from "../components/Layout/Header";
import Products from "../components/Layout/Products";
import Footer from "../components/Layout/Footer";
import CartButton from "../components/UI/CartButton";
import ProdContextProvider from "../store/prodContextProvider";
import Cart from "../components/Cart/Cart";
import React, { useState } from "react";

const Store = () => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      <ProdContextProvider>
        <Header />
        {showCart && <Cart hideCart={hideCartHandler} />}
        <Products />
      </ProdContextProvider>
    </>
  );
};

export default Store;
