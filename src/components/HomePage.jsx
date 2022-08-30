import React, { useState } from "react";
import emailjs from "emailjs-com";
import image4 from "../images/image5.jpg";
import gift_box from "../images/gift_box.png";
import BrideGroom from "./BrideGroom";
import "react-toastify/dist/ReactToastify.css";
import CoupleSlider from "./CoupleSlider";
import Trusted from "./Trusted";
import Footer from "./Footer";
import Form from "./Form";

export default function HomePage() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lgxvguv",
        "template_xl2c2ux",
        e.target,
        "8v4lamk1zTkTJbBSl"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  }
  const scrollUp = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <div
        id="mmw-img-div"
        style={{
          backgroundImage: "url(" + image4 + ")",
        }}
      >
        <div className="container-fluid " id="mmw-main-container">
          <div className="d-flex ml-5 pt-2">
            <h3 className="magic-fix-info">
              <a href="tel:9354311177" id="magic-fix-a">
                <i className="fa-solid fa-phone"></i> (+91)9354311177
              </a>
            </h3>
            <h3 className="magic-fix-info">
              <a href="mailto:support@gillwebs.com" id="magic-fix-a">
                <i className="fa-solid fa-envelope"></i> jangsher.gill@gmail.com
              </a>
            </h3>
          </div>
          <div className="d-flex ml-5">
            <img src={gift_box} alt="my-pic" id="mmw-logo" />
            <h3 id="magic-fix">Magic Fix</h3>
          </div>
          <div className="row pl-5">
            <div className="col-md-6 py-5" data-aos="fade-up">
              <p id="mmw-div-h2-p1">Matrimonial Search.</p>
              <h2 id="mmw-div-h2">Your search for the perfect</h2>
              <h2 id="magic-fix-h2">match ends here!</h2>
              <p id="mmw-div-h2-p">
                BeChoosy with India’s Biggest Matrimony Service. Magic Fix is
                one of India’s leading matrimonial websites that has helped
                lakhs of members find their perfect life partner.
              </p>

              <button type="button" id="mmw-div-h2-btn" onClick={scrollUp}>
                Register
              </button>
            </div>
            <div className="col-md-5 pt-5" id="input-div" data-aos="fade-up">
              <h4 id="input-h4">Register & Join</h4>
              <h6 id="input-h6">Magic Fix</h6>
              <form onSubmit={sendEmail}>
                <div id="login-img-1">
                  <input
                    type="text"
                    placeholder="Name"
                    id="input"
                    name="name"
                    defaultValue=""
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Enter Email"
                    id="input1"
                    defaultValue=""
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                </div>

                <div>
                  <input
                    placeholder="Phone Number"
                    id="input1"
                    type="phone"
                    name="phone"
                    defaultValue=""
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="message"
                    placeholder="Describe your self  or  ask us a question"
                    id="input2"
                    defaultValue=""
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <br></br>

                <input
                  type="submit"
                  value="Submit"
                  id="input-btn"
                  onClick={scrollUp}
                  disabled={!name || !email || !phone || !message}
                />

                <br />
                <p id="magic-fix-terms-conditions">
                  By registering, you agree to our
                  <span>Terms & Conditions</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Form name={name} email={email} phone={phone} message={message} />
      <BrideGroom />
      <CoupleSlider />
      <Trusted />

      <Footer />
    </div>
  );
}
