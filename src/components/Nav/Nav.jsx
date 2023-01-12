import React from "react";
import { Link } from "react-router-dom";
import arif from "../../assets/img/ariff.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link className="nav-link navbar-links" to="/">
              Ma’lumotlar
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => window.scrollTo({ top: 3100 })}
              className="nav-link navbar-links"
              to="/"
            >
              Biz haqimizda
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link navbar-links" to="/enterprice">
              Korxonalar
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              <img src={arif} alt="" />
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => window.scrollTo({ top: 3900 })}
              className="nav-link navbar-links"
              to="/news"
            >
              Yangiliklar
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link navbar-links" to="/">
              Afzalliklarimiz
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => window.scrollTo({ top: 6750 })}
              className="nav-link navbar-links"
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

export default Nav;
