import React from "react";
import "./articles.styles.scss";
import { useNavigate } from 'react-router-dom';

// 変更点 1: アロー関数の構文を修正
const Articles = () => {
  // 変更点 2: useNavigate フックをコンポーネント内で使用
  const navigate = useNavigate();

  // 変更点 3: ボタンクリックのハンドラー関数を追加
  const handleReadMore = (path) => {
    navigate(path);
  };

  // 変更点 4: JSX を return 文で囲む
  return (
    <div className="articles">
      <div className="founder">
        <h1>Innovation in fintech is driven by understanding market dynamics.</h1>
        <p>
          In the world of algorithmic trading, success comes from blending 
          cutting-edge technology with deep financial insights.
        </p>
        <p>Our goal is to create trading systems that adapt to the market, not just follow it.</p>
        <div className="about-founder">
          <span>Rei S</span>
          <p>Founder &amp; Director</p> {/* 変更点 5: タイポを修正 */}
        </div>
      </div>

      <div className="articles-container">
        <div className="card">
          <div className="image">
            <img
              src="https://plus.unsplash.com/premium_photo-1661756423422-4486e27eb6dd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="building"
            />
            <button onClick={() => handleReadMore('/about')}>Read More</button>
          </div>
          <h1>WHO WE ARE</h1>
          <p>
            At MFTO, we combine advanced algorithms with financial expertise 
            to pioneer innovative automated trading systems. Our team delivers 
            cutting-edge market insights, revolutionizing fintech.
          </p>
          <button onClick={() => handleReadMore('/about')}>&gt;</button>
        </div>

        <div className="card">
          <div className="image">
            <img
              src="https://plus.unsplash.com/premium_photo-1683141154082-324d296f3c66?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="home"
            />
            {/* 変更点 6: 2つ目のボタンにもイベントハンドラを追加 */}
            <button onClick={() => handleReadMore('/products')}>Read More</button>
          </div>
          <h1>OUR APPROACH</h1>
          <p>
            Our advanced algorithms analyze real-time market data to optimize 
            trading strategies, maximizing returns while effectively 
            managing risk in dynamic markets.
          </p>
          <button onClick={() => handleReadMore('/products')}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Articles;

// import React from "react";
// import "./articles.styles.scss";
// import { useNavigate } from 'react-router-dom';

// const Articles = () => (
//     const navigate = useNavigate();
//     // 変更点 3: ボタンクリックのハンドラー関数を追加
//     const handleReadMore = (path) => {
//       navigate(path);
//     };
//   <div className="articles">
//     <div className="founder">
//       <h1> Innovation in fintech is driven by understanding market dynamics.</h1>
//       <p>
//         In the world of algorithmic trading, success comes from blending 
//         cutting-edge technology with deep financial insights.
//       </p>
//       <p>Our goal is to create trading systems that adapt to the market, not just follow it.</p>
//       <div className="about-founder">
//         <span>Rei S</span>
//         <p>Founder &amp; Diretor</p>
//       </div>
//     </div>

//     <div className="articles-container">
//       <div className="card">
//         <div className="image">
//           <img
//             src="https://plus.unsplash.com/premium_photo-1661756423422-4486e27eb6dd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="building"
//           />{" "}
//           <button onClick={() => handleReadMore('/about')}>Read More</button>
//         </div>
//         <h1>WHO WE ARE</h1>
//         <p>
//           At MFTO, we combine advanced algorithms with financial expertise 
//           to pioneer innovative automated trading systems. Our team delivers 
//           cutting-edge market insights, revolutionizing fintech.
//         </p>
//         <button>&gt;</button>
//       </div>

//       <div className="card">
//         <div className="image">
//           <img
//             src="https://plus.unsplash.com/premium_photo-1683141154082-324d296f3c66?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="home"
//           />
//           <button>Read More</button>
//         </div>
//         <h1>OUR APPROACH</h1>
//         <p>
//           Our advanced algorithms analyze real-time market data to optimize 
//           trading strategies, maximizing returns while effectively 
//           managing risk in dynamic markets.
//         </p>
//         <button>&gt;</button>
//       </div>
//     </div>
//   </div>
// );

// export default Articles;
