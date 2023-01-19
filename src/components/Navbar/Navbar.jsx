import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import arif from "../../assets/img/arif.svg";
import Languages from "../Language/Language";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link className="navbar-link navbar-links" to="/">
              Ma’lumotlar
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => window.scrollTo({ top: 3100 })}
              className="navbar-link navbar-links"
              to="/"
            >
              Biz haqimizda
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link navbar-links" to="/enterprice">
              Korxonalar
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/">
              <img src={arif} alt="" />
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link navbar-links" to="/">
              Afzalliklarimiz
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => window.scrollTo({ top: 3900 })}
              className="navbar-link navbar-links"
              to="/"
            >
              Yangiliklar
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => window.scrollTo({ top: 6750 })}
              className="navbar-link navbar-links"
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
