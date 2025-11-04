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
      price: "от 800 руб.",
      image: "/Services/1.png", // Замените на ваши пути к изображениям
      buttonText: "Заказать"
    },
    {
      id: 2,
      title: "Химчистка ковров",
      price: "от 800 руб.",
      image: "/Services/1.png",
      buttonText: "Заказать"
    },
    {
      id: 3,
      title: "Химчистка стульев",
      price: "от 800 руб.",
      image: "/Services/1.png",
      buttonText: "Заказать"
    }
  ];

  const dopServices = [
    {
      id: 1,
      title: "Озонирование",
      price: "от 800 руб.",
      image: "/Services/1.png", // Замените на ваши пути к изображениям
      buttonText: "Заказать"
    },
    {
      id: 2,
      title: "Сухой туман",
      price: "от 800 руб.",
      image: "/Services/1.png",
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
