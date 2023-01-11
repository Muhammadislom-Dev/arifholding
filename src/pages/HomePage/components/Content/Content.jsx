import React from "react";
import "./Content.css";
import audio from "../../../../assets/img/audio.png";
import phone from "../../../../assets/img/phone.png";

const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <h2 className="content-name">
          KAMRON ADHAM
          <p className="content-span">Ceo and founder </p>
        </h2>
        <p className="content-text">
          Хамкорларимиз мавжуд биз улар билан анчадан бери ишлаб келмокдамиз
          уларни 89% бизниин химатларимиздан мамнун ва кизикиш блдрмокта
        </p>

        <div className="content-list">
          <button className="content-btn">
            <img
              style={{ paddingLeft: 0 }}
              src={audio}
              alt=""
              className="content-img"
            />{" "}
            <p className="content-subname">Батафсил видео</p>
          </button>
          <a href="tel:998712770707" className="content-btn">
            <img src={phone} alt="" className="content-img" />{" "}
            <p className="content-subname">Алокага чикиш</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
