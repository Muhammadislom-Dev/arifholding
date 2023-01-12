import React, { useState } from "react";
import "./Catalog.css";
import salfetka from "../../../../assets/img/salfetk.png";
import Slide from "../Slide/Slide";

const slide_btn_styles = {
  color: "#fff",
  borderColor: "#BBAF95",
  backgroundColor: "#222936",
};

const Catalog = () => {
  const [activeIdx, setActiveIdx] = useState(1);
  const cardWidth = 200;

  const data = [
    {
      id: 1,
      title: "Туалетные бумаги",
      img: salfetka,
    },
    {
      id: 2,
      title: "Туалетные бумаги",
      img: salfetka,
    },
    {
      id: 3,
      title: "Туалетные бумаги",
      img: salfetka,
    },
    {
      id: 4,
      title: "Туалетные бумаги",
      img: salfetka,
    },
  ];

  return (
    <div className="catalog">
      <div className="container">
        <h3 className="catalog-name">Bizning mahsulotlar</h3>
        <div className="catalog-page">
          <div
            style={{
              transform: `translateX(-${
                cardWidth * activeIdx + 30 * activeIdx
              }px)`,
            }}
            className="catalog-title"
          >
            {data.map((evt) => (
              <div className="catalog-list">
                <h3 className="catalog-names">{evt.title}</h3>
                <img src={evt.img} alt="" className="catalog-img" />
              </div>
            ))}
          </div>

          <div className="homeproducts__pagination">
            {data.map((_, i) => (
              <button
                key={i}
                className={`homeproducts__pagination-btn ${
                  activeIdx === i ? "active" : ""
                }`}
                onClick={() =>
                  setActiveIdx((prev) => {
                    return i < 1
                      ? 1
                      : i > data.length - 2
                      ? data.length - 2
                      : i;
                  })
                }
              ></button>
            ))}
          </div>
          <Slide
            className="homeproducts__slide-prev"
            onClick={() =>
              setActiveIdx((prev) =>
                prev - 1 < 1 ? data.length - 2 : prev - 1
              )
            }
            style={{ ...slide_btn_styles, left: "-40%" }}
          />
          <Slide
            rightIcon
            className="homeproducts__slide-next"
            onClick={() =>
              setActiveIdx((prev) =>
                prev + 1 > data.length - 2 ? 1 : prev + 1
              )
            }
            style={{ ...slide_btn_styles, left: "135%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
