import React from "react";
import "./About.css";
import arif from "../../../../assets/img/arif.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-title">
          <img src={arif} alt="" className="about-img" />
          <p className="about-subname">Bizning so’ngi tadbirlarimiz</p>
        </div>
        <h2 className="about-name">
          Холдингимиз да янги ускунани текшируви болиб отди
        </h2>
        <p className="about-text">
          Stretch plyonkasini ishlab chiqarish linyasi Stretch plyonkasini
          ishlab chiqarish linyasi,
        </p>
        <Link to="/" className="about-btn">
          Батафсил окиш
        </Link>
      </div>
    </div>
  );
};

export default About;
