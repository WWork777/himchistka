import React from "react";
import "./Contacts.scss";


export default function Contacts() {
  return (
    <section className="contacts">
      <h2 className="contacts__title">Контакты</h2>
      <div className="contacts__grid">
        <div className="contacts__image">
          <img src="/Contacts/cnt-photo.png" alt="Контакты" />
        </div>
        <div className="contacts__info">
          <div className="contacts__item">
            <a href="">
                <h3>Адрес:</h3>
                <p>600000, г. Кемерово, ул. Ленина 3</p>
            </a>
          </div>
          <div className="contacts__item">
            <a href="">
                <h3>Номер телефона:</h3>
                <p>8 905 904 92 39</p>
            </a>
          </div>
          <div className="contacts__item">
            <a href="">
                <h3>E-mail:</h3>
                <p>lala@mail.ru</p>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}