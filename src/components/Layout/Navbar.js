import "./Navbar.css";
import ProdContext from "../../store/prodContext";
import { useContext } from "react";

const Navbar = (props) => {
  const ctx = useContext(ProdContext);

  const totalQuantity = ctx.products.length;
  return (
    <nav>
      <ul className="navbar">
        <li className="nav-links">
          <a href="#Home">Home</a>
        </li>
        <li className="nav-links">
          <a href="#Store">Store</a>
        </li>
        <li className="nav-links">
          <a href="#About">About</a>
        </li>
        <a onClick={props.onShow} className="cartstore" href="#Cart">
          Cart <span>{totalQuantity}</span>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
