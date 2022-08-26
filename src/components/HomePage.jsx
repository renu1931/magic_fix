import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import image1 from "../images/image1.webp";
import gift_box from "../images/gift_box.png";
import BrideGroom from "./BrideGroom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomePage() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qf0wuua",
        "template_2yyry2k",
        e.target,
        "dEtlBLxtNvnbe93oG"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  }
  const diffToast = () => {
    toast.success("Registration Sucessfully!", {
      position: "top-center",
    });
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <div
        id="mmw-img-div"
        style={{
          backgroundImage: "url(" + image1 + ")",
        }}
      >
        <div className="container-fluid " id="mmw-main-container">
          <div className="d-flex ml-5 pt-2">
            <h3 className="magic-fix-info">
              <i className="fa-solid fa-phone"></i> (+91)9354311177
            </h3>
            <h3 className="magic-fix-info">
              <i className="fa-solid fa-envelope"></i> jangsher.gill@gmail.com
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
              <Link to="/form">
                <button type="button" id="mmw-div-h2-btn">
                  Register
                </button>
              </Link>
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
                  ></input>
                </div>

                <div>
                  <input
                    placeholder="Phone Number"
                    id="input1"
                    maxLength={10}
                    name="phone"
                    defaultValue=""
                    onChange={(e) => setPhone(e.target.value)}
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
                  onClick={diffToast}
                  disabled={!name || !email || !Phone || !message}
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
      <ToastContainer />
      <BrideGroom />
    </div>
  );
}
