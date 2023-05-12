import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  Carousel,
} from "react-bootstrap";
import laptop1 from "../assets/images/laptop-1.jpg";
import laptop2 from "../assets/images/laptop-2.jpg";
import laptop3 from "../assets/images/laptop-3.jpg";
import laptop4 from "../assets/images/laptop-4.jpg";
import watch1 from "../assets/images/watch-1.jpg";
import watch2 from "../assets/images/watch-2.jpg";
import watch3 from "../assets/images/watch-3.jpg";
import watch4 from "../assets/images/watch-4.jpg";

import shoe1 from "../assets/images/shoes-1.jpg";
import shoe2 from "../assets/images/shoes-2.jpg";
import shoe3 from "../assets/images/shoes-3.jpg";
import shoe4 from "../assets/images/shoes-4.jpg";

import headphone1 from "../assets/images/headphone-1.jpg";
import headphone2 from "../assets/images/headphone-2.jpg";
import headphone3 from "../assets/images/headphone-3.jpg";
import headphone4 from "../assets/images/headphone-4.jpg";

import item1 from "../assets/images/image-1.jpg";
import item2 from "../assets/images/image-2.jpg";
import item3 from "../assets/images/image-3.jpg";
import item4 from "../assets/images/image-4.jpg";
import { Fragment } from "react";

const productsArr = [
  {
    title: "Laptop",
    price: 1299.99,
    imageUrl: {
      image1: laptop1,
      image2: laptop2,
      image3: laptop3,
      image4: laptop4,
    },
    quantity: 1,
    id: 1,
  },
  {
    title: "Watch",
    price: 59.99,
    imageUrl: {
      image1: watch1,
      image2: watch2,
      image3: watch3,
      image4: watch4,
    },
    quantity: 1,
    id: 2,
  },
  {
    title: "Shoes",
    price: 69.99,
    imageUrl: {
      image1: shoe1,
      image2: shoe2,
      image3: shoe3,
      image4: shoe4,
    },
    quantity: 1,
    id: 3,
  },
  {
    title: "Headphone",
    price: 22.99,
    imageUrl: {
      image1: headphone1,
      image2: headphone2,
      image3: headphone3,
      image4: headphone4,
    },
    quantity: 1,
    id: 4,
  },
  {
    title: "item",
    price: 12.99,
    imageUrl: {
      image1: item1,
      image2: item2,
      image3: item3,
      image4: item4,
    },
    quantity: 1,
    id: 5,
  },
];

const ProductDetail = () => {
  const { prodId } = useParams();
  const filteredArray = productsArr.filter((item) => item.id === +prodId);

  return (
    <section>
      <Container>
        <Row className="p-5">
          {filteredArray.map((item) => (
            <Fragment key={item.id}>
              <Col md="5">
                <Carousel className="border ">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={item.imageUrl.image1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={item.imageUrl.image2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={item.imageUrl.image3}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={item.imageUrl.image4}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col md="5">
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Explicabo quod deleniti quia laboriosam aspernatur
                    doloremque debitis natus quo repudiandae expedita.
                  </p>
                </div>
                <div className=" mt-3">
                  <Button className="px-4 fw-bold">Buy </Button>
                  <span className="fs-4 fw-bold ms-4">${item.price}</span>
                </div>
              </Col>
            </Fragment>
          ))}

          <Col md={7} className="py-4">
            <ListGroup className="">
              <div className="mb-3">
                <h4>Customer Reviews</h4>
              </div>
              {Array.from({ length: 5 }).map((item) => (
                <ListGroup.Item key={Math.random()}>
                  <span>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                  </span>
                  <div>
                    <h5>A nice product</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis expedita nihil quibusdam dolorem accusamus omnis
                      molestias nostrum amet, nobis fugiat.
                    </p>
                  </div>
                  <span>Review by Sanjay</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetail;
