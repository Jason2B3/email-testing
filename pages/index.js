import React, { useRef, useState } from "react";
import classes from "../components/index.module.scss";
import * as emailjs from "emailjs-com";

function Signup() {
  const emailInput1 = useRef();
  const emailInput2 = useRef();

  // Send an email from the client side
  // BE AWARE: Your private keys from the EmailJS account are exposed this way
  const submitFront = async function (e) {
    e.preventDefault();
    const email1 = emailInput1.current.value;
    const templateParams = {
      target: email1,
      message: "915GHT",
      from_name: "Jason2B3",
    };
    let sendMail;
    try {
      sendMail = await emailjs.send(
        "service_dsyq5ji",
        "template_o2exrwa",
        templateParams,
        "user_de0gPeS6T4kxFW32nbdfU"
      );
      if (sendMail.status !== 200) throw new Error(sendMail.text);
      alert("success! Email's been sent");
    } catch (errorObj) {
      console.log(errorObj);
      alert(errorObj.text);
    }
  };

  //% Make a request to sendVerificationEmail API route
  const submitBack = async function () {
    const email2 = emailInput2.current.value;
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify({ email: email2 }),
      headers: { "Content-Type": "application/json" },
    });
    const parsed = await res.json();
    if(parsed.message==="Email sent") alert("Success operations")
    return;
  };
  
  return (
    <section className={classes.container}>
      <h2>EMAIL TESTING</h2>

      <div className={`${classes.container} ${classes.container2}`}>
        <label className={classes.left}>
          Send email to this address from front-end:
        </label>
        <input
          ref={emailInput1}
          className={classes.inp}
          placeholder="name@work-email.com"
        />
        <button onClick={submitFront} className={classes.btn3}>
          Send email from front-end
        </button>

        <label className={classes.left}>
          Send email to this address from backend:
        </label>
        <input
          ref={emailInput2}
          className={classes.inp}
          placeholder="name@work-email.com"
        />
        <button onClick={submitBack} className={classes.btn3}>
          Send email from backend
        </button>
      </div>
    </section>
  );
}

export default Signup;
