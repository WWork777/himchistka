"use client"
import React, { useState } from "react";
import "./OrderModal.scss";

export default function OrderModal({ isOpen, onClose, serviceName }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: serviceName || "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь обработка отправки формы
    console.log("Данные формы:", formData);
    // Закрываем модальное окно после отправки
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h2 className="modal-title">Заказать услугу</h2>
        <p className="modal-subtitle">Оставьте заявку и мы свяжемся с вами в ближайшее время</p>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Ваше имя *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Иван Иванов"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Номер телефона *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+7 (900) 123-45-67"
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Услуга</label>
            <input
              type="text"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="Химчистка дивана"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Дополнительная информация</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Укажите особенности (размеры, тип загрязнения и т.д.)"
              rows="4"
            />
          </div>

          <button type="submit" className="submit-btn">
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
}