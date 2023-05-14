import React, { useRef, useState, useContext } from "react";
import ProdContext from "../store/prodContext";
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col, Container, Spinner } from "react-bootstrap";
const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const [signIn, setSignIn] = useState(true);
  const ctx = useContext(ProdContext);
  const history = useHistory();
  const onClickHandler = () => {
    setSignIn(!signIn);
  };

  const content = (
    <Spinner animation="border" role="status" variant="dark">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    let enteredConfirmPassword;
    if (!signIn) {
      enteredConfirmPassword = confirmPassRef.current.value;
    }

    if (enteredConfirmPassword !== enteredPassword && !signIn) {
      alert("Passwords didn't match");
      setIsLoading(false);
      return;
    }

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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center pt-5">
        <Col md={5}>
          <Form onSubmit={onSubmitHandler} className="border p-4 shadow">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.password">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} />
            </Form.Group>
            {!signIn && (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.confirmPassword"
              >
                <Form.Label className="fw-bold">Confirm Password</Form.Label>
                <Form.Control type="password" ref={confirmPassRef} />
              </Form.Group>
            )}
            <div className="d-flex flex-column w-100 ">
              {signIn ? (
                <Button type="submit" variant="success">
                  {isLoading ? content : "Sign In"}
                </Button>
              ) : (
                <Button type="submit" variant="info" className="fw-bold">
                  {" "}
                  {isLoading ? content : "Sign Up"}
                </Button>
              )}

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
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
