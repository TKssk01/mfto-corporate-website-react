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
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
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
            src="https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
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
