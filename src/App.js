import Home from "./Pages/Home";
import About from "./Pages/About";
import Store from "./Pages/Store";
import ContactUs from "./Pages/ContactUs";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Mainnav from "./components/Layout/Mainnav";
import ProductDetail from "./Pages/ProductDetail";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout></RootLayout>,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/store", element: <Store /> },
//       { path: "/about", element: <About></About> },
//       { path: "/contactus", element: <ContactUs></ContactUs> },
//     ],
//   },
// ]);

const App = () => {
  return (
    <div>
      <Mainnav></Mainnav>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/products" exact>
          <Store></Store>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
        <Route path="/products/:prodId">
          <ProductDetail></ProductDetail>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
