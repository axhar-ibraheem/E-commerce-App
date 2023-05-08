import "./ContactUs.css";
import Footer from "../components/Layout/Footer";
import { useRef } from "react";

const ContactUs = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneNoRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNo: phoneNoRef.current.value,
    };

    try {
      const response = await fetch(
        "https://react-http-4a6c0-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          body: JSON.stringify(details),
        }
      );
      // console.log(response.ok);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div className="contact-container">
        <form onSubmit={onSubmitHandler} className="contact-form">
          <div className="contact-title">
            <h1>contact us</h1>
          </div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" ref={nameRef} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" ref={emailRef} />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            ref={phoneNoRef}
          />
          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
