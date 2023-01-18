import React, { useState } from "react";
import "./Content.css";
import audio from "../../../../assets/img/audio.png";
import phone from "../../../../assets/img/phone.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import VideoModal from "../../../ReactModal/components/VideoModal/VideoModal";
import { IoCloseOutline } from "react-icons/io5";

const Content = () => {
  const [videoModal, setVideoModal] = useState(false);

  function handleVideoModal() {
    setVideoModal(!videoModal);
  }

  return (
    <div className="content">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container">
            <h2 className="content-name">
              KAMRON ADHAM
              <p className="content-span">Ceo and founder </p>
            </h2>
            <p className="content-text">
              Хамкорларимиз мавжуд биз улар билан анчадан бери ишлаб келмокдамиз
              уларни 89% бизниин химатларимиздан мамнун ва кизикиш блдрмокта
            </p>

            <div className="content-list">
              <button onClick={handleVideoModal} className="content-btn">
                <img
                  style={{ paddingLeft: 0 }}
                  src={audio}
                  alt=""
                  className="content-img"
                />{" "}
                <p className="content-subname">Батафсил видео</p>
              </button>
              <a href="tel:998712770707" className="content-btn">
                <img src={phone} alt="" className="content-img" />{" "}
                <p className="content-subname">Алокага чикиш</p>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <h2 className="content-name">
              KAMRON ADHAM
              <p className="content-span">Ceo and founder </p>
            </h2>
            <p className="content-text">
              Хамкорларимиз мавжуд биз улар билан анчадан бери ишлаб келмокдамиз
              уларни 89% бизниин химатларимиздан мамнун ва кизикиш блдрмокта
            </p>

            <div className="content-list">
              <button onClick={handleVideoModal} className="content-btn">
                <img
                  style={{ paddingLeft: 0 }}
                  src={audio}
                  alt=""
                  className="content-img"
                />{" "}
                <p className="content-subname">Батафсил видео</p>
              </button>
              <a href="tel:998712770707" className="content-btn">
                <img src={phone} alt="" className="content-img" />{" "}
                <p className="content-subname">Алокага чикиш</p>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <VideoModal show={videoModal}>
        <div>
          <div className="content-modal-item">
            <button onClick={() => setVideoModal()} className="close-modal">
              <IoCloseOutline style={{marginLeft:"-3px"}}  />
            </button>
          </div>
          <iframe
            width="100%"
            height="460px"
            src="https://www.youtube.com/embed/egLiAz2dtUo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="content-video-modal"
          ></iframe>
        </div>
      </VideoModal>
    </div>
  );
};

export default Content;
