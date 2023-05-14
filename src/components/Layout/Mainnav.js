import { Link, useHistory } from "react-router-dom";
import { Navbar, Container, Nav, Button, Modal, Form } from "react-bootstrap";
import ProdContext from "../../store/prodContext";
import { useContext, useState, useRef } from "react";

const Mainnav = (props) => {
  const ctx = useContext(ProdContext);

  const history = useHistory();
  const prodQuantity = ctx.products.length;
  const [show, setShow] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [signIn, setSignIn] = useState(false);

  const onClickHandler = () => {
    setSignIn(!signIn);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    let enteredConfirmPassword;
    if (!signIn) {
      enteredConfirmPassword = confirmPassRef.current.value;
    }

    console.log(enteredEmail, enteredPassword, enteredConfirmPassword);

    const endPointUrl =
      signIn === true
        ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${ctx.apiKey}`
        : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${ctx.apiKey}`;

    try {
      const response = await fetch(endPointUrl, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        ctx.login(data.idToken);
        history.replace("/products");
      } else {
        const errorMessage = data.error.message;
        throw new Error(errorMessage);
      }
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold d-none d-md-block ">
            Our <span className="text-warning fs-3 fw-bold">Store</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Link className="fs-5 fw-bold" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="fs-5 fw-bold" as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link className="fs-5 fw-bold" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="fs-5 fw-bold" as={Link} to="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex">
            {ctx.isLoggedIn ? (
              <Button
                onClick={ctx.logout}
                variant="outline-info"
                className="fw-bold text-dark"
              >
                Log Out
              </Button>
            ) : (
              <Button
                onClick={handleShow}
                variant="outline-info"
                className="fw-bold text-dark"
              >
                Log In
              </Button>
            )}

            <Button
              onClick={props.onShow}
              variant="warning"
              className="ms-4 px-4 fw-bolder text-dark rounded-pill"
            >
              Cart {prodQuantity}
            </Button>
          </div>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} />
            </Form.Group>
            {!signIn && (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.confirmPassword"
              >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" ref={confirmPassRef} />
              </Form.Group>
            )}
            <div className="d-flex flex-column w-100 ">
              <Button type="submit" variant="secondary" onClick={handleClose}>
                {signIn ? "Sign In" : "Sign Up"}
              </Button>

              <a
                onClick={onClickHandler}
                style={{ cursor: "pointer" }}
                className="mx-auto pt-3"
              >
                {signIn
                  ? "First Time, then Sign Up"
                  : "Already a User, then Sign In"}
              </a>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Mainnav;
