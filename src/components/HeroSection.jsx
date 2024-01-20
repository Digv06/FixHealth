import PropTypes from "prop-types";
import "./HeroSection.css";

const HeroSection = ({ image }) => {
  return (
    <main className="hero-section">
      <div className="hero-image-container">
        <img src={image} alt="Healthcare Hero" className="hero-image" />
        <div className="hero-overlay">
          <h1>Empowering Healthcare</h1>
          <p>Providing compassionate care for a healthier tomorrow.</p>
        </div>
      </div>
    </main>
  );
};

HeroSection.propTypes = {
  image: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  onCtaClick: PropTypes.func.isRequired,
};

export default HeroSection;
