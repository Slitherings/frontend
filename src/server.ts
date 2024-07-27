import express from 'express';
import nodemailer from 'nodemailer';

// Create an Express application
const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: 'smtp.yahoo.com',
    port: 587,
    secure: false,
    auth: {
        user:"",
        pass:""
    }
});

app.post('/send-email', (req, res) => {
    const { email, phoneNumber, message } = req.body;
  
    const mailOptions = {
      from: 'JaylenCooper123@yahoo.com',
      to: 'JaylenCooper123@yahoo.com',
      subject: 'New message from contact form',
      text: `Email: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send({ message: 'Error sending email' });
      } else {
        console.log('Email sent: ' + info.response);
        res.send({ message: 'Email sent successfully' });
      }
    });
  });

// Set the port number for the server
const port = 5000;

// Define a route for the root path ('/')
app.get('/', (req, res) => {
  // Send a response to the client
  res.send('Hello, TypeScript + Node.js + Express!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});