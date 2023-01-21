import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import arif from "../../assets/img/arif.svg";
import Languages from "../Language/Language";
import Arif from "../../assets/icons/arif";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [logo, setLogo] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
      setLogo(true);
    } else {
      setNavbar(false);
      setLogo(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link className={navbar ? "active" : "navbar-links"} to="/">
              Ma’lumotlar
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => window.scrollTo({ top: 3100 })}
              className={navbar ? "active" : "navbar-links"}
              to="/"
            >
              Biz haqimizda
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              className={navbar ? "active" : "navbar-links"}
              to="/enterprice"
            >
              Korxonalar
            </Link>
          </li>
          <li className="navbar-item">
            <Link className={navbar ? "active" : "navbar-links"} to="/">
              <Arif />
            </Link>
          </li>
          <li className="navbar-item">
            <Link className={navbar ? "active" : "navbar-links"} to="/">
              Afzalliklarimiz
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => window.scrollTo({ top: 3900 })}
              className={navbar ? "active" : "navbar-links"}
              to="/"
            >
              Yangiliklar
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => window.scrollTo({ top: 6750 })}
              className={navbar ? "active" : "navbar-links"}
              to="/"
            >
              Aloqa
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
