import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import HorizontalScroll from "react-scroll-horizontal";
import scroll from "../../../../assets/img/scroll.jpg";
import { BASE_URL } from "../../../../services";
import axios from "axios";

const Category = () => {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "companies")
      .then((res) => setCompany(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="category">
      <div className="container">
        <HorizontalScroll
          style={{ overflow: "none", paddingBottom: "210px" }}
          reverseScroll={true}
        >
          {company?.map((evt, i) => (
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
                  <img
                    src={`${BASE_URL}uploads/images/${evt.img_src}`}
                    alt=""
                    className="category-img"
                  />
                  <h3 className="category-subname">{evt.title}</h3>
                  <p className="category-subtext">{evt.description}</p>
                </div>
              </div>
            </div>
          ))}
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
