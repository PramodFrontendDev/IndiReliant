import "./Banner.css";
import bannerImage from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="banner-main">
      <img src={bannerImage} alt="Banner" />

      <div className="banner-text">
        <h1>Welcome to Indi Reliant</h1>
        <p>Your reliable partner for all your needs.</p>
      </div>
    </div>
  );
};

export default Banner;  