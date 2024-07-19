import React from "react";

import "./footer.styles.scss";

// import FacebookIcon from "@material-ui/icons/Facebook";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import YouTubeIcon from "@material-ui/icons/YouTube";

// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => (
  <div className="footer">
    <div className="part1">
      <div className="about-web">
        <h1>MFTO</h1>
        <p>
          MFTO.Inc pioneers automated trading and financial analytics, blending 
          advanced technology with financial expertise to deliver innovative 
          client solutions.
        </p>
        <div className="social-media-links">
          {/* <div className="icons">
            <TwitterIcon />
          </div> */}

          <div className="icons">
            <a 
              href="https://www.linkedin.com/company/mfto-inc" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
 
          {/* <div className="icons">
            <YouTubeIcon />
          </div> */}
        </div>
      </div>
      <div className="services-list">
        <h1>Services</h1>
        <div className="list">
          <p>
            <span>&gt;</span>
            <span>Auto Trading Systems</span>
          </p>

          <p>
            <span>&gt;</span>
            <span>System Development</span>
          </p>

          <p>
            <span>&gt;</span>
            <span>Application Development</span>
          </p>

          <p>
            <span>&gt;</span>
            <span>Research</span>
          </p>

          <p>
            <span>&gt;</span>
            <span>Consulting</span>
          </p>
        </div>
      </div>
      <div className="outlook">
        <h1>Quick Links</h1>
        <div className="list">
          <p>
            <span>&gt;</span>
            <span>Request Demo</span>
          </p>

          <p>
            <span>&gt;</span>
            <span>Investment Strategies</span>
          </p>

          <p>
            <span>&gt;</span>
            <span>Careers</span>
          </p>

          {/* <p>
            <span>&gt;</span>
            <span>Event &amp; Events</span>
          </p>
          <p>
            <span>&gt;</span>
            <span>Careers</span>
          </p> */}
        </div>
      </div>
      <div className="subscribe">
        <h1>Get Reports</h1>
        <p>
          Unlock the power of MFTO's proprietary trading algorithms. 
          Request our free in-depth report and discover how we're revolutionizing 
          the financial landscape through innovative technology.
        </p>
        <div className="inp">
          <input type="text" placeholder="Your Email address" />
          <span>&gt;</span>
        </div>
      </div>
    </div>
    <div className="part2">
      <div className="links">
        <span>Terms &amp; Conditions</span>
        <span>Privacy Policy</span>
        <span>Contact Us</span>
      </div>

      <p>
        Developed by <span>T.S.</span>
      </p>
    </div>
  </div>
);

export default Footer;
