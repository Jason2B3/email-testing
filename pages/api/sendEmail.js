import * as emailjs from "emailjs-com";

export default async function handler(req, res) {
  const { email } = req;
  const data = {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
    user_id: process.env.EMAILJS_USER_ID,
    template_params: {
      target: email,
      message: "915GHT",
      from_name: "Jason2B3",
    },
  };

  let sendMail;
  try {
    sendMail = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(sendMail);
    // console.log("success! Email's been sent");
  } catch (errorObj) {
    console.log(errorObj);
  }
  res.status(200).json({ name: "John Doe" });
}
