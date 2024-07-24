import './index.css';
import React, { useState, useEffect, useCallback, useRef, useMemo} from 'react'; 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutClient from './components/about-clients/about-clients.component';
import Articles from './components/articles/articles.component';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import Home from './components/home/home.component';
import KnowUs from './components/know-us/know-us.component';
import ServiceList from './components/service-list/service-list.component';
import Services from './components/services/services.component';
import AboutUs from './components/aboutus/aboutus.component'; // AboutUsをインポート
import Products from './components/products/products.component';
import News from './components/news/news.component';
import ContactUs from './components/contact-us/contact-us.component';
import ScrollToTop from './scroll-to-top'; 

function App() {
  return (
    <>
     <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* 他のルートもここに追加 */}
      </Routes>
      <Footer />
    </>
  );
}

const HomePage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentVideoRef = useRef(null);
  const nextVideoRef = useRef(null);

  const videos = useMemo(() => [
    require('./assets/videos/background-1.mp4'),
    require('./assets/videos/background-2.mp4'),
  ], []);

  const preloadNextVideo = useCallback(() => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    setNextVideoIndex(nextIndex);
    if (nextVideoRef.current) {
      nextVideoRef.current.src = videos[nextIndex];
      nextVideoRef.current.load();
    }
  }, [currentVideoIndex, videos]);

  const handleVideoEnd = useCallback(() => {
    setIsTransitioning(true);
    if (nextVideoRef.current) {
      nextVideoRef.current.play();
    }
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setIsTransitioning(false);
      preloadNextVideo();
    }, 1000); // 1秒のクロスフェード時間
  }, [preloadNextVideo, videos.length]);

  useEffect(() => {
    preloadNextVideo();
  }, [preloadNextVideo]);

  useEffect(() => {
    const videoElement = currentVideoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
      return () => videoElement.removeEventListener('ended', handleVideoEnd);
    }
  }, [handleVideoEnd]);

  return (
    <>
      <div className="upper-section">
        <video 
          ref={currentVideoRef}
          key={`current-${currentVideoIndex}`}
          className={`video-background current ${isTransitioning ? 'fade-out' : ''}`}
          autoPlay 
          muted 
          playsInline
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video 
          ref={nextVideoRef}
          key={`next-${nextVideoIndex}`}
          className={`video-background next ${isTransitioning ? 'fade-in' : ''}`}
          muted 
          playsInline
        >
          <source src={videos[nextVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <Home />
        </div>
      </div>
      <ServiceList />
      <KnowUs />
      <Articles />
      <Services />
      <AboutClient />
    </>
  );
};

// const HomePage = () => (
//   <>
//     <div className="upper-section">
//       <video className="video-background" autoPlay loop muted playsInline>
//         <source src={require('./assets/videos/background-1.mp4')} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="content">
//         <Home />
//       </div>
//     </div>
//     <ServiceList />
//     <KnowUs />
//     <Articles />
//     <Services />
//     <AboutClient />
//   </>
// );

export default App;



