import React from 'react';
import Header from '../header/header.component';
import './aboutus.styles.scss'; // スタイルシートをインポート

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-container">
        <div className="about-hero">
          <h1>About Us</h1>
        </div>
        <div className="about-content">
          <p>
            Welcome to our company! We are dedicated to providing the best services
            to our customers. Our team is comprised of industry experts who are passionate
            about what they do. We strive to exceed your expectations and deliver
            outstanding results.
          </p>
          <p>
            Our mission is to make a positive impact on our community and the environment.
            We believe in sustainability, innovation, and integrity in all our business practices.
          </p>
          <p>
            Thank you for choosing us. We look forward to working with you and achieving
            great success together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
