import React, { useRef } from "react";

import Car from "./car.png";
import Airplane from "./airplane.png";
import Rocket from "./rocket.png";
import Balloons from "./balloons.png";
import Building from "./building.png";

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
          <img src={Car} />
          <h1>Finance</h1>
          <p>Ride where ever u want</p>
          <button>&gt;</button>
        </div>

        <div onClick={cardListItemClicke} className="cards">
          <img src={Airplane} />
          <h1>Technology</h1>
          <p>Ride where ever u want</p>
          <button>&gt;</button>
        </div>

        <div onClick={cardListItemClicke} className="cards active-card">
          <img src={Rocket} />
          <h1>Investment</h1>
          <p>Ride where ever u want</p>
          <button>&gt;</button>
        </div>

        <div className="cards" onClick={cardListItemClicke}>
          <img src={Balloons} />
          <h1>Trading</h1>
          <p>Ride where ever u want</p>
          <button>&gt;</button>
        </div>

        <div className="cards" onClick={cardListItemClicke}>
          <img src={Building} />
          <h1>Analytics</h1>
          <p>Ride where ever u want</p>
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
