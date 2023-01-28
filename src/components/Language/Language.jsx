import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Language.css";

const languages = ["en", "ru", "uz"];

const Languages = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("i18nextLng")
  );

  const onChangeLanguage = (value) => {
    localStorage.setItem("i18nextLng", value);
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
  };

  console.log(selectedLanguage);
  return (
    <div className="nav__langs">
      <p className="nav__current-lang">{selectedLanguage}</p>
      <span className="nav__current-lang-path" />
      <ul className="nav__langs-container">
        {languages?.map((lang) => (
          <li
            key={lang}
            onClick={() => onChangeLanguage(lang)}
            className="nav__lang"
          >
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;

{
  /* <div className="navbar-langs">
<p className="nav__current-lang">EN</p>
<span className="nav__current-lang-path" />
<ul className="nav__langs-container">
  <li  className="navbar-lang">
    RU
  </li>
  <li  className="navbar-lang">
    UZ
  </li>
</ul>
</div> */
}
