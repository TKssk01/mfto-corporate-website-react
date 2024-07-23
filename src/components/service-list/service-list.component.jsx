import React, { useRef, useState } from "react";
import FinanceDollar from "./finance-dollar.png";
import Technology from "./internet.png";
import Investment from "./investment.png";
import Trading from "./trading.png";
import Analytics from "./analytics-1.png";
import "./service-list.styles.scss";

const ServiceList = () => {
  const upper = useRef();
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [activeQuality, setActiveQuality] = useState(0); // 中央の項目をデフォルトでアクティブに

  function cardListItemClicke(e) {
    Array.from(upper.current.children).forEach(
      (child) => (child.className = "cards")
    );
    e.target.closest('.cards').className += " active-card";
  }

  const qualities = [
    {
      title: "In-Depth Knowledge",
      description: "Our team possesses extensive expertise in financial technologies and market trends."
    },
    {
      title: "Excellence & Leadership",
      description: "We are committed to delivering top-quality solutions and leading innovation in the industry."
    },
    {
      title: "Competitive Pricing",
      description: "We offer high-value services at rates that ensure the best return on investment for our clients."
    }
  ];

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
          {qualities.map((quality, index) => (
            <span
              key={index}
              className={activeQuality === index ? 'active' : ''}
              onClick={() => setActiveQuality(index)}
              onMouseEnter={() => setActiveTooltip(index)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {quality.title}
              {activeTooltip === index && (
                <div className="tooltip">
                  {quality.description}
                </div>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;



// import React, { useRef } from "react";

// // import Car from "./car.png";
// import FinanceDollar from "./finance-dollar.png";
// import Technology from "./internet.png";
// import Investment from "./investment.png";
// import Trading from "./trading.png";
// import Analytics from "./analytics-1.png";

// // import Airplane from "./airplane.png";
// // import Rocket from "./rocket.png";
// // import Balloons from "./balloons.png";
// // import Building from "./building.png";

// import "./service-list.styles.scss";

// const ServiceList = () => {
//   const upper = useRef();
//   function cardListItemClicke(e) {
//     Array.from(upper.current.children).map(
//       (child) => (child.className = "cards")
//     );

//     e.target.parentNode.className += " active-card";
//   }

//   return (
//     <div className="service-list">
//       <div ref={upper} className="upper">
//         <div onClick={cardListItemClicke} className="cards">
//           <img src={FinanceDollar} alt="financedollar" />
//           <h1>Finance</h1>
//           <p>Optimize your financial strategy</p>
//           <button>&gt;</button>
//         </div>

//         <div onClick={cardListItemClicke} className="cards">
//           <img src={Technology} alt="technology" />
//           <h1>Technology</h1>
//           <p>Leverage cutting-edge solutions</p>
//           <button>&gt;</button>
//         </div>

//         <div onClick={cardListItemClicke} className="cards active-card">
//           <img src={Investment} alt="investment" />
//           <h1>Investment</h1>
//           <p>Maximize your portfolio returns</p>
//           <button>&gt;</button>
//         </div>

//         <div className="cards" onClick={cardListItemClicke}>
//           <img src={Trading} alt="trading" />
//           <h1>Trading</h1>
//           <p>Execute with precision and speed</p>
//           <button>&gt;</button>
//         </div>

//         <div className="cards" onClick={cardListItemClicke}>
//           <img src={Analytics} alt="analytics" />
//           <h1>Analytics</h1>
//           <p>Gain insights from market data</p>
//           <button>&gt;</button>
//         </div>
//       </div>

//       <div className="lower">
//         <h1>Why Choose Us?</h1>
//         <div className="qualities">
//           <span>In-Depth Knowledge</span>
//           <span>Excellence &amp; Leadership</span>
//           <span>Competitve Pricing</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceList;
