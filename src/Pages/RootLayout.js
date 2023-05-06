import Navbar from "../components/Layout/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      {/* <Footer></Footer> */}
    </>
  );
};

export default RootLayout;
