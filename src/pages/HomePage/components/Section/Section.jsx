import React from "react";
import "./Section.css";
import furniture from "../../../../assets/img/furniture.png";
import eye from "../../../../assets/img/eye.png";
import kesh from "../../../../assets/img/kesh.png";
import img1 from "../../../../assets/img/img1.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../services";
import { useTranslation } from "react-i18next";

const Section = () => {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "news")
      .then((res) => setNews(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(BASE_URL + "news?is_primary=true")
      .then((res) => setFilter(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const { t } = useTranslation();

  return (
    <div className="section">
      <div className="container">
        <div className="section-list">
          <img src={furniture} alt="" className="section-img" />
          <div className="section-item">
            <div className="section-items">
              <button className="section-btn">Actual new</button>
              <span className="section-span">
                <img src={eye} alt="" className="section-icon" />
                <p className="section-sub">16.5 k {t("views")}</p>
              </span>
              <span className="section-span">
                <img src={kesh} alt="" className="section-icon" />
                <p className="section-sub">05.11.2022</p>
              </span>
            </div>
            <h2 className="section-name">Цементимиз хакида</h2>
            <p className="section-text">
              Founded in 1909 in the Port of Antwerp, Ahlers operates in 3
              regions (Europe, CIS, Asia) helping customers to drive future
              growth in complex markets, Ahlers is a family-owned company, 3rd
              generation Founded in 1909 in the Port of Antwerp, Ahlers operates
              in 3 regions (Europe, CIS, Asia) helping customers to drive future
              growth in complex{" "}
            </p>
            <Link to="/news/about" className="section-link">
              {t("batafsil")}
            </Link>
          </div>
        </div>
        <h2 className="section-name section-names">{t("news")}</h2>

        <div className="section-page">
          {news.map((evt, i) => (
            <div key={i} className="section-title">
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                to="/news/about"
              >
                <img
                  src={`${BASE_URL}uploads/images/${evt.img_src}`}
                  alt=""
                  className="section-pic"
                />
                <h6 className="section-subname">{evt.title}</h6>
                <p className="section-subtext">{evt.text}</p>
                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  to="/news/about"
                  className="section-links"
                >
                  {t("link")}
                </Link>
              </Link>
            </div>
          ))}
        </div>
        <div className="section-titles">
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to="/news"
            className="section-button"
          >
            {t("link")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section;
