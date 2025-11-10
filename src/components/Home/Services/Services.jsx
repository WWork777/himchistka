import React from "react";
import "./Services.scss";



export default function Services({ title, services, link }) {
  

  return (
    <section className="services" id={link}> 
      <h2 className="services__title">{title}</h2>
      <div className="services__grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-card__image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-card__content">
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__price">{service.price}</p>
              <a className="service-card__link" href="tel:+7 (905)-904-92-39">
                <button className="service-card__cta-button" >
                    <span className="service-card__cta-text">{service.buttonText}</span>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}