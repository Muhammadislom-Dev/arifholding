import React, { useState } from "react";
import "./Header.css";
import Modal from "../../../ReactModal/components/Modal/Modal";
import close from "../../../../assets/img/+.png";
import call from "../../../../assets/img/call.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import ModalSucces from "../../../ReactModal/components/ModalSucces/ModalSucces";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../services";

const Header = () => {
  const [connection, setConnection] = useState(false);

  const handleConnection = () => {
    setConnection(!connection);
  };

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

  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "companies")
      .then((res) => setCompany(res.data.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="header">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {company?.map((evt, i) => (
          <SwiperSlide key={i}>
            <div className="container">
              <h2 className="header-name">{evt.title}</h2>
              <p className="header-text">{evt.description}</p>
              <div className="header-title">
                <Link to="/enterprice" className="header-links">
                  Батафсил
                </Link>
                <button onClick={handleConnection} className="header-btn">
                  Богланиш
                </button>
              </div>

              <div className="header-list">
                <img src={`${BASE_URL}uploads/images/${evt.img_src}`} alt="" className="header-img" />
                <p className="header-span">
                  Semento цементлари хакида{" "}
                  <Link to="/enterprice" className="header-link">
                    батафсил танишиш
                  </Link>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal show={connection}>
        <button onClick={() => setConnection()} className="header-close">
          <img src={close} alt="" />
        </button>
        <div className="header-modal">
          <img src={call} alt="" className="header-imgs" />
          <div className="header-right">
            <h3 className="header-subname">Biz bilan bog`laning</h3>
            <h5 className="header-subnames">O`zimiz aloqaga chiqamiz</h5>
            <form onSubmit={formBtn} action="" className="header-form">
              <input
                type="name"
                placeholder="Ism"
                required
                className="header-input"
              />
              <input
                type="tell"
                placeholder="Telefon nomer"
                required
                className="header-input"
              />
              <button className="header-submit">Yuborish</button>
            </form>
          </div>
        </div>
      </Modal>

      <ModalSucces shows={greatModal}>
        <button onClick={() => setGreatModal()} className="form-close">
          <img src={close} className="form-img" alt="" />
        </button>
        <h3 className="form-modal-name">Murojaatingiz qabul qilindi!</h3>
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
    </div>
  );
};

export default Header;
