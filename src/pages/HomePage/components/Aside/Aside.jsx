import React, { useEffect, useState } from "react";
import "./Aside.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import machine from "../../../../assets/img/machine.png";
import img1 from "../../../../assets/img/img5.png";
import close from "../../../../assets/img/+.png";
import BuyModal from "../../../ReactModal/components/BuyModal/BuyModal";

const Aside = () => {
  const information = [
    {
      id: 1,
      title: "Бепул ремонт хизмати",
      text: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth",
    },
    {
      id: 2,
      title: "Бепул ремонт хизмати",
      text: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth",
    },
    {
      id: 3,
      title: "Бепул ремонт хизмати",
      text: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth",
    },
    {
      id: 4,
      title: "Бепул ремонт хизмати",
      text: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth",
    },
  ];

  const [activeNumIdx, setActiveNumIdx] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNumIdx((prev) => (prev + 2 > information.length ? 0 : prev + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [information]);

  const [buy, setBuy] = useState(false);

  function handleBuy() {
    setBuy(!buy);
  }

  return (
    <>
      <div className="aside">
        <div className="container">
          <div className="aside-title">
            <div className="aside-item">
              <button className="aside-btn">Uzexim</button>
              <button className="aside-btn">Semento</button>
              <button className="aside-btn">Semento</button>
            </div>
            <span className="aside-span">
              <p className="aside-text">
                Bizning uskunalarimiz bilan tanishing
              </p>
              <h3 className="aside-name">Uzexim paket BLK200</h3>
            </span>
          </div>
        </div>
      </div>
      <div className="aside-page">
        <div className="aside-left">
          <Splide>
            {Array.from(new Array(6)).map((e) => (
              <SplideSlide>
                <img className="aside-img" src={machine} alt="" />
              </SplideSlide>
            ))}
          </Splide>
          <button onClick={handleBuy} className="aside-button">
            Sotib olish
          </button>
        </div>
        <div className="aside-right">
          {information.map((evt, i) => (
            <div
              className={`aside-titles ${
                i === activeNumIdx
                  ? ""
                  : i - 1 === activeNumIdx || i + 1 === activeNumIdx
                  ? "numbers-closer"
                  : "numbers-disactive"
              }`}
            >
              <img src={img1} alt="" className="aside-logo" />
              <div className="aside-items">
                <h3 className="aside-subname">{evt.title}</h3>
                <p className="aside-texts">{evt.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BuyModal showbuy={buy}>
        <button onClick={() => setBuy()} className="aside-modal-close">
          <img src={close} alt="" className="aside-modal-img" />
        </button>
        <div className="aside-modal">
          <h3 className="aside-modal-name">
            Sotib olish uchun fo’rmani to’ldiring
          </h3>
          <p className="aside-modal-text">
            Shaxsiy ma`lumotlaringiz anonimlig ta`minlanadi
          </p>
          <form action="" className="aside-form">
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Ismingiz"
              className="aside-input"
            />
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Telefon raqamingiz"
              className="aside-input"
            />
            <textarea
              className="aside-textarea"
              name="tel"
              id="tel"
              placeholder="Sotib olmoqchi bo’lgan mahsulotingiz haqida"
            />
            <div className="aside-form-title">
              <button className="aside-form-submit">Yuborish</button>
              <button className="aside-form-call">Biz bilan aloqa</button>
            </div>
          </form>
        </div>
      </BuyModal>
    </>
  );
};

export default Aside;
