import React, { useState } from "react";
import "./Header.css";
import Modal from "../../../ReactModal/components/Modal/Modal";
import holcim from "../../../../assets/img/holcim.png";
import close from "../../../../assets/img/+.png";
import call from "../../../../assets/img/call.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Header = () => {
  const [connection, setConnection] = useState(false);

  const handleConnection = () => {
    setConnection(!connection);
  };

  return (
    <div className="header">
      {/* <div className="container">
        <h2 className="header-name">Semento цемент ишлаб чикариш корхонаси</h2>
        <p className="header-text">
          It doesn’t matter that much to show a really good UI, excellent
          animated interactions or a complex IA{" "}
        </p>
        <div className="header-title">
          <button className="header-btn">Batafsil</button>
          <button onClick={handleConnection} className="header-btn">
            Богланиш
          </button>
        </div>

        <div className="header-list">
          <img src={holcim} alt="" className="header-img" />
          <p className="header-span">
            Semento цементлари хакида{" "}
            <a href="#" className="header-link">
              батафсил танишиш
            </a>
          </p>
        </div>
      </div> */}
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container">
            <h2 className="header-name">
              Semento цемент ишлаб чикариш корхонаси
            </h2>
            <p className="header-text">
              It doesn’t matter that much to show a really good UI, excellent
              animated interactions or a complex IA{" "}
            </p>
            <div className="header-title">
              <button className="header-btn">Batafsil</button>
              <button onClick={handleConnection} className="header-btn">
                Богланиш
              </button>
            </div>

            <div className="header-list">
              <img src={holcim} alt="" className="header-img" />
              <p className="header-span">
                Semento цементлари хакида{" "}
                <a href="#" className="header-link">
                  батафсил танишиш
                </a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <h2 className="header-name">
              Semento цемент ишлаб чикариш корхонаси
            </h2>
            <p className="header-text">
              It doesn’t matter that much to show a really good UI, excellent
              animated interactions or a complex IA{" "}
            </p>
            <div className="header-title">
              <button className="header-btn">Batafsil</button>
              <button onClick={handleConnection} className="header-btn">
                Богланиш
              </button>
            </div>

            <div className="header-list">
              <img src={holcim} alt="" className="header-img" />
              <p className="header-span">
                Semento цементлари хакида{" "}
                <a href="#" className="header-link">
                  батафсил танишиш
                </a>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <h2 className="header-name">
              Semento цемент ишлаб чикариш корхонаси
            </h2>
            <p className="header-text">
              It doesn’t matter that much to show a really good UI, excellent
              animated interactions or a complex IA{" "}
            </p>
            <div className="header-title">
              <button className="header-btn">Batafsil</button>
              <button onClick={handleConnection} className="header-btn">
                Богланиш
              </button>
            </div>

            <div className="header-list">
              <img src={holcim} alt="" className="header-img" />
              <p className="header-span">
                Semento цементлари хакида{" "}
                <a href="#" className="header-link">
                  батафсил танишиш
                </a>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Modal show={connection}>
        <button onClick={() => setConnection()} className="header-close">
          <img src={close} alt="" />
        </button>
        <div className="header-modal">
          <img src={call} alt="" className="header-img" />
          <div className="header-right">
            <h3 className="header-subname">Biz bilan bog`laning</h3>
            <h5 className="header-subnames">O`zimiz aloqaga chiqamiz</h5>
            <form action="" className="header-form">
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
    </div>
  );
};

export default Header;
