import React from "react";
import "./Section.css";
import furniture from "../../../../assets/img/furniture.png";
import eye from "../../../../assets/img/eye.png";
import kesh from "../../../../assets/img/kesh.png";
import img1 from "../../../../assets/img/img1.png";
import img2 from "../../../../assets/img/img2.png";
import img3 from "../../../../assets/img/img3.png";
import { Link } from "react-router-dom";

const Section = () => {
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
                <p className="section-sub">16.5 k views</p>
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
              Batafsil o'qish
            </Link>
          </div>
        </div>

        <h2 className="section-name section-names">
          Barcha yangiliklarimiz
        </h2>

        <div className="section-page">
          <div className="section-title">
            <Link onClick={() => window.scrollTo({ top: 0 })} to="/news/about">
              <img src={img1} alt="" className="section-pic" />
              <h6 className="section-subname">Yangi truck</h6>
              <p className="section-subtext">
                Founded in 1909 in the Port of Antwerp, Ahlers operates in ...
              </p>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                to="/news/about"
                className="section-links"
              >
                Batafsil o`qish
              </Link>
            </Link>
          </div>
          <div className="section-title">
            <Link onClick={() => window.scrollTo({ top: 0 })} to="/news/about">
              <img src={img1} alt="" className="section-pic" />
              <h6 className="section-subname">Yangi truck</h6>
              <p className="section-subtext">
                Founded in 1909 in the Port of Antwerp, Ahlers operates in ...
              </p>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                to="/news/about"
                className="section-links"
              >
                Batafsil o`qish
              </Link>
            </Link>
          </div>
          <div className="section-title">
            <Link onClick={() => window.scrollTo({ top: 0 })} to="/news/about">
              <img src={img1} alt="" className="section-pic" />
              <h6 className="section-subname">Yangi truck</h6>
              <p className="section-subtext">
                Founded in 1909 in the Port of Antwerp, Ahlers operates in ...
              </p>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                to="/news/about"
                className="section-links"
              >
                Batafsil o`qish
              </Link>
            </Link>
          </div>
          <div className="section-title">
            <Link onClick={() => window.scrollTo({ top: 0 })} to="/news/about">
              <img src={img1} alt="" className="section-pic" />
              <h6 className="section-subname">Yangi truck</h6>
              <p className="section-subtext">
                Founded in 1909 in the Port of Antwerp, Ahlers operates in ...
              </p>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                to="/news/about"
                className="section-links"
              >
                Batafsil o`qish
              </Link>
            </Link>
          </div>
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
