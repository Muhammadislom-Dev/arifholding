import React from "react";
import "./Footer.css";
import arif from "../../assets/img/ariff.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";
import facebook from "../../assets/icons/facebook.png";
import github from "../../assets/icons/github.png";

const Footer = () => {
  return (
    <div className="footerr">
      <div className="container">
        <div className="footer-title">
          <div className="footer-list">
            <div className="footer-sub">
              <img src={arif} alt="" className="footer-logos" />
              <p className="footerr-text">
                Xo`jalik mahsulotlari ishlab chiqarish kompaniyasi
              </p>
            </div>
            <p className="footerr-texts">
              Ijtimoiy tarmoqlarimizga obuna bo`ling
            </p>
            <ul className="footer-lists">
              <li className="footerr-items">
                <a href="#" className="footerr-links">
                  <img src={instagram} alt="" className="footer-logo" />
                </a>
              </li>
              <li className="footerr-items">
                <a href="#" className="footerr-links">
                  <img src={twitter} alt="" className="footer-logo" />
                </a>
              </li>
              <li className="footerr-items">
                <a href="#" className="footerr-links">
                  <img src={facebook} alt="" className="footer-logo" />
                </a>
              </li>
              <li className="footerr-items">
                <a href="#" className="footerr-links">
                  <img src={github} alt="" className="footer-logo" />
                </a>
              </li>
              <li className="footerr-items">
                <a href="#" className="footerr-links">
                  <img src={instagram} alt="" className="footer-logo" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h3 className="footerr-name">Kompaniyamiz</h3>
            <ul className="footer--list">
              <li className="footer-item">
                <a href="#" className="footerr-link">
                  Korxonalar
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footerr-link">
                  Biz haqimizda
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footerr-link">
                  Yangiliklar
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footerr-link">
                  Tadbirlar
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h3 className="footerr-name">Aloqa</h3>
            <ul className="footer--list">
              <li className="footer-item">
                <a href="tel:+998995595353" className="footerr-link">
                  +998995595353
                </a>
              </li>
              <li className="footer-item">
                <a href="tel:+998712770707" className="footerr-link">
                  +998712770707
                </a>
              </li>
              <li className="footer-item">
                <a href="mailto:info@arifgroup.uz" className="footerr-link">
                  info@arifgroup.uz
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footerr-link">
                  Toshkent shahar, Uchtepa tumani, 283A uy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
