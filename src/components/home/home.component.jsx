// import React from "react";
// import "./home.styles.scss";

// const Home = () => {
//   return (
//     <div className="home">
//       <h1 className="heading">Ready for a smart financial future!</h1>
//       <p className="para">
//         Empowering investors with cutting-edge algorithms and thoughtful 
//         user experience. We make intelligent trading accessible, 
//         turning complex data into actionable insights.
//       </p>
//       {/* <button>
//         <p>Know more!</p>
//       </button> */}
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import "./home.styles.scss";

const Home = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // コンポーネントがマウントされた後、少し遅延してアニメーションを開始
    const timer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <h1 className={`heading reveal-text ${isRevealed ? 'active' : ''}`}>
        Ready for a smart financial future!
      </h1>
      <p className={`para reveal-text ${isRevealed ? 'active' : ''}`}>
        Empowering investors with cutting-edge algorithms and thoughtful 
        user experience. We make intelligent trading accessible, 
        turning complex data into actionable insights.
      </p>
    </div>
  );
};

export default Home;
