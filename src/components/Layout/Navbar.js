import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="nav-links">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-links">
          <Link to="/store">Store</Link>
        </li>
        <li className="nav-links">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-links">
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
