import "./Navbar.css";

const Navbar = (props) => {
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
          Cart <span> 0</span>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
