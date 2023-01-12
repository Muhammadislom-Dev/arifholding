import React from "react";
import "./Meeting.css";
import arrow from "../../../../assets/img/row.png";
import { Link } from "react-router-dom";
import meeting from "../../../../assets/img/meeting.png";
import play from "../../../../assets/img/play.png";
import meetings from "../../../../assets/img/meetings.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Meeting = () => {
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
        items: 1.5,
      },
      1000: {
        items: 1.5,
      },
    },
  };

  return (
    <>
      <div className="meeting">
        <div className="container">
          <h3 className="meeting-name">Meetinglar haqida</h3>
          <p className="meeting-title">
            <Link to="/" className="meeting-link">
              Bosh sahifa
            </Link>
            <img src={arrow} alt="" className="meeting-icon" />
            Meetinglar
          </p>
          <div className="meeting-page">
            <p className="meeting-text">
              Специализированный онлайн-сервис «Matelogistics» предоставляет
              полный спектр услуг. Объявления охватывают всю республику
              Узбекистан. Каждый желающий легко найдет на сайте нужную себе
              услугу спецтехники или грузоперевозки. Например, владельцы какого
              либо спецтехники могут разместить рекламу об аренде
              спецтехники.Специализированный онлайн-сервис «Matelogistics»
              предоставляет полный спектр услуг. Объявления охватывают всю
              республику Узбекистан. Каждый желающий легко найдет на сайте
              нужную себе услугу спецтехники или грузоперевозки. Например,
              владельцы какого либо спецтехники могут разместить рекламу об
              аренде спецтехники.Специализированный онлайн-сервис
              «Matelogistics» предоставляет полный{" "}
            </p>
            <div className="meeting-left">
              <img src={meeting} alt="" className="meeting-icon" />
              <button className="meeting-button">
                <img src={play} alt="" className="meeting-icon" />
                <span className="meeting-span">Батафсил видео</span>
              </button>
            </div>
          </div>
          <p className="meeting-texts">
            Специализированный онлайн-сервис «Matelogistics» предоставляет
            полный спектр услуг. Объявления охватывают всю республику
            Узбекистан. Каждый желающий легко найдет на сайте нужную себе услугу
            спецтехники или грузоперевозки. Например, владельцы какого либо
            спецтехники могут разместить рекламу об аренде
            спецтехники.Специализированный онлайн-сервис «Matelogistics»
            предоставляет полный спект
          </p>
        </div>
      </div>

      <div className="meeting-box">
        <OwlCarousel {...options}>
          <div className="meeting-list">
            <img src={meetings} alt="" className="meeting-img" />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default Meeting;
