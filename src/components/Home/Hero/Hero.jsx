import React from "react";
import "./Hero.scss"

export default function Hero() {
    return(
        <section className="hero">
            <div className="hero__content">
                <div className="hero__circle">
                    <h1 className="hero__title">ВЫЕЗДНАЯ ХИМЧИСТКА</h1>
                    <p className="hero__subtitle">Мы поможем погрузиться в мир чистоты</p>
                    
                    <button className="hero__cta-button">
                    <span className="hero__cta-text">Заказать</span>
                    </button>
                </div>
                
            </div>
        </section>
    );
}