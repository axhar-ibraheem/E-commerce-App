import React from "react";

const ProdContext = React.createContext({
  products: [],
  totalAmount: 0,
  addToCart: ()=>{}
});


export default ProdContext;