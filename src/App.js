import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./Pages/RootLayout";
import Store from "./Pages/Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About></About> },
    ],
  },
]);

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
