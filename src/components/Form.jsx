import React from "react";
import emailjs from "emailjs-com";

function Form() {
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
  }
  return (
    <>
      <form onSubmit={sendEmail}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email
          <input type="email" name="user_email" />
        </label>
        <br />
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}
export default Form;
