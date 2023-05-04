import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="nav-links">
          <a href="#">Home</a>
        </li>
        <li className="nav-links">
          <a href="#">Store</a>
        </li>
        <li className="nav-links">
          <a href="#">About</a>
        </li>
        <a className="cartstore" href="#">
          Cart
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
