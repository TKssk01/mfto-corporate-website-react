// import React, { useEffect, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useMediaQuery } from 'react-responsive';
// import "./header.styles.scss";

// import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
// import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import MenuIcon from '@mui/icons-material/Menu';

// const Header = () => {
//   const header_ = useRef();
//   const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (isDesktop) {
//         if (window.pageYOffset > 0) {
//           header_.current.classList.add("scrolled");
//         } else {
//           header_.current.classList.remove("scrolled");
//         }
//       } else {
//         header_.current.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isDesktop]);

//   const Navigation = () => (
//     <>
//       <span className="options">
//         <span className="active"></span>
//         <Link to="/">Home</Link>
//         <p>Main page</p>
//       </span>
//       <span className="options">
//         <span className="active"></span>
//         <Link to="/about">Corporate</Link> {/* Aboutページへのリンクを設定 */}
//         <p>About us</p>
//       </span>
//     </>
//   );

//   return (
//     <div ref={header_} className={`header ${!isDesktop ? 'mobile' : ''}`}>
//       <div className="go-to-top">
//         <span onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>
//           <ArrowUpwardIcon />
//         </span>
//       </div>

//       <div className="upper">
//         <div className="logo" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
//           <div className="icon">
//             <SportsVolleyballIcon />
//           </div>
//           <div className="content">
//             <h1>MFTO</h1>
//             <p>Corporation</p>
//           </div>
//         </div>
//         {isDesktop && (
//           <div className="contact-us">
//             <div className="first">
//               <PhoneInTalkOutlinedIcon />
//               <div className="nos">
//                 <span>+1 8579998427</span>
//                 <p>24 x 7 Helpline</p>
//               </div>
//             </div>
//           </div>
//         )}
//         {!isDesktop && (
//           <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
//             <MenuIcon />
//           </div>
//         )}
//       </div>
//       {isDesktop ? (
//         <div className="navigation">
//           <Navigation />
//         </div>
//       ) : menuOpen && (
//         <div className="mobile-navigation">
//           <Navigation />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;







import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import "./header.styles.scss";

import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const headerRef = useRef(null); // useRefの初期値をnullに設定
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) { // headerRefがnullでないことを確認
        if (isDesktop) {
          if (window.pageYOffset > 0) {
            headerRef.current.classList.add("scrolled");
          } else {
            headerRef.current.classList.remove("scrolled");
          }
        } else {
          headerRef.current.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  const Navigation = () => (
    <>
      <span className="options">
        <span className="active"></span>
        <Link to="/">Home</Link>
        <p>Main page</p>
      </span>
      <span className="options">
        <span className="active"></span>
        <Link to="/about">Corporate</Link>
        <p>About us</p>
      </span>
      <span className="options">
        <span className="active"></span>
        <Link to="/services">We offer</Link>
        <p>Our services</p>
      </span>
      <span className="options">
        <span className="active"></span>
        <Link to="/news">News</Link>
        <p>Latest on us</p>
      </span>
      <span className="options">
        <span className="active"></span>
        <Link to="/contact-us">Contact us</Link>
        <p>Get in touch</p>
      </span>
    </>
  );

  return (
    <div ref={headerRef} className={`header ${!isDesktop ? 'mobile' : ''}`}>
      <div className="go-to-top">
        <span onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>
          <ArrowUpwardIcon />
        </span>
      </div>

      <div className="upper">
        <div className="logo" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
          <div className="icon">
            <SportsVolleyballIcon />
          </div>
          <div className="content">
            <h1>MFTO</h1>
            <p>Corporation</p>
          </div>
        </div>
        {isDesktop && (
          <div className="contact-us">
            <div className="first">
              <PhoneInTalkOutlinedIcon />
              <div className="nos">
                <span>+1 8579998427</span>
                <p>24 x 7 Helpline</p>
              </div>
            </div>
          </div>
        )}
        {!isDesktop && (
          <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon />
          </div>
        )}
      </div>
      {isDesktop ? (
        <div className="navigation">
          <Navigation />
        </div>
      ) : menuOpen && (
        <div className="mobile-navigation">
          <Navigation />
        </div>
      )}
    </div>
  );
};

export default Header;
