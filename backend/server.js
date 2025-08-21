const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// CORS
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

app.use(express.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact route
app.post("/send-mail", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Please fill all required fields." });
  }

  try {
    // Send email to admin
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Customer contact from Afera Plywood: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    res.status(200).json({ success: true, message: "Message sent successfully!" });

    // Optional: Send thank-you email to user after 20 seconds
    setTimeout(async () => {
      try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: "Thank you for contacting Afera Plywood!",
          html: `
            <p>Hi ${name},</p>
            <p>Thank you for reaching out to Afera Plywood. We have received your message and will get back to you shortly.</p>
            <p>Best regards,<br/>Afera Plywood Team</p>
          `
        });
        console.log(`Thank-you email sent to ${email}`);
      } catch (err) {
        console.error("Failed to send thank-you email:", err);
      }
    }, 20000);

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

// Dynamic port for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
