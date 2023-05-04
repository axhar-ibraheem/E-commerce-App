import "./CartItems.css";

const CartItems = (props) => {
  return (
    <div className="cart-item">
      <div className="item-details column">
        <img className="prod-image" src={props.image} alt="product" />

        <span className="prod-title">{props.title}</span>
      </div>
      <div className="prod-price column">
        <span>${props.price}</span>
      </div>
      <div className="item-quantity column">
        <span className="prod-quantity">{props.quantity}</span>
        <button className="remove-btn">Remove</button>
      </div>
    </div>
  );
};

export default CartItems;
