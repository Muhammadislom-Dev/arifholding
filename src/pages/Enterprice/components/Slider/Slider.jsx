import React from "react";
import "./Slider.css";
import machines from "../../../../assets/img/mac.png";
import { useTranslation } from "react-i18next";

const SliderPage = () => {
  const machine = [
    {
      id: 1,
      name: "Termoplastavtomat",
      image: machines,
      title: "Stretch plyonkasini ishlab chiqarish linyasi",
    },
    {
      id: 2,
      name: "Termoplastavtomat",
      image: machines,
      title: "Stretch plyonkasini ishlab chiqarish linyasi",
    },
    {
      id: 3,
      name: "Termoplastavtomat",
      image: machines,
      title: "Stretch plyonkasini ishlab chiqarish linyasi",
    },
    {
      id: 4,
      name: "Termoplastavtomat",
      image: machines,
      title: "Stretch plyonkasini ishlab chiqarish linyasi",
    },
  ];

  const {t} = useTranslation()

  return (
    <div className="slick">
      <div className="container">
        <h2 className="slick-names">{t("enterprice2")}</h2>
        <div className="slick-list">
          <div className="slick-item">
            <h3 className="slick-name">Termoplastavtomat</h3>
            <div className="slick-title">
              <img src={machines} alt="" className="slick-img" />
            </div>
            <p className="slick-text">
              Stretch plyonkasini ishlab chiqarish linyasi
            </p>
          </div>
          <div className="slick-item">
            <h3 className="slick-name">Termoplastavtomat</h3>
            <div className="slick-title">
              <img src={machines} alt="" className="slick-img" />
            </div>
            <p className="slick-text">
              Stretch plyonkasini ishlab chiqarish linyasi
            </p>
          </div>
          <div className="slick-item">
            <h3 className="slick-name">Termoplastavtomat</h3>
            <div className="slick-title">
              <img src={machines} alt="" className="slick-img" />
            </div>
            <p className="slick-text">
              Stretch plyonkasini ishlab chiqarish linyasi
            </p>
          </div>
          <div className="slick-item">
            <h3 className="slick-name">Termoplastavtomat</h3>
            <div className="slick-title">
              <img src={machines} alt="" className="slick-img" />
            </div>
            <p className="slick-text">
              Stretch plyonkasini ishlab chiqarish linyasi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SliderPage;
