import Header from "./components/Layout/Header";
import SectionMerch from "./components/Layout/SectionMerch";
import SectionMusic from "./components/Layout/SectionMusic";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
const App = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <Header></Header>
      </header>
      <SectionMusic></SectionMusic>
      <SectionMerch></SectionMerch>
      <Footer></Footer>
    </>
  );
};

export default App;
