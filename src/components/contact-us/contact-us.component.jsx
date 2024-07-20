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
            <li>Email: contact@company.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 1234 Street Name, City, State, ZIP</li>
          </ul>
          <p>
            Our office hours are Monday to Friday, 9 AM to 5 PM. We strive to respond
            to all inquiries within 24 hours on business days.
          </p>
          <p>
            Thank you for reaching out to us. We look forward to connecting with you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
