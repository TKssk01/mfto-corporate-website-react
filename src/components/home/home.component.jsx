import React, { useState, useEffect } from "react";
import "./home.styles.scss";

const Home = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      {/* ここから追加されとる */}
      <div className="content-wrapper">
        <h1 className={`heading reveal-text ${isRevealed ? 'active' : ''}`}>
          Ready for smart financial future!
        </h1>
        <p className={`para reveal-text ${isRevealed ? 'active' : ''}`}>
          Empowering investors with cutting-edge algorithms and thoughtful 
          user experience. We make intelligent trading accessible, 
          turning complex data into actionable insights.
        </p>
      </div>
    </div>
  );
};

export default Home;