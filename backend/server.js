const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your email credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mufizmalar@gmail.com", // your email
    pass: "ykkq zxqp lwun zyjw",   // Gmail app password
  },
});

app.post("https://my-backend.onrender.com/send-mail", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Send email to admin
    await transporter.sendMail({
      from: email,
      to: "target-email@gmail.com", 
      subject: `Customer contact from Afera Plywood from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Respond immediately to frontend
    res.status(200).json({ success: true, message: "Message sent successfully!" });

    // Send thank-you email to the user after 20 seconds
    setTimeout(async () => {
      try {
        await transporter.sendMail({
          from: "mufizmalar@gmail.com",
          to: email,
          subject: "Thank you for contacting Afera Plywood!",
          html: `
            <p>Hi ${name},</p>
            <p>Thank you for reaching out to Afera Plywood. We have received your message and will get back to you shortly.</p>
            <p>Best regards,<br/>Afera Plywood Team</p>
          `,
        });
        console.log(`Thank you email sent to ${email}`);
      } catch (err) {
        console.error("Failed to send thank-you email:", err);
      }
    }, 20000); // 20 seconds delay

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
