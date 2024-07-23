import React from "react";

import Map from "./map2.png";

import "./about-clients.styles.scss";

const AboutClient = () => (
  <div className="about-clients">
    <div className="statistics">
      <div className="stats">
        <span>10+</span>
        <span>Global Markets Accessed</span>
      </div>
      <div className="stats">
        <span>100+</span>
        <span>Trades Executed Daily</span>
      </div>
      <div className="stats">
        <span>24/7</span>
        <span>Market Monitoring</span>
      </div>
      <div className="stats">
        <span>100%</span>
        <span>Professional Approach</span>
      </div>
    </div>
    <img src={Map} alt="world-map" />
  </div>
);

export default AboutClient;


{/* <div className="stats">
<span>10+</span>
<span>Global Markets Accessed</span>
</div>
<div className="stats">
<span>1000+</span>
<span>Trades Executed Daily</span>
</div>
<div className="stats">
<span>99.9%</span>
<span>System Uptime</span>
</div>
<div className="stats">
<span>24/7</span>
<span>Market Monitoring</span>
</div> */}