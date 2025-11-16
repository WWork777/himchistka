import { Montserrat } from "next/font/google";
import "./globals.css";

import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";




const montserrat = Montserrat({
  variable: "--montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Профессиональная химчистка в Кемерово | Химчистка ВС ЧистЮля",
  description: "Выездная химчистка мебели, ковров, матрасов и стульев в Кемерово. ВС ЧистЮля - профессиональная чистка с выездом на дом. Качественно, недорого, с гарантией.",
  alternates: { canonical: "https://vschistylya.ru" },
  keywords: [
    "выездная химчистка Кемерово", 
    "химчистка диванов", 
    "химчистка ковров", 
    "химчистка мебели", 
    "ВС ЧистЮля", 
    "чистка ковров",
    "химчистка матрасов",
    "профессиональная химчистка",
    "химчистка стульев",
    "химчистка на дому"
  ],
  openGraph: {
    title: "Выездная химчистка ВС ЧистЮля | Кемерово",
    description: "Профессиональная выездная химчистка мебели, ковров и матрасов в Кемерово. Качественно, безопасно, с выездом на дом.",
    url: "https://vschistylya.ru",
    images: [{ url: "/Home/Hero.png", alt: "Выездная химчистка ВС ЧистЮля" }],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
