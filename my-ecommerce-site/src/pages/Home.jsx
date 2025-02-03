import Slider from "../components/Slider"; // Import the slider component
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-img">
        <div className="hero-content">
          <p>Transform Your Reality</p>
        </div>
      </div>

      {/* Slider Section */}
      <div className="slider-section">
        <Slider />
      </div>

      {/* Main Content */}
      <main id="storeContainer">
        <section className="special-items">
          <div className="cards">
            Here at Corp Technologies, your imagination is the limit!
          </div>
          <div className="cards">
            We offer exclusive mobile devices that will transform your reality
            into more than you could ever imagine!
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
