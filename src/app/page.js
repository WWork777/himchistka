import Image from "next/image";
import styles from "./page.module.css";

import Hero from "@/components/Home/Hero/Hero";
import Services from "@/components/Home/Services/Services";
import Reviews from "@/components/Home/Reviews/Reviews";
import Contacts from "@/components/Home/Contacts/Contacts";

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Химчистка диванов",
      price: "от 3000 руб.",
      image: "/Services/himDivan.webp", // Замените на ваши пути к изображениям
      buttonText: "Заказать"
    },
    {
      id: 2,
      title: "Химчистка ковров",
      price: "от 1500 руб.",
      image: "/Services/himKovrov.webp",
      buttonText: "Заказать"
    },
    {
      id: 3,
      title: "Химчистка стульев",
      price: "от 500 руб.",
      image: "/Services/himChair.webp",
      buttonText: "Заказать"
    }
  ];

  const dopServices = [
    {
      id: 1,
      title: "Озонирование",
      price: "от 500 руб.",
      image: "/Services/Ozonirovanie.webp", // Замените на ваши пути к изображениям
      buttonText: "Заказать"
    },
    {
      id: 2,
      title: "Сухой туман",
      price: "от 1000 руб.",
      image: "/Services/suhoiTuman.webp",
      buttonText: "Заказать"
    },
    {
      id: 3,
      title: "Уборка после пожара",
      price: "от 2000 руб.",
      image: "/Services/fire.webp",
      buttonText: "Заказать"
    }
  ];
  return (
    <>
    <Hero />
    <Services title="Услуги" services={services} link="services"/>
    <Services title="Дополнительные услуги" services={dopServices} link="dopServices"/>
    <Reviews/>
    <Contacts/>
    </>
  );
}
