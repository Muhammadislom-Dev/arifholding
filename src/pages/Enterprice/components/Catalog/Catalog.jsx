import React from "react";
import './Catalog.css'
import { Link } from "react-router-dom";
import arrow from "../../../../assets/img/row.png";
import background from "../../../../assets/img/bgs.png";

const Catalog = () => {
  return (
    <>
      <div className="catalog">
        <div className="container">
          <h2 className="catalog-name">Korxonalar haqida</h2>
          <p className="catalog-subtext">
            <Link to="/" className="catalog-home">
              Bosh sahifa
            </Link>
            <img src={arrow} alt="" className="catalog-img" />
            <span>Korxona haqida</span>
          </p>
          <h3 className="catalog-subname">Semento</h3>
          <p className="catalog-text">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
            без заметных изменений пять веков, но и перешагнул в электронный
            дизайн. Его популяризации в новое время послужили публикация листов
            Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее
            время, программы электронной вёрстки типа Aldus PageMaker, в
            шаблонах которых используется Lorem Ipsum.
          </p>
        </div>
      </div>
      <img src={background} alt="" className="catalog-imgs" />
    </>
  );
};

export default Catalog;
