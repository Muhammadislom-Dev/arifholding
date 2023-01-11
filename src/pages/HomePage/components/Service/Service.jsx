import React from "react";
import "./Service.css";
import gold from "../../../../assets/img/gold.png";
import notebook from "../../../../assets/img/notebook.png";
import setting from "../../../../assets/img/settings.png";
import car from "../../../../assets/img/car.png";

const Service = () => {
  return (
    <div className="service">
      <div className="container">
        <h2 className="service-name">Бошка хизматларимиз</h2>
        <div className="service-list">
          <div className="service-title">
            <p className="service-text">
              бизнинг компаниядан мутахасисларидан бепул инфо олишингиз мумкин
            </p>
            <img src={gold} alt="" className="service-img" />
          </div>
          <div className="service-title">
            <p style={{ paddingTop: 70 }} className="service-text">
              Хужжатларни расмийлаштириш
            </p>
            <img src={notebook} alt="" className="service-img" />
          </div>
          <div className="service-title">
            <p style={{ width: 180, paddingTop: 80 }} className="service-text">
              Ta`mirlash tuzatish xizmati
            </p>
            <img
              style={{ width: 300, height: 180 }}
              src={setting}
              alt=""
              className="service-img"
            />
          </div>
          <div className="service-title">
            <p style={{ width: 200, paddingTop: 80 }} className="service-text">
              Ta`mirlash tuzatish xizmati
            </p>
            <img
              style={{ paddingLeft: 60, width: 450 }}
              src={car}
              alt=""
              className="service-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
