import "./SectionMusic.css";
import Card from "../UI/Card";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const SectionMusic = () => {
  return (
    <div className="music-section">
      <div className="section-title">
        <h1>music</h1>
      </div>
      <div className="Card-center">
        {productsArr.map((item) => (
          <Card
            key={Math.random()}
            title={item.title}
            image={item.imageUrl}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionMusic;
