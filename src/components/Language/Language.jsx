import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './Language.css'

const languages = ["en", "ru", "uz"];

const Languages = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("i18nextLng")
  );

  const isActive = (value) => {
    return selectedLanguage === value ? "active" : null;
  };

  const onChangeLanguage = (value) => {
    localStorage.setItem("i18nextLng", value);
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
  };
  return (
    <div className="language">
      {languages?.map((lang) => (
        <p
          key={lang}
          onClick={() => onChangeLanguage(lang)}
          className={isActive(lang)}
        >
          {lang}
        </p>
      ))}
    </div>
  );
};

export default Languages;

