import React, { useEffect, useState } from "react";
import "./Aside.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import machine from "../../../../assets/img/machine.png";
import img1 from "../../../../assets/img/img5.png";
import close from "../../../../assets/img/+.png";
import BuyModal from "../../../ReactModal/components/BuyModal/BuyModal";
import ModalSucces from "../../../ReactModal/components/ModalSucces/ModalSucces";
import { useTranslation } from "react-i18next";

function useDivScroll(ref) {
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) {
        return;
      }
      const { scrollTop, clientHeight, scrollHeight } = ref.current;
      const totalHeight = scrollTop + clientHeight;
      setOpacity(totalHeight / scrollHeight);
    };
    const div = ref.current;
    div.addEventListener("scroll", handleScroll);
    return () => {
      div.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return opacity;
}

export default function Aside() {
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
    {
      id: 5,
      title: "Бепул ремонт хизмати",
      text: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth",
    },
    {
      id: 6,
      title: "Бепул ремонт хизмати",
      text: "Founded in 1909 in the Port of Antwerp, Ahlers operates in 3 regions (Europe, CIS, Asia) helping customers to drive future growth",
    },
  ];

  const [buy, setBuy] = useState(false);
  function handleBuy() {
    setBuy(!buy);
  }

  const [greatModal, setGreatModal] = useState(false);

  function openGreatModal() {
    setGreatModal(!greatModal);
  }

  const formBtn = (e) => {
    e.preventDefault();
    if (e.target[0].value.length > 0 && e.target[1].value.length > 0) {
      let botMessege = `
                     Salom, Yangi Xabar!😊%0A
                     Ismi 👤: ${e.target[0].value}%0A
                     Raqam ☎: ${e.target[1].value}%0A 
                     Sizning xabaringiz  📝: ${e.target[2].value}%0A 
                `;

      let url = `https://api.telegram.org/bot5861028519:AAEojIy3EZeId4cR6f3ob2QYFkubcnsYRjY/sendMessage?chat_id=-1001699557669&text=${botMessege}`;
      async function fetchAsync(url) {
        let response = await fetch(url);
        let data = await response.json();
        return data;
      }
      fetchAsync(url);

      if (document.querySelector("#name").matches(".input-error")) {
        document.querySelector("#name").classList.remove("input-error");
        document.querySelector("#errorText").classList.remove("error-text1");
        document.querySelector("#closestBtn").classList.remove("close1-btn");
        document.querySelector("#closestBtn1").classList.remove("closes-btn1");
      }
      if (document.querySelector("#tel").matches(".tel-error")) {
        document.querySelector("#tel").classList.remove("tel-error");
        document.querySelector("#errorTel").classList.remove("error-tel1");
        document
          .querySelector("#closestBtn")
          .classList.remove("modal-closest-btn");
        document.querySelector("#closestBtn").classList.remove("close1-btn");
        document.querySelector("#closestBtn1").classList.remove("closes-btn1");
      }

      e.target[0].value = "";

      e.target[1].value = "";

      e.target[2].value = "";

      openGreatModal();
    } else {
      if (e.target[0].value.length < 1) {
        document.querySelector("#name").classList.add("input-error");
        document.querySelector("#errorText").classList.add("error-text1");

        document.querySelector("#closestBtn").classList.add("close1-btn");
        document.querySelector("#closestBtn1").classList.add("close2-btn");
      }
      if (e.target[1].value.length < 1) {
        document.querySelector("#tel").classList.add("tel-error");
        document.querySelector("#errorTel").classList.add("error-tel1");
        document
          .querySelector("#closestBtn")
          .classList.add("modal-closest-btn");
        document.querySelector("#closestBtn").classList.add("close1-btn");
        document.querySelector("#closestBtn1").classList.add("close2-btn");
      }
    }
  };

  const catalog = [
    {
      id: 1,
      title: "Uzexim",
    },
    {
      id: 2,
      title: "Semento",
    },
    {
      id: 3,
      title: "Semento",
    },
  ];

  const setDuration = (e) => {
    document.querySelectorAll(".aside-btn").forEach((e) => {
      e.classList.remove("aside-active");
    });
    e.target.classList.toggle("aside-active");
  };

  const [t, i18next] = useTranslation();

  const divRef = React.useRef(null);
  const opacity = useDivScroll(divRef);

  return (
    <>
      <div className="aside">
        <div className="container">
          <div className="aside-title">
            <div className="aside-item">
              {catalog.map((evt, i) => (
                <button
                  className="aside-btn"
                  key={i}
                  onClick={(e) => setDuration(e)}
                >
                  {evt.title}
                </button>
              ))}
            </div>
            <span className="aside-span">
              <p className="aside-text">{t("uskuna")}</p>
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
            {t("buy")}
          </button>
        </div>
        <div className="aside-box">
          <span className="aside-spans">
            <p className="aside-text">{t("uskuna")}</p>
            <h3 className="aside-name">Uzexim paket BLK200</h3>
          </span>
          <div ref={divRef} className="aside-right">
            {information.map((evt, i) => (
              <div style={{ opacity }} key={i} className="aside-titles">
                <img src={img1} alt="" className="aside-logo" />
                <div className="aside-items">
                  <h3 style={{ opacity }} className="aside-subname">
                    {evt.title}
                  </h3>
                  <p style={{ opacity }} className="aside-texts">
                    {evt.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BuyModal showbuy={buy}>
        <button onClick={() => setBuy()} className="aside-modal-close">
          <img src={close} alt="" className="aside-modal-img" />
        </button>
        <div className="aside-modal">
          <h3 className="aside-modal-name">{t("aside1")}</h3>
          <p className="aside-modal-text">{t("aside2")}</p>
          <form onSubmit={formBtn} action="" className="aside-form">
            <input
              type="name"
              name="name"
              id="name"
              placeholder={t("name")}
              className="aside-input"
            />
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder={t("number")}
              className="aside-input"
            />
            <textarea
              className="aside-textarea"
              name="tel"
              id="tel"
              maxlength="14"
              required
              placeholder={t("aside3")}
            />
            <div className="aside-form-title">
              <button type="submit" className="aside-form-submit">
                {t("send")}
              </button>
              <a href="+998712770707" className="aside-form-call">{t("tel")}</a>
            </div>
          </form>
        </div>
      </BuyModal>

      <ModalSucces shows={greatModal}>
        <button onClick={() => setGreatModal()} className="form-close">
          <img src={close} className="form-img" alt="" />
        </button>
        <h3 className="form-modal-name">{t("succes")}</h3>
        <div className="form-modal-title">
          <a
            href="/"
            onClick={() => window.scrollTo({ top: 0 })}
            className="form-modal-link"
          >
            Ok
          </a>
        </div>
      </ModalSucces>
    </>
  );
}
