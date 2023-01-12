import React from "react";
import "./News.css";
import row from "../../../../assets/img/row.png";
import { Link } from "react-router-dom";
import img1 from "../../../../assets/img/img1.png";

const News = () => {
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
          {Array.from(new Array(16)).map((e) => (
            <div className="news-title">
              <img src={img1} alt="" className="section-pic" />
              <h6 className="news-subname">velo track</h6>
              <p className="news-subtext">
                Founded in 1909 in the Port of Antwerp,
              </p>
              <Link to="/news/about" className="news-links">
                Batafsil o`qish
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
