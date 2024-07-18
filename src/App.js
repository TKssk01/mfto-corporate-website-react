import "./App.css";
import AboutClient from "./components/about-clients/about-clients.component";
import Articles from "./components/articles/articles.component";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import KnowUs from "./components/know-us/know-us.component";
import ServiceList from "./components/service-list/service-list.component";
import Services from "./components/services/services.component";

function App() {
  return (
    <div className="app">
      <div className="upper-section">
        <video className="video-background" autoPlay loop muted playsInline>
          <source src={require("./assets/videos/background-1.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <Header />
          <Home />
        </div>
      </div>
      <ServiceList />
      <KnowUs />
      <Articles />
      <Services />
      <AboutClient />
      <Footer />
    </div>
  );
}

export default App;