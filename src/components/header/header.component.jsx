import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  // const [currentPage, setCurrentPage] = useState('/');


  // useEffect(() => {
  //   setCurrentPage(location.pathname);
  // }, [location]);

  // const handleNavClick = (e, path) => {
  //   e.preventDefault();
  //   setCurrentPage(path);
  //   if (location.pathname === path) {
  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   } else {
  //     navigate(path);
  //     setTimeout(() => {
  //       window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //     }, 100);
  //   }
  // };

  // const Navigation = () => (
  //   <>
  //     <span className={`options ${currentPage === '/' ? 'active' : ''}`}>
  //       <span className="active-bar"></span>
  //       <a href="/" onClick={(e) => handleNavClick(e, '/')}>Home</a>
  //       <p>Main page</p>
  //     </span>
  //     <span className={`options ${currentPage === '/about' ? 'active' : ''}`}>
  //       <span className="active-bar"></span>
  //       <a href="/about" onClick={(e) => handleNavClick(e, '/about')}>Corporate</a>
  //       <p>About us</p>
  //     </span>
  //     <span className={`options ${currentPage === '/products' ? 'active' : ''}`}>
  //       <span className="active-bar"></span>
  //       <a href="/products" onClick={(e) => handleNavClick(e, '/products')}>We offer</a>
  //       <p>Our services</p>
  //     </span>
  //     <span className={`options ${currentPage === '/news' ? 'active' : ''}`}>
  //       <span className="active-bar"></span>
  //       <a href="/news" onClick={(e) => handleNavClick(e, '/news')}>News</a>
  //       <p>Latest on us</p>
  //     </span>
  //     <span className={`options ${currentPage === '/contact-us' ? 'active' : ''}`}>
  //       <span className="active-bar"></span>
  //       <a href="/contact-us" onClick={(e) => handleNavClick(e, '/contact-us')}>Contact us</a>
  //       <p>Get in touch</p>
  //     </span>
  //   </>
  // );




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

  // 変更点1: 新しい handleNavClick 関数を追加
  // この関数は全てのナビゲーションリンクで使用され、
  // クリック時の動作を統一します
  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (location.pathname === path) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 100);
    }
  };

  const Navigation = () => (
    <>
      {/* 変更点2: 各ナビゲーションリンクを <a> タグに変更し、
        onClick イベントで handleNavClick を呼び出すように修正 */}
      <span className="options">
        <span className="active"></span>
        <a href="/" onClick={(e) => handleNavClick(e, '/')}>Home</a>
        <p>Main page</p>
      </span>
      <span className="options">
        <span className="active"></span>
        <a href="/about" onClick={(e) => handleNavClick(e, '/about')}>Corporate</a>
        <p>About us</p>
      </span>
      <span className="options">
        <span className="active"></span>
        <a href="/products" onClick={(e) => handleNavClick(e, '/products')}>We offer</a>
        <p>Our services</p>
      </span>
      <span className="options">
        <span className="active"></span>
        <a href="/news" onClick={(e) => handleNavClick(e, '/news')}>News</a>
        <p>Latest on us</p>
      </span>
      <span className="options">
        <span className="active"></span>
        <a href="/contact-us" onClick={(e) => handleNavClick(e, '/contact-us')}>Contact us</a>
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
