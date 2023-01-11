import React, { useState } from "react";
import "./Form.css";
import insta from "../../../../assets/img/insta.png";
import telegram from "../../../../assets/img/telegram.png";
import phone from "../../../../assets/img/phone.png";
// import ModalSucces from "../../pages/ModalSucces/ModalSucces";
import close from "../../../../assets/img/+.png";
import { Link } from "react-router-dom";

const Form = () => {
  const [greatModal, setGreatModal] = useState(false);

  function openGreatModal() {
    setGreatModal(!greatModal);
  }

  const formBtn = (e) => {
    e.preventDefault();
    if (e.target[0].value.length > 0 && e.target[1].value.length > 0) {
      let botMessege = `
                     Salom, Yangi Xabar!😊%0A
                     Ismi 👤: ${e.target[0].value}%0A
                     Raqam ☎: ${e.target[1].value}%0A 
                     Sizning xabaringiz  📝: ${e.target[3].value}%0A 
                `;

      let url = `https://api.telegram.org/bot5861028519:AAEojIy3EZeId4cR6f3ob2QYFkubcnsYRjY/sendMessage?chat_id=-1001699557669&text=${botMessege}`;
      async function fetchAsync(url) {
        let response = await fetch(url);
        let data = await response.json();
        return data;
      }
      fetchAsync(url);

      if (document.querySelector("#name").matches(".input-error")) {
        document.querySelector("#name").classList.remove("input-error");
        document.querySelector("#errorText").classList.remove("error-text1");
        document.querySelector("#closestBtn").classList.remove("close1-btn");
        document.querySelector("#closestBtn1").classList.remove("closes-btn1");
      }
      if (document.querySelector("#tel").matches(".tel-error")) {
        document.querySelector("#tel").classList.remove("tel-error");
        document.querySelector("#errorTel").classList.remove("error-tel1");
        document
          .querySelector("#closestBtn")
          .classList.remove("modal-closest-btn");
        document.querySelector("#closestBtn").classList.remove("close1-btn");
        document.querySelector("#closestBtn1").classList.remove("closes-btn1");
      }

      e.target[0].value = "";

      e.target[1].value = "";

      e.target[2].value = "";

      openGreatModal();
    } else {
      if (e.target[0].value.length < 1) {
        document.querySelector("#name").classList.add("input-error");
        document.querySelector("#errorText").classList.add("error-text1");

        document.querySelector("#closestBtn").classList.add("close1-btn");
        document.querySelector("#closestBtn1").classList.add("close2-btn");
      }
      if (e.target[1].value.length < 1) {
        document.querySelector("#tel").classList.add("tel-error");
        document.querySelector("#errorTel").classList.add("error-tel1");
        document
          .querySelector("#closestBtn")
          .classList.add("modal-closest-btn");
        document.querySelector("#closestBtn").classList.add("close1-btn");
        document.querySelector("#closestBtn1").classList.add("close2-btn");
      }
    }
  };

  return (
    <div className="form">
      <div className="container">
        <h2 className="form-name">Савол, таклиф ва мурожаатлар борми?</h2>
        <form 
        // onSubmit={formBtn} 
        action="" className="form-list">
          <input
            placeholder="Ismingiz"
            type="name"
            id="name"
            name="name"
            required
            className="form-input"
          />
          <input
            placeholder="Telefon raqamingiz"
            type="tel"
            id="tel"
            name="tel"
            required
            className="form-input"
          />
          <textarea
            placeholder="Sizning xabaringiz..."
            name="tel"
            id="tel"
            required
          />
          <button type="submit" className="form-button">
            Биз билан богланиш
          </button>
        </form>
        <ul className="form-lists">
          <li className="form-item">
            <a href="#" className="form-link">
              <img src={insta} alt="" className="form-icon" />
            </a>
          </li>
          <li className="form-item">
            <a href="#" className="form-link">
              <img src={telegram} alt="" className="form-icon" />
            </a>
          </li>
          <li className="form-item">
            <a href="#" className="form-link">
              <img src={phone} alt="" className="form-icon" />
            </a>
          </li>
        </ul>
      </div>

      {/* <ModalSucces shows={greatModal}>
        <button onClick={() => setGreatModal()} className="form-close">
          <img src={close} className="form-img" alt="" />
        </button>
        <h3 className="form-modal-name">Murojaatingiz qabul qilindi!</h3>
        <div className="form-modal-title">
          <a
            href="/"
            onClick={() => window.scrollTo({ top: 0 })}
            className="form-modal-link"
          >
            Ok
          </a>
        </div>
      </ModalSucces> */}
    </div>
  );
};

export default Form;
