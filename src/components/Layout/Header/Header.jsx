import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__grid">
        {/* Колонка 1: Логотип */}
        <div className="header__logo">
          ВС ЧистЮля
        </div>

        {/* Колонка 2: Навигация */}
        <nav className="header__nav">
          {/* <a href="#about" className="header__nav-link">О нас</a> */}
          <a href="#services" className="header__nav-link">Услуги</a>
          <a href="#reviews" className="header__nav-link">Отзывы</a>
          <a href="#contacts" className="header__nav-link">Контакты</a>
        </nav>

        {/* Колонка 3: Телефон */}
        <a href="tel:+7 (905)-904-92-39">
        <div className="header__phone">
          +7 (905)-904-92-39
        </div>
        </a>
      </div>
    </header>
  );
}