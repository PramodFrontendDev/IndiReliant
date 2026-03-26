import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Banner.css";
import banner from "../../assets/images/banner.jpg";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import banner5 from "../../assets/images/banner5.jpg";

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
        <div className="slider-img">
          <img src={banner1} alt="Banner 1" />
        </div>
      </div>
       <div>
        <div className="slider-img">
          <img src={banner} alt="Banner 1" />
        </div>
      </div>
       <div>
        <div className="slider-img">
          <img src={banner4} alt="Banner 1" />
        </div>
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