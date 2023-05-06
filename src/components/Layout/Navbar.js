import "./Navbar.css";
import { Link } from "react-router-dom";
import ProdContext from "../../store/prodContext";
import { useContext } from "react";

const Navbar = (props) => {
  const ctx = useContext(ProdContext);

  const totalQuantity = ctx.products.length;
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
        {/* <Link onClick={props.onShow} className="cartstore" to="#Cart">
          Cart <span>{totalQuantity}</span>
        </Link> */}
      </ul>
    </nav>
  );
};

export default Navbar;
