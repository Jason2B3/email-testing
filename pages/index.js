import React, { useRef } from "react";
import classes from "../components/index.module.scss";
import * as emailjs from "emailjs-com";

function Signup() {
  // (function () {
  //   emailjs.init("user_de0gPeS6T4kxFW32nbdfU");
  // })();
  const emailInput1 = useRef();
  const emailInput2 = useRef();
  // If online, redirect to /secret

  const submitFront = async function () {
    const email1 = emailInput1.current.value;
    const templateParams = {
      target: email1,
      message: "915GHT",
      from_name: "Jason2B3",
    };

    const sendMail= await emailjs
      .send(
        "service_dsyq5ji",
        "template_o2exrwa",
        templateParams,
        "user_de0gPeS6T4kxFW32nbdfU"
      )
    console.log(sendMail) // if success {status: 200, text: 'OK'} 
    if(sendMail.status === 200) alert("success")
    else alert ('failure')
    
  };

  const submitBack = async function () {
    alert("feature not yet implemented");
    return;
    //% Make a request to sendVerificationEmail API route
    const res = await fetch("/api/auth/credentials/sendVerificationEmail", {
      method: "POST",
      body: JSON.stringify({ email1 }),
      headers: { "Content-Type": "application/json" },
    });
    const parsed = await res.json(); // returns a hashed PIN if successful
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
