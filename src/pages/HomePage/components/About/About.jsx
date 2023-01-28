import React from "react";
import "./About.css";
import arif from "../../../../assets/img/arif.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="container">
        <div className="about-title">
          <img src={arif} alt="" className="about-img" />
          <p className="about-subname">{t("tadbir")}</p>
        </div>
        <h2 className="about-name">
          Холдингимиз да янги ускунани текшируви болиб отди
        </h2>
        <p className="about-text">
          Stretch plyonkasini ishlab chiqarish linyasi Stretch plyonkasini
          ishlab chiqarish linyasi,
        </p>
        <Link
          onClick={() => window.scrollTo({ top: 0 })}
          to="/meeting"
          className="about-btn"
        >
          {t("batafsil")}
        </Link>
      </div>
    </div>
  );
};

export default About;
