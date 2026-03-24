import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Banner.css";
// import bannerImage from "../../assets/images/banner.jpg";


const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="banner-main">
      <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
      {/* <img src={bannerImage} alt="Banner" />

      <div className="banner-text">
        <h1>Welcome to Indi Reliant</h1>
        <p>Your reliable partner for all your needs.</p>
      </div> */}
    </div>
  );
};

export default Banner;  