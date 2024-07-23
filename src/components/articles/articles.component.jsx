import React from "react";

import "./articles.styles.scss";

const Articles = () => (
  <div className="articles">
    <div className="founder">
      <h1> Innovation in fintech is driven by understanding market dynamics.</h1>
      <p>
        In the world of algorithmic trading, success comes from blending 
        cutting-edge technology with deep financial insights.
      </p>
      <p>Our goal is to create trading systems that adapt to the market, not just follow it.</p>
      <div className="about-founder">
        <span>Rei S</span>
        <p>Founder &amp; Diretor</p>
      </div>
    </div>

    <div className="articles-container">
      <div className="card">
        <div className="image">
          <img
            src="https://plus.unsplash.com/premium_photo-1661756423422-4486e27eb6dd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="building"
          />{" "}
          <button>Read More</button>
        </div>
        <h1>WHO WE ARE</h1>
        <p>
          At MFTO, we combine advanced algorithms with financial expertise 
          to pioneer innovative automated trading systems. Our team delivers 
          cutting-edge market insights, revolutionizing fintech.
        </p>
        <button>&gt;</button>
      </div>

      <div className="card">
        <div className="image">
          <img
            src="https://plus.unsplash.com/premium_photo-1683141154082-324d296f3c66?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="home"
          />
          <button>Read More</button>
        </div>
        <h1>OUR APPROACH</h1>
        <p>
          Our advanced algorithms analyze real-time market data to optimize 
          trading strategies, maximizing returns while effectively 
          managing risk in dynamic markets.
        </p>
        <button>&gt;</button>
      </div>
    </div>
  </div>
);

export default Articles;
