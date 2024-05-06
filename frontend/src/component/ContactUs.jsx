import React, { useState } from 'react';
import "./ContactUs.css"; // Corrected import statement
import img from "../pictures/contact12.png"
import Navbar from './Navbar';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission, like sending an email or saving to a database
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Message:', message);
    // Clear form fields after submission
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    <Navbar/>
    <div className="contact-us-container"> 
    <div className='contact_img'>

      <img className='contact_image' src={img} alt='contact_img'/>
    </div>
    <div className='conatct_form'>

     <center>
       <h1 style={{fontSize:"3rem"}}>Contact Us</h1>
      </center>
      <form style={{minWidth:"100%"}} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="phone" id="phone" value={phone} onChange={handlePhoneChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={handleMessageChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default ContactUs;
