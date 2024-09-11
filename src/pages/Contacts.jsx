import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../style/Contacts.css';
import bird from '../assets/image/bird.jpg';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_r7h6qyb'; // Replace with your EmailJS Service ID
    const templateID = 'template_g9oo6mv'; // Replace with your EmailJS Template ID
    const userID = 'me'; // Replace with your EmailJS User ID

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to send message, please try again later.');
      });

    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="Contacts-container">
      <div>
        <h1 className="connect">Let's Connect...</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Subject</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />

          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="vertical-line1"></div>

      {/* Image on the right side */}
      <div className="bird-image">
        <img src={bird} alt="Bird" />
      </div>
    </div>
  );
};

export default Contacts;
