import "./Card.css";

const Card = (props) => {
  return (
    <div className="cards">
      <div className="card-title">
        <h2>{props.title}</h2>
      </div>
      <div className="card-image">
        <img src={props.image} alt="" />
      </div>
      <div className="card-info">
        <p>${props.price}</p>
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default Card;
