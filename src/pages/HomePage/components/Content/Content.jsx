import React, { useState } from "react";
import "./Content.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import VideoModal from "../../../ReactModal/components/VideoModal/VideoModal";
import { IoCloseOutline } from "react-icons/io5";
import Audio from "../../../../assets/icons/audio";
import Phone from "../../../../assets/icons/phone";
import kamron from "../../../../assets/img/kamron.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

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
          <img src={kamron} alt="" className="content-imgs" />
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
                <span className="content-img-span">
                  <Audio />
                </span>
                <p className="content-subname">Батафсил видео</p>
              </button>
              <a href="tel:998712770707" className="content-btn">
                <span className="content-span-img">
                  <Phone />
                </span>
                <p className="content-subname">Алокага чикиш</p>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={kamron} alt="" className="content-imgs" />
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
                <span className="content-img-span">
                  <Audio />
                </span>
                <p className="content-subname">Батафсил видео</p>
              </button>
              <a href="tel:998712770707" className="content-btn">
                <span className="content-span-img">
                  <Phone />
                </span>
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
              <IoCloseOutline style={{ marginLeft: "-3px" }} />
            </button>
          </div>
          {!!videoModal && (
            <iframe
              width="100%"
              height="460px"
              className="content-video-modal"
              src="https://www.youtube.com/embed/ZM4sJ5cZdG0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          )}
        </div>
      </VideoModal>
    </div>
  );
};

export default Content;
