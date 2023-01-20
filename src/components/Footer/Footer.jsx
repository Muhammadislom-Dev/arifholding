import React from "react";
import "./Footer.css";
import arif from "../../assets/img/arif.png";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook.svg";
import github from "../../assets/icons/github.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-title">
          <div className="footer-list">
            <div className="footer-sub">
              <img src={arif} alt="" className="footer-logos" />
              <p className="footer-text">
                Xo`jalik mahsulotlari ishlab chiqarish kompaniyasi
              </p>
            </div>
            <p className="footer-texts">
              Ijtimoiy tarmoqlarimizga obuna bo`ling
            </p>
            <ul className="footer-lists">
              <li className="footer-items">
                <a href="https://www.instagram.com" className="footer-links">
                  <img src={instagram} alt="" className="footer-logo" />
                </a>
              </li>
              <li className="footer-items">
                <a href="https://www.twitter.com" className="footer-links">
                  <img src={twitter} alt="" className="footer-logo" />
                </a>
              </li>
              <li className="footer-items">
                <a href="https://www.facebook.com" className="footer-links">
                  <img src={facebook} alt="" className="footer-logo" />
                </a>
              </li>
              <li className="footer-items">
                <a href="https://www.github.com" className="footer-links">
                  <img src={github} alt="" className="footer-logo" />
                </a>
              </li>
              <li className="footer-items">
                <a href="https://www.instagram.com" className="footer-links">
                  <img src={instagram} alt="" className="footer-logo" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h3 className="footer-name">Kompaniyamiz</h3>
            <ul className="footer--list">
              <li className="footer-item">
                <Link to="enterprice" className="footer-link">
                  Korxonalar
                </Link>
              </li>
              <li className="footer-item">
                <Link
                  onClick={() => window.scrollTo({ top: 2800 })}
                  to="/"
                  className="footer-link"
                >
                  Biz haqimizda
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/news" className="footer-link">
                  Yangiliklar
                </Link>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">
                  Tadbirlar
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h3 className="footer-name">Aloqa</h3>
            <ul className="footer--list">
              <li className="footer-item">
                <a href="tel:+998995595353" className="footer-link">
                  +998995595353
                </a>
              </li>
              <li className="footer-item">
                <a href="tel:+998712770707" className="footer-link">
                  +998712770707
                </a>
              </li>
              <li className="footer-item">
                <a href="mailto:info@arifgroup.uz" className="footer-link">
                  info@arifgroup.uz
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">
                  Toshkent shahar, <br />
                  Uchtepa tumani, 283A uy
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
