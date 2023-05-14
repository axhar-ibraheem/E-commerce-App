import Cards from "../UI/Cards";
import laptop from "../../assets/images/laptop-1.jpg";
import watch from "../../assets/images/watch-1.jpg";
import shoe from "../../assets/images/shoes-1.jpg";
import headphone from "../../assets/images/headphone-1.jpg";
import item from "../../assets/images/image-2.jpg";
import { Container, Row } from "react-bootstrap";

const productsArr = [
  {
    title: "Laptop",
    price: 1299.99,
    imageUrl: laptop,
    quantity: 1,
    id: 1,
  },
  {
    title: "Watch",
    price: 59.99,
    imageUrl: watch,
    quantity: 1,
    id: 2,
  },
  {
    title: "Shoes",
    price: 69.99,
    imageUrl: shoe,
    quantity: 1,
    id: 3,
  },
  {
    title: "Headphone",
    price: 29.99,
    imageUrl: headphone,
    quantity: 1,
    id: 4,
  },
  {
    title: "Item",
    price: 12.99,
    imageUrl: item,
    quantity: 1,
    id: 5,
  },
];

const Products = () => {
  return (
    <section>
      <Container>
        <div className="text-center pb-4">
          <h2 className="fs-1">
            Our <span className="text-warning">Store</span>{" "}
          </h2>
        </div>

        <Row className=" ">
          {productsArr.map((item) => (
            <Cards
              key={item.id}
              title={item.title}
              image={item.imageUrl}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
