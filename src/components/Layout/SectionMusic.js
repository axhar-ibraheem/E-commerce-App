import "./SectionMusic.css";
import Card from "../UI/Card";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
    id: 1,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
    id: 2,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
    id: 3,
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
    id: 4,
  },
];

const SectionMusic = () => {
  return (
    <div className="section">
      <div className="section-title">
        <h1>music</h1>
      </div>
      <div className="card-center">
        {productsArr.map((item) => (
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
    </div>
  );
};

export default SectionMusic;
