import React from "react";
import logo from "../../img/logo.svg";
import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex justify-center  bg-gray-800">
      <footer className="w-full p-4  container flex flex-wrap justify-between">
        <div className="flex lg:flex-col justify-between w-80 lg:w-auto items-center">
          <img className="w-32 h-32" src={logo} alt="" />
          <div className="flex text-2xl justify-between text-white w-2/5 lg:w-auto">
            <BsTwitter />
            <AiFillFacebook />
            <BsTwitter />
          </div>
        </div>
        <div className="flex flex-col text-white m-3 ">
          <span className="text-lg font-medium">Навигация</span>
          <span>
            <Link className="opacity-70" to="/">
              Главная
            </Link>
          </span>
          <span>
            <Link className="opacity-70" to="/catalog">
              Каталог
            </Link>
          </span>
          <span>
            <Link className="opacity-70" to="/faq">
              {" "}
              Вопрос-ответ
            </Link>
          </span>
          <span>
            <Link className="opacity-70" to="/about-us">
              О нас
            </Link>
          </span>
        </div>
        <div className="flex flex-col text-white m-3 ">
          <span className="text-lg font-medium">Наши контакты</span>
          <span className="opacity-70">Телефоны</span>
          <span className="opacity-70">+7 (964) 945 41 38</span>
          <span className="opacity-70">Email</span>
          <span className="opacity-70">info@keypumps.ru</span>
        </div>{" "}
        <div className="flex justify-between ">
          <div className="flex flex-col text-white m-3 w-1/2 lg:w-auto">
            <span className="text-lg font-medium">Наш адрес</span>
            <span className="break-words opacity-70">
              Россия, г. Сочи, ул. Горького, 87
            </span>
          </div>{" "}
          <div className="flex flex-col text-white m-3 ">
            <span className="text-lg font-medium">Информация</span>
            <span className="opacity-70">Доставка и оплата</span>
            <span className="opacity-70">Гарантии</span>
            <span className="opacity-70">Возврат товара</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
