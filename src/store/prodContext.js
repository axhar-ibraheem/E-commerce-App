import React from "react";

const ProdContext = React.createContext({
  products: [],
  totalAmount: 0,
  idToken: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  apiKey: "AIzaSyBezG9y2vzN3ZEoEkEMYo68vi3GYFkJ99Q",
});

export default ProdContext;
