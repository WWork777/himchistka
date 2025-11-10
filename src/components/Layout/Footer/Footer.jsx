import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* Колонка 1: Логотип */}
        <div className="footer__column">
          <a href="#hero"><div className="footer__logo">ВС ЧистЮля</div></a>
        </div>

        {/* Колонка 2: О нас */}
        {/* <div className="footer__column">
            <a href="#about"><h4 className="footer__title">О нас</h4></a>
          
        </div> */}

        {/* Колонка 3: Услуги */}
        <div className="footer__column">
          <a href="#services"><h4 className="footer__title">Услуги</h4></a>
          <a href="#dopServices"><div className="footer__item">Дополнительные услуги</div></a>
        </div>

        {/* Колонка 4: Отзывы */}
        <div className="footer__column">
          <a href="#reviews"><h4 className="footer__title">Отзывы</h4></a>
        </div>

        {/* Колонка 5: Контакты */}
        <div className="footer__column">
          <a href="#contacts"><h4 className="footer__title">Контакты</h4></a>
          <div className="footer__messengers">
            <a href=""><img className="footer__messenger-icon"src="/Footer/telegram.svg" alt="" /></a>
            <a href=""><img className="footer__messenger-icon"src="/Footer/whatsapp.svg" alt="" /></a>
            <a href=""><img className="footer__messenger-icon"src="/Footer/phone.svg" alt="" /></a>
          </div>
          <a href="tel:+7 (905)-904-92-39"><div className="footer__phone">+7 (905)-904-92-39</div></a>
        </div>
      </div>
    </footer>
  );
}