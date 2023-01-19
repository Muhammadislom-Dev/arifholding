import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import machine from "../../../../assets/img/machine.png";
import HorizontalScroll from "react-scroll-horizontal";
import sement from "../../../../assets/img/sement.png";
import scroll from "../../../../assets/img/scroll.jpg";

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <HorizontalScroll
          style={{ overflow: "none", paddingBottom: "210px" }}
          reverseScroll={true}
        >
          <div className="category-page">
            <div className="category-left">
              <h2 className="category-name">
                ARIF international holding jamoasi loyihalari{" "}
              </h2>
              <p className="category-text">
                Hozirgi kunda 6 ta loyihamiz mavhud
              </p>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                className="category-link"
                to="/enterprice"
              >
                Батафсил били
              </Link>
            </div>
            <div className="mains">
              <div className="category-right">
                <img src={machine} alt="" className="category-img" />
                <h3 className="category-subname">Sement MCHJ</h3>
                <p className="category-subtext">
                  Хитойдан пластик ускуналар олиб келиш хизмати
                </p>
              </div>
            </div>
          </div>
          <div className="category-page">
            <div className="category-left">
              <h2 className="category-name">
                ARIF international holding jamoasi loyihalari{" "}
              </h2>
              <p className="category-text">
                Hozirgi kunda 6 ta loyihamiz mavhud
              </p>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                className="category-link"
                to="/enterprice"
              >
                Батафсил били
              </Link>
            </div>
            <div className="mains">
              <div className="category-right">
                <img src={sement} alt="" className="category-img" />
                <h3 className="category-subname">Sement MCHJ</h3>
                <p className="category-subtext">
                  Хитойдан пластик ускуналар олиб келиш хизмати
                </p>
              </div>
            </div>
          </div>
          <div className="category-page">
            <div className="category-left">
              <h2 className="category-name">
                ARIF international holding jamoasi loyihalari{" "}
              </h2>
              <p className="category-text">
                Hozirgi kunda 6 ta loyihamiz mavhud
              </p>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                className="category-link"
                to="/enterprice"
              >
                Батафсил били
              </Link>
            </div>
            <div className="mains">
              <div className="category-right">
                <img src={machine} alt="" className="category-img" />
                <h3 className="category-subname">Sement MCHJ</h3>
                <p className="category-subtext">
                  Хитойдан пластик ускуналар олиб келиш хизмати
                </p>
              </div>
            </div>
          </div>
          <div className="category-page">
            <div className="category-left">
              <h2 className="category-name">
                ARIF international holding jamoasi loyihalari{" "}
              </h2>
              <p className="category-text">
                Hozirgi kunda 6 ta loyihamiz mavhud
              </p>
              <Link
                onClick={() => window.scrollTo({ top: 0 })}
                className="category-link"
                to="/enterprice"
              >
                Батафсил били
              </Link>
            </div>
            <div className="mains">
              <div className="category-right">
                <img src={sement} alt="" className="category-img" />
                <h3 className="category-subname">Sement MCHJ</h3>
                <p className="category-subtext">
                  Хитойдан пластик ускуналар олиб келиш хизмати
                </p>
              </div>
            </div>
          </div>
        </HorizontalScroll>
        <p className="category-texts">
          Batafsil bilish uchun scroll qiling{" "}
          <img src={scroll} alt="" className="category-logo" />{" "}
        </p>
      </div>
    </div>
  );
};

export default Category;
