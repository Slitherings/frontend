import React, { useState } from 'react';
import './ContactMe.css' // Import your CSS file for styling

const ContactMe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can perform client-side validation of the input fields
    // and send the data to your backend for further processing
    // Sending emails should be handled on the server-side.
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Message:', message);
    // Clear the form fields after submission
    setEmail('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 style={{color:'white'}}>Contact Me Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" style={{color:'white'}}>Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" style={{color:'white'}}>Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" style={{color:'white'}}>Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
