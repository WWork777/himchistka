import React from "react";
import "./Contacts.scss";


export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <h2 className="contacts__title">Контакты</h2>
      <div className="contacts__grid">
        <div className="contacts__image">
          <img src="/Contacts/cnt-photo.png" alt="Контакты" />
        </div>
        <div className="contacts__info">
          <div className="contacts__item">
            <a href="https://yandex.ru/maps/64/kemerovo/house/prospekt_v_v_mikhaylova_3bk5/bE8YdAVjTEUPQFtvfXhzdnlhYQ==/?ll=86.223508%2C55.427525&z=17">
                <h3>Адрес:</h3>
                <p>г. Кемерово, Лесная Поляна, пр-кт В.В. Михайлова, 3б, корпус 5.</p>
            </a>
          </div>
          <div className="contacts__item">
            <a href="tel:+7 (905)-904-92-39">
                <h3>Номер телефона:</h3>
                <p>+7 (905)-904-92-39</p>
            </a>
          </div>
          <div className="contacts__item">
            <a href="mailto:Vova-gvalt@yandex.ru">
                <h3>E-mail:</h3>
                <p>Vova-gvalt@yandex.ru</p>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}