import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="text-center py-3">
      <h2 className="fs-1">
        Our <span className="text-warning">Store</span>{" "}
      </h2>
    </Container>
  );
};

export default Header;
