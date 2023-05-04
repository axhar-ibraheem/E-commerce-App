import "./SectionMerch.css";
import Card from "../UI/Card";

const merchArr = [
  {
    title: "T-shirt",
    price: 16.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
    quantity: 1,
    id: 5,
  },
  {
    title: "Coffee Cup",
    price: 5.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
    id: 6,
  },
];
const SectionMerch = () => {
  return (
    <div className="merch-section">
      <div className="section-title">
        <h1>merch</h1>
      </div>
      <div className="Card-center">
        {merchArr.map((item) => (
          <Card
            key={Math.random()}
            title={item.title}
            image={item.imageUrl}
            price={item.price}
            quantity={item.quantity}
            id={item.id}
          />
        ))}
      </div>
      <div className="merch-btn">
        <button>See The Cart</button>
      </div>
    </div>
  );
};

export default SectionMerch;
