const sgMail = require("@sendgrid/mail");

export default async function handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { email } = req.body;

  const msg = {
    to: email, // Change to your recipient
    from: "jason2b3@gmail.com", // Change to your verified sender
    subject: "insert generic subject line",
    text: "Junebug",
    // Place email template in HTML form below
    html: "<p>Secret code is GHF568</p>",
  };
  const request = await sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ message: "Email sent" });
    })
    .catch((error) => {
      console.error(error.text);
    }); // returns nothing- just sends an email
}
