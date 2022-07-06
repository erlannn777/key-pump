import React from "react";
import cl from "./footer.module.css";
import logo from "../../img/logo.svg";
import vk from "../../img/vk.png";
import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex justify-center  bg-gray-800">
      <footer className="w-full p-4  container flex flex-wrap justify-between">
        <div className="flex flex-col justify-between">
          <img src={logo} alt="" />
          <div className="flex text-2xl justify-around text-white ">
            <BsTwitter />
            <AiFillFacebook />
            <BsTwitter />
          </div>
        </div>
        <div className="flex flex-col text-white m-3 ">
          <span className="text-lg font-medium">Навигация</span>
          <span>
            <Link to="/">Главная</Link>
          </span>
          <span>
            <Link to="/catalog">Каталог</Link>
          </span>
          <span>
            <Link to="/faq"> Вопрос-ответ</Link>
          </span>
          <span>
            <Link to="/about-us">О нас</Link>
          </span>
        </div>
        <div className="flex flex-col text-white m-3 ">
          <span className="text-lg font-medium">Наши контакты</span>
          <span>Телефоны</span>
          <span>+7 (964) 945 41 38</span>
          <span>Email</span>
          <span>info@keypumps.ru</span>
        </div>{" "}
        <div className="flex flex-col text-white m-3 ">
          <span className="text-lg font-medium">Наш адрес</span>
          <span className="break-all">Россия, г. Сочи, ул. Горького, 87</span>
        </div>{" "}
        <div className="flex flex-col text-white m-3 ">
          <span className="text-lg font-medium">Информация</span>
          <span>Доставка и оплата</span>
          <span>Гарантии</span>
          <span>Возврат товара</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
