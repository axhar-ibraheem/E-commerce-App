import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Footer from "../components/Layout/Footer";
import { useRef } from "react";

const ContactUs = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneNoRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNo: phoneNoRef.current.value,
    };

    try {
      const response = await fetch(
        "https://react-http-4a6c0-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          body: JSON.stringify(details),
        }
      );
      // console.log(response.ok);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <section>
        <Container className="py-5">
          <Row className="justify-content-center mx-2 mx-md-0  ">
            <div className="text-center mb-4">
              <h1 className="fw-bold">
                Contact <span className="text-info">Us</span>{" "}
              </h1>
            </div>
            <Col lg="4" className=" px-3 ">
              <div className="">
                <h3 className="fw-bold">Contact Information</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                  vitae repudiandae consequatur saepe ullam vel, commodi id
                  nostrum fuga sapiente!
                </p>
              </div>
              <div className="py-3">
                <i className="bi bi-envelope-at-fill me-2 text-info"></i>
                <span>example@gmail.com</span>
              </div>
              <div className="py-3">
                <i className="bi bi-telephone-fill me-2 text-info"></i>
                <span>0123456789</span>
              </div>
              <div className="py-3">
                <i className="bi bi-geo-alt-fill me-2 text-info"></i>
                <span>Old Plaza, Palladium Street, Kashmir.</span>
              </div>
            </Col>
            <Col lg="6" className="p-3">
              <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control
                    ref={nameRef}
                    type="text"
                    placeholder="Enter Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">Email address</Form.Label>
                  <Form.Control
                    ref={emailRef}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhonenumber">
                  <Form.Label className="fw-bold">Phone Number</Form.Label>
                  <Form.Control
                    ref={phoneNoRef}
                    type="number"
                    placeholder="Phone Number"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
