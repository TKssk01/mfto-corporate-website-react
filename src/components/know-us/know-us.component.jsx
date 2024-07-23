import React from "react";
import "./know-us.styles.scss";

const KnowUs = () => (
  <div className="know-us">
    <div className="images">
      <div className="image image1">
        <img
          src="https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=1555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="3rd"
        />
      </div>
      <div className="image image2">
        <img
          src="https://images.unsplash.com/photo-1526328828355-69b01701ca6a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80"
          alt="2nd"
        />
      </div>
      <div className="image image3">
        <img
          src="https://images.unsplash.com/photo-1581404528764-2d2d2e39db02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
          alt="1st"
        />
      </div>
    </div>
    <div className="paragraph">
      <p>
        MFTO Inc. is an innovative startup company that develops and operates 
        system trading methods using proprietary algorithms, combining cutting-edge 
        financial engineering with advanced technology. Our mission is to provide 
        investors with optimized trading strategies, maximizing the efficiency 
        and profitability of their investments.
      </p>
      <p>
        Our challenge is to solve latent problems in the world using every method 
        at our disposal, and our vision is to tackle the complexity of financial markets
         - our area of expertise - and pave the way for the future of investment through 
        the power of technology. With its headquarters in Japan and an office in Boston, 
        MFTO Inc. provides innovative solutions to investors operating in global financial markets.
      </p>
    </div>
  </div>
);

export default KnowUs;
