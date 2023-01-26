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

  console.log(filter);

  return (
    <div className="section">
      <div className="container">
        {filter.map((evt, i) => (
          <div className="section-list">
            <img
              src={`${BASE_URL}uploads/images/${evt.img_src}`}
              alt=""
              className="section-img"
            />
            <div className="section-item">
              <div className="section-items">
                <button className="section-btn">{evt.news_type}</button>
                <span className="section-span">
                  <img src={eye} alt="" className="section-icon" />
                  <p className="section-sub">{evt.viewers} views</p>
                </span>
                <span className="section-span">
                  <img src={kesh} alt="" className="section-icon" />
                  <p className="section-sub">05.11.2022</p>
                </span>
              </div>
              <h2 className="section-name">{evt.title}</h2>
              <p className="section-text">{evt.text}</p>
              <Link to="/news/about" className="section-link">
                Batafsil o'qish
              </Link>
            </div>
          </div>
        ))}

        <h2 className="section-name section-names">Barcha yangiliklarimiz</h2>

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
                  Batafsil o`qish
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
            Батафсил окиш
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section;
