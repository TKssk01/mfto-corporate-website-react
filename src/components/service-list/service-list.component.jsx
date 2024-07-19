import React, { useRef } from "react";

// import Car from "./car.png";
import FinanceDollar from "./finance-dollar.png";
import Technology from "./internet.png";
import Investment from "./investment.png";
import Trading from "./trading.png";
import Analytics from "./analytics-1.png";

// import Airplane from "./airplane.png";
// import Rocket from "./rocket.png";
// import Balloons from "./balloons.png";
// import Building from "./building.png";

import "./service-list.styles.scss";

const ServiceList = () => {
  const upper = useRef();
  function cardListItemClicke(e) {
    Array.from(upper.current.children).map(
      (child) => (child.className = "cards")
    );

    e.target.parentNode.className += " active-card";
  }

  return (
    <div className="service-list">
      <div ref={upper} className="upper">
        <div onClick={cardListItemClicke} className="cards">
          <img src={FinanceDollar} alt="financedollar" />
          <h1>Finance</h1>
          <p>Optimize your financial strategy</p>
          <button>&gt;</button>
        </div>

        <div onClick={cardListItemClicke} className="cards">
          <img src={Technology} alt="technology" />
          <h1>Technology</h1>
          <p>Leverage cutting-edge solutions</p>
          <button>&gt;</button>
        </div>

        <div onClick={cardListItemClicke} className="cards active-card">
          <img src={Investment} alt="investment" />
          <h1>Investment</h1>
          <p>Maximize your portfolio returns</p>
          <button>&gt;</button>
        </div>

        <div className="cards" onClick={cardListItemClicke}>
          <img src={Trading} alt="trading" />
          <h1>Trading</h1>
          <p>Execute with precision and speed</p>
          <button>&gt;</button>
        </div>

        <div className="cards" onClick={cardListItemClicke}>
          <img src={Analytics} alt="analytics" />
          <h1>Analytics</h1>
          <p>Gain insights from market data</p>
          <button>&gt;</button>
        </div>
      </div>

      <div className="lower">
        <h1>Why Choose Us?</h1>
        <div className="qualities">
          <span>In-Depth Knowledge</span>
          <span>Excellence &amp; Leadership</span>
          <span>Competitve Pricing</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
