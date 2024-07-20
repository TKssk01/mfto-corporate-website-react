import React from 'react';
import Header from '../header/header.component';
import './contact-us.styles.scss'; // スタイルシートをインポート

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="contact-us-container">
        <div className="contact-us-hero">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-us-content">
          <p>
            We would love to hear from you! Whether you have a question about our services,
            pricing, or anything else, our team is ready to answer all your questions.
          </p>
          <p>
            You can reach us through the following contact details:
          </p>
          <ul>
            <li>Email: rapidtech.b@gmail.com</li>
            <li>Phone: (+1) 857-999-8427</li>
            <li>Address: Cambridge, MA</li>
          </ul>
          <p>
            Our office hours are Monday to Friday, 9 AM to 5 PM. We strive to respond
            to all inquiries within 24 hours on business days.
          </p>
          <p>
            Thank you for reaching out to us. We look forward to connecting with you!
          </p>
        </div>
        <div className="contact-form">
          <h2>Contact Form</h2>
          <p>Please fill out the form below with the necessary details.</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name <span className="required">*</span></label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input type="email" id="email" name="email" required />
              <small>example@example.com</small>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message <span className="required">*</span></label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
