import Footer from "../components/Layout/Footer";
import { BsPlayCircle } from "react-icons/bs";
import "./Home.css";

const tourItems = [
  {
    id: "m1",
    tourDate: "JUL 16",
    tourPlace: "DETROIT, MI",
    tourDetails: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: "m2",
    tourDate: " JUL 19",
    tourPlace: "TORONTO,ON",
    tourDetails: "BUDWEISER STAGE",
  },
  {
    id: "m3",
    tourDate: "JUL 22",
    tourPlace: "BRISTOW, VA",
    tourDetails: "JIGGY LUBE LIVE",
  },
  {
    id: "m4",
    tourDate: "JUL 15",
    tourPlace: "PHOENIX, AZ",
    tourDetails: "AK-CHIN PAVILION",
  },
  {
    id: "m5",
    tourDate: "JUL 06",
    tourPlace: "LAS VEGAS, NV",
    tourDetails: "T-MOBILE ARENA",
  },
  {
    id: "m6",
    tourDate: "JUL 17",
    tourPlace: "CONCORD, CA",
    tourDetails: "CONCORD PAVILION",
  },
];

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="content-title">The Generics</h1>

          <button className="content-btn">get our latest album</button>

          <div>
            <BsPlayCircle className="play-icon" />
          </div>
        </div>
      </div>
      <div className="tour-container">
        <div className="tour-content">
          <div className="tour-heading">
            <h1>Tours</h1>
          </div>

          <ul>
            {tourItems.map((item) => (
              <li key={item.id} className="tour-item">
                <span className="tour-date date-cell ">{item.tourDate}</span>
                <span className="tour-place place-cell">{item.tourPlace}</span>
                <span className="tour-title title-cell">{item.tourDetails}</span>
                <button className="tour-btn btn-cell">Buy Tickets</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
