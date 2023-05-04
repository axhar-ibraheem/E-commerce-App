import Header from "./components/Layout/Header";
import SectionMerch from "./components/Layout/SectionMerch";
import SectionMusic from "./components/Layout/SectionMusic";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
const App = () => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <>
      <header>
        <Navbar onShow={showCartHandler}></Navbar>
        <Header></Header>
      </header>
      {showCart && <Cart hideCart={hideCartHandler} />}
      <SectionMusic></SectionMusic>
      <SectionMerch></SectionMerch>
      <Footer></Footer>
    </>
  );
};

export default App;
