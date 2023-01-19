import React from "react";
import "./Slider.css";
import machines from "../../../../assets/img/mac.png";

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

  return (
    <div className="slick">
      <div className="container">
        <h2 className="slick-names">Bizning uskunalarimiz bilan tanishing</h2>
        <div className="slick-list">
          <div className="slick-item">
            <h3 className="slick-name">Termoplastavtomat</h3>
            <img src={machines} alt="" className="slick-img" />
            <p className="slick-text">
              Stretch plyonkasini ishlab chiqarish linyasi
            </p>
          </div>
          <div className="slick-item">
            <h3 className="slick-name">Termoplastavtomat</h3>
            <img src={machines} alt="" className="slick-img" />
            <p className="slick-text">
              Stretch plyonkasini ishlab chiqarish linyasi
            </p>
          </div>
          <div className="slick-item">
            <h3 className="slick-name">Termoplastavtomat</h3>
            <img src={machines} alt="" className="slick-img" />
            <p className="slick-text">
              Stretch plyonkasini ishlab chiqarish linyasi
            </p>
          </div>
          <div className="slick-item">
            <h3 className="slick-name">Termoplastavtomat</h3>
            <img src={machines} alt="" className="slick-img" />
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
