const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({ email, subject, message }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "a.reehanroshan91@gmail.com",
        pass:"obnu lmzt zhfq mdrw",
      },
    });

    const mail_configs = {
      from: "a.reehanroshan91@gmail.com",
      to: email,
      subject: `Application for ${subject} Position` ,
      html: `
      <p>Dear ${message},</p>
      <p>Thank you for your interest in  Skcript. We appreciate the time and effort you put into submitting your application.</p>
      <p>We are impressed with your qualifications and experience, and we would like to invite you to interview with us. Your application has successfully passed our initial screening process, and we believe that you have the potential to make valuable contributions to our team.</p>
      <p>Best Regards</p>
      `,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occurred` });
      }
      return resolve({ message: "Email sent successfully" });
    });
  }); 
}

app.get("/", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`mailer is listening at http://localhost:${port}`);
});
