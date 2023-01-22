import React from "react";
import "./Slider.css";
import serv from "../../../../assets/img/serv.png";
import service from "../../../../assets/img/services.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Slider = () => {
    
  const options = {
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1.2,
      },
      1000: {
        items: 1.5,
      },
    },
  };

  return (
    <div className="slider">
      <OwlCarousel {...options}>
        <div className="slider-list">
          <img src={serv} alt="" className="slider-img" />
          <div className="slider-title">
            <img src={service} alt="" className="slider-pic" />
            <span className="slider-span">
              <h3 className="slider-name">
                Бизда ускуна орнатилгандан сонг уни тамирлаш хизмати мавжуд
              </h3>
              <p className="slider-text">
                Хар бир сотиб олинган ускунага 100 кун кафолат бериладиБизда
                ускуна орнатилгандан сонг уни тамирлаш хизмати мавжуд
              </p>
            </span>
          </div>
        </div>
        <div className="slider-list">
          <img src={serv} alt="" className="slider-img" />
          <div className="slider-title">
            <img src={service} alt="" className="slider-pic" />
            <span className="slider-span">
              <h3 className="slider-name">
                Бизда ускуна орнатилгандан сонг уни тамирлаш хизмати мавжуд
              </h3>
              <p className="slider-text">
                Хар бир сотиб олинган ускунага 100 кун кафолат бериладиБизда
                ускуна орнатилгандан сонг уни тамирлаш хизмати мавжуд
              </p>
            </span>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Slider;
