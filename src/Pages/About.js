import Header from "../components/Layout/Header";
import "./About.css";
import Footer from "../components/Layout/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="simple-text">
        <h1 className="about-title">About</h1>
        <img src={require("../assets/images/image-6.jpg")} alt="a watch" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt neque
          iusto assumenda provident similique? Omnis nam dolore quasi magni
          suscipit dolorem unde at ex, sequi nobis similique quam optio minus
          expedita? Dolores minima ab quis voluptates. Ipsam aliquam quo magni
          libero, dolores expedita? Assumenda a porro sit dignissimos, quisquam
          necessitatibus dolor iste in tenetur temporibus cupiditate delectus
          debitis eligendi doloremque unde quas ducimus officia fugiat quos.
          Quisquam nisi accusantium veniam eligendi, et, delectus pariatur a
          minus corrupti corporis, optio esse vitae perferendis. Aut consectetur
          quibusdam eveniet facilis officiis ipsum sint, debitis aspernatur
          vitae quos dolorum assumenda recusandae voluptatum architecto natus
          autem esse similique accusamus dolore inventore non? Consectetur
          officia praesentium ipsam voluptatum consequuntur est! Officiis quam
          impedit consequatur veritatis delectus optio amet eos saepe eligendi
          dolorum aut, voluptatibus facere adipisci et porro similique! Harum
          suscipit expedita voluptas illo adipisci ratione dolor, amet
          necessitatibus minima unde omnis, recusandae nesciunt cumque aliquam!
          Corrupti iure quia sed, accusantium magnam rem quos tempore
          necessitatibus atque sint. Nostrum saepe esse facilis earum voluptas
          nobis reiciendis minus quidem optio aperiam magnam obcaecati
          reprehenderit illum, velit eveniet quaerat, expedita et ipsum atque
          culpa ducimus necessitatibus incidunt animi. Dolore obcaecati sint
          officiis sed rem, tempora eligendi iusto labore.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
