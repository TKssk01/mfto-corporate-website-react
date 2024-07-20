import React from 'react';
// import Header from '../header/header.component';
import './aboutus.styles.scss'; // スタイルシートをインポート

const About = () => {
  return (
    <div className="aboutus">
      <div className="aboutus__container">
        <h1 className="aboutus__title">About MFTO</h1>
        
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

// const About = () => {
//   return (
//     <div>
//       <Header />
//       <div className="about-container">
//         <div className="about-hero">
//           <h1>About Us</h1>
//         </div>
//         <div className="about-content">
//           <p>
//             Welcome to our company! We are dedicated to providing the best services
//             to our customers. Our team is comprised of industry experts who are passionate
//             about what they do. We strive to exceed your expectations and deliver
//             outstanding results.
//           </p>
//           <p>
//             Our mission is to make a positive impact on our community and the environment.
//             We believe in sustainability, innovation, and integrity in all our business practices.
//           </p>
//           <p>
//             Thank you for choosing us. We look forward to working with you and achieving
//             great success together.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

