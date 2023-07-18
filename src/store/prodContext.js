import React from "react";

const ProdContext = React.createContext({
  products: [],
  totalAmount: 0,
  idToken: "",
  changed: "",
  login: () => {},
  logout: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  replaceCart: ()=>{},
  apiKey: "",
  email: "",
});

export default ProdContext;
