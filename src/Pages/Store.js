import Header from "../components/Layout/Header";
import SectionMusic from "../components/Layout/SectionMusic";
import SectionMerch from "../components/Layout/SectionMerch";
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
        <CartButton onShow={showCartHandler}></CartButton>
        {showCart && <Cart hideCart={hideCartHandler} />}
        <SectionMusic />
        <SectionMerch />
        <Footer />
      </ProdContextProvider>
    </>
  );
};

export default Store;
