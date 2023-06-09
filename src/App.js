import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import { Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom";
import Mainnav from "./components/Layout/Mainnav";
import ProductDetail from "./Pages/ProductDetail";
import { useState, useContext } from "react";
import Cart from "./components/Cart/Cart";
import Products from "./components/Layout/Products";
import ProdContext from "./store/prodContext";
import Auth from "./Pages/Auth";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const ctx = useContext(ProdContext);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  const userLoggedIn = !!ctx.idToken;
  return (
    <>
      <Mainnav onShow={showCartHandler}></Mainnav>
      {showCart && <Cart onHide={hideCartHandler}></Cart>}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home" exact>
          <Home></Home>
        </Route>
        <Route path="/products" exact>
          {userLoggedIn && <Products></Products>}
          {!userLoggedIn && <Redirect to="/auth"></Redirect>}
        </Route>

        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
        <Route path="/auth">
          <Auth></Auth>
        </Route>
        {userLoggedIn && (
          <Route path="/products/:prodId">
            <ProductDetail></ProductDetail>
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};
export default App;
