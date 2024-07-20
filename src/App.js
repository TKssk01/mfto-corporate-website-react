// import "./App.css";
// import AboutClient from "./components/about-clients/about-clients.component";
// import Articles from "./components/articles/articles.component";
// import Footer from "./components/footer/footer.component";
// import Header from "./components/header/header.component";
// import Home from "./components/home/home.component";
// import KnowUs from "./components/know-us/know-us.component";
// import ServiceList from "./components/service-list/service-list.component";
// import Services from "./components/services/services.component";
// // import AboutUs from "./components/aboutus/aboutus.component";

// function App() {
//   return (
//     <div className="app">
//       <div className="upper-section">
//         <video className="video-background" autoPlay loop muted playsInline>
//           <source src={require("./assets/videos/background-1.mp4")} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="content">
//           <Header />
//           <Home />
//           {/* <AboutUs /> */}
//         </div>
//       </div>
//       <ServiceList />
//       <KnowUs />
//       <Articles />
//       <Services />
//       <AboutClient />
//       <Footer />
//     </div>

    
//   );
// }

// export default App;



import React from 'react';
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



function App() {
  return (
    <>
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

const HomePage = () => (
  <>
    <div className="upper-section">
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={require('./assets/videos/background-1.mp4')} type="video/mp4" />
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

export default App;



