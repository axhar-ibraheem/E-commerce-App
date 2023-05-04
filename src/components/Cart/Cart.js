import "./Cart.css";
import CartItems from "./CartItems";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart</h1>
      <button onClick={props.hideCart} className="cancel-btn">
        X
      </button>
      <div className="cart-info">
        <span className="item column">ITEM</span>
        <span className="price column">PRICE</span>
        <span className="quantity column">QUANTITY</span>
      </div>
      <div className="cartItems">
        {cartElements.map((item) => (
          <CartItems
            image={item.imageUrl}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className="total-amount">
        <span>Total </span>
        <span>$1200</span>
      </div>
      <div className="purchase-btn">
        <button>purchase</button>
      </div>
    </div>
  );
};

export default Cart;
