import React, { useEffect, useState } from "react";
import "./News.css";
import row from "../../../../assets/img/row.png";
import { Link } from "react-router-dom";
import img1 from "../../../../assets/img/img1.png";
import axios from "axios";
import { BASE_URL } from "../../../../services";
import { useTranslation } from "react-i18next";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "news")
      .then((res) => setNews(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const [t, i18next] = useTranslation();

  return (
    <div className="news">
      <div className="container">
        <div className="news-top">
          <h3 className="news-name">Bizning barcha yangiliklar</h3>
          <button className="news-button">Oxirgi yangilanish 22:00</button>
        </div>
        <p className="news-home">
          <Link to="/" className="news-link">
            Bosh sahifa
          </Link>
          <img src={row} alt="" className="enterprice-icon" />
          <span>Korxona haqida</span>
        </p>
        <div className="news-list">
          {news.map((evt, i) => (
            <div key={i} className="news-title">
              <img src={img1} alt="" className="section-pic" />
              <h6 className="news-subname">
                {evt[`title_${i18next.language}`]}
              </h6>
              <p className="news-subtext">{evt[`text_${i18next.language}`]}</p>
              <div className="news-titles">
                <Link to="/news/about" className="news-links">
                  Batafsil o`qish
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
