import React from "react";
import "./Sublime.css";
import download from "../../../../assets/img/download.png";
import time from "../../../../assets/img/Vector (67).png";
import busines from "../../../../assets/img/busines.png";
import dot from "../../../../assets/img/div.png";

const Sublime = () => {
  return (
    <div className="sublime">
      <div className="container">
        <div className="sublime-page">
          <div className="sublime-left">
            <h2 className="sublime-name">
              Iran protests: 'No going back' as unrest hits 100 days
            </h2>
            <p className="sublime-subname">
              <img src={time} alt="" className="sublime-icon" /> 4 hours ago
            </p>
            <div className="sublime-title">
              <button className="sublime-btn">
                <img src={download} alt="" className="sublime-logo" />
              </button>
              <span className="sublime-span">26.12.2022</span>
            </div>
            <img src={busines} alt="" className="sublime-img" />
            <p className="sublime-subtext">
              {" "}
              <span></span> Protests began in Iran's Kurdish region and spread
              across the country
            </p>
            <h3 className="sublime-names">By Sa’dulla Kobiljonov</h3>
            <h5 className="sublime-subnames">Arif Holding Social manager</h5>
            <img src={dot} alt="" className="sublime-pic" />
            <p className="sublime-text">
              More than 500 protesters, including 69 children, have been killed,
              according to the Human Rights Activists' News Agency (HRANA). Two
              protesters have been executed and at least 26 others face the same
              fate, after what Amnesty International calls "sham trials".
            </p>
            <p className="sublime-text">
              Although nationwide demonstrations have swept Iran before - once
              in 2017 lasting until early 2018, and another in November 2019 -
              the current protests are unique, as they involve people from
              across society and women are taking a lead role under the slogan
              "Woman, Life, Freedom".
            </p>
            <p className="sublime-text">
              Some Iranian celebrities have taken irrevocable steps to support
              protests, leading to their arrest or exile.
            </p>
            <p className="sublime-text">
              Taraneh Alidoosti, a well-known Iranian actress, is being held in
              the notorious Evin prison after she condemned the execution of a
              young protester. Previously, she published a photo of herself
              without a mandatory headscarf, holding a sign with the protesters'
              slogan.
            </p>
            <p className="sublime-text">
              "I have worked with Taraneh on four films and now she is in prison
              for her rightful support of her fellow countrymen and her
              opposition to the unjust sentences being issued," Asghar Farhadi,
              who directed Alidoosti in his Oscar-winning film The Salesman,
              wrote on Instagram.
            </p>
          </div>
          <div className="sublime-right">
            <h3 className="sublime-names">Top News</h3>
            <div className="sublime-item">
              <p className="sublime-texts">
                Dozens dead as big freeze grips North America
              </p>
              <spam className="sublime-spans">50 minutes ago</spam>
            </div>
            <div className="sublime-item">
              <p className="sublime-texts">
                Dozens dead as big freeze grips North America
              </p>
              <spam className="sublime-spans">50 minutes ago</spam>
            </div>
            <div className="sublime-item">
              <p className="sublime-texts">
                Dozens dead as big freeze grips North America
              </p>
              <spam className="sublime-spans">50 minutes ago</spam>
            </div>
            <div className="sublime-item">
              <p className="sublime-texts">
                Dozens dead as big freeze grips North America
              </p>
              <spam className="sublime-spans">50 minutes ago</spam>
            </div>
            <div className="sublime-item">
              <p className="sublime-texts">
                Dozens dead as big freeze grips North America
              </p>
              <spam className="sublime-spans">50 minutes ago</spam>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sublime;
