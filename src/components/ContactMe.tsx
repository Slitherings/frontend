import React, { useState } from 'react';
import './ContactMe.css' // Import your CSS file for styling

const ContactMe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, phoneNumber, message })
      });
      if (response.ok) {
        const data = await response.text();
        setModalMessage(data); // Set the message from the server
        setShowModal(true); // Show the modal
        // Clear the form fields after successful submission
        setEmail('');
        setPhoneNumber('');
        setMessage('');
      } else {
        const errorMessage = await response.text(); // Get the error message from the response
        setModalMessage(errorMessage); // Set the error message
        setShowModal(true); // Show the error modal
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact-container">
      <h2 style={{color:'greenyellow', justifySelf:'center'}}>Under Construction</h2>
      <br></br>
      <h2 style={{color:'white', justifySelf:'center'}}>Email @ JaylenCooper123@yahoo.com</h2>
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
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <p>{modalMessage}</p>
                <button onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
