import "./Footer.css";
import { GrFacebook } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
import { GrSpotify } from "react-icons/gr";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <h1>The Generics</h1>
      </div>
      <div className="footer-icons">
        <GrYoutube className="youtube" />

        <GrSpotify className="spotify" />

        <GrFacebook className="facebook" />
      </div>
    </div>
  );
};

export default Footer;
