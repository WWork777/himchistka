"use client"
import './Reviews.scss';
import { useEffect, useState,useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';


export default function Reviews() {
    
    const items = [
        { id: '1', name: 'Inna', rank: 5, date: '19 июля 2024', text: 'Заказывали химчистку старого дивана, стал как новенький! Как 10 лет назад.' },
        { id: '2', name: 'Алексей П.', rank: 5, date: '29 июля 2024', text: 'Заказывали химчистку старого дивана, стал как новенький! Как 10 лет назад.' },
        { id: '3', name: 'Аноним', rank: 5, date: '24 января 2025', text: 'Заказывали химчистку старого дивана, стал как новенький! Как 10 лет назад.' },
        { id: '4', name: 'Аноним', rank: 5, date: '21 декабря 2024', text: 'Заказывали химчистку старого дивана, стал как новенький! Как 10 лет назад.' },
        { id: '5', name: 'Аноним', rank: 5, date: '14 декабря 2024', text: 'Заказывали химчистку старого дивана, стал как новенький! Как 10 лет назад.' },
        { id: '6', name: 'Аноним', rank: 5, date: '5 декабря 2024', text: 'Заказывали химчистку старого дивана, стал как новенький! Как 10 лет назад.' },
        { id: '7', name: 'Аноним', rank: 5, date: '1 декабря 2024', text: 'Заказывали химчистку старого дивана, стал как новенький! Как 10 лет назад.' },
    ];

    return (    
        <section className="reviews" id="reviews">
            <h2 className='reviews__title'>Отзывы</h2>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={15}
                // navigation={{
                //     nextEl: ".swiper-button-next-new",
                //     prevEl: ".swiper-button-prev-new",
                // }}
                // modules={[Navigation]}
                className="reviews-slider"
                loop='true'  
            >
                {items.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className='profile'>
                                <Image src={'/avatar.png'} alt='avatar' width={80} height={80} />
                                
                            <div className='rank'>
                                <span className='name'>{item.name}</span>
                                <p>{item.date}</p>
                                <div className='star'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"/></svg>
                                </div>
                                
                                
                            </div>
                        </div>
                            <div className='review'>
                                {item.text}
                            </div>
                    </SwiperSlide>
                ))}
                {/* <button className="swiper-button-prev-new"></button>
                <button className="swiper-button-next-new"></button> */}
            </Swiper>
        </section>
    )
}