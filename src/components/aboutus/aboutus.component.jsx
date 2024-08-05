import React from 'react';
// import Header from '../header/header.component';
import './aboutus.styles.scss'; // スタイルシートをインポート
import AboutUsImage from '../../assets/images/about-us-image.jpg';


const About = () => {
  return (
    <div className="aboutus">
      <div className="aboutus__container">
        <h1 className="aboutus__title">About MFTO</h1>
        
        <div className="aboutus__main-visual">
          <img src={AboutUsImage} alt="MFTO Visual Representation" className="aboutus__main-image" />
        </div>

        <section className="aboutus__section">
          <h2 className="aboutus__section-title">Our Mission</h2>
          <p>
            At MFTO.Inc, we are dedicated to transforming the landscape of financial trading. We combine advanced technology with deep financial expertise to empower investors with sophisticated, data-driven strategies.
          </p>
          <p>
            Our goal is to maximize returns while minimizing risks for our clients.
          </p>
        </section>

        <section className="aboutus__section">
          <h2 className="aboutus__section-title">Our Approach</h2>
          <ul className="aboutus__approach-list">
            <li><strong>Advanced Algorithms:</strong> We leverage state-of-the-art financial engineering and machine learning techniques.</li>
            <li><strong>Risk Management:</strong> Our robust protocols are designed to protect and grow your investments.</li>
            <li><strong>Client-Centric Solutions:</strong> We tailor our systems to meet the unique needs of each investor.</li>
          </ul>
        </section>

        <section className="aboutus__section">
          <h2 className="aboutus__section-title">Our Story</h2>
          <p>
            MFTO.Inc was founded by a visionary with a unique background in accounting, law, and investing. Driven by a passion to revolutionize the financial industry, our founder developed innovative trading theories that form the core of our business.
          </p>
          <p>
            Today, we continue to push the boundaries of algorithmic trading, always focusing on providing our clients with the most sophisticated and effective trading solutions available.
          </p>
        </section>

        <section className="aboutus__section">
          <h2 className="aboutus__section-title">Join Us</h2>
          <p>
            We're always looking for talented individuals to join our team. Whether you're an experienced professional or just starting your career in fintech, we offer exciting opportunities to make your mark in the world of financial technology.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;