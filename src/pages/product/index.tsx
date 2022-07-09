import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import img from "../../img/catalog.png";
import Tab from "./Tabs";

const Product = () => {
  return (
    <>
      <div className="mx-12">
        <div className="w-full flex items-center mt-6">
          <Link to="/" className="col-span-1  text-xl text-black">
            Главная/
          </Link>
          <Link to="/catalog" className="col-span-1 text-xl text-gray-400">
            Каталог/
          </Link>
          <Link to="/product" className="col-span-1 text-xl text-gray-400">
            Геотермальный тепловой насос
          </Link>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-full p-2 ">
            <div className="w-full flex justify-center">
              <img className="w-96 h-96" src={img} alt="" />
            </div>

            <div className="w-full flex justify-between mt-4">
              <img className="w-36 h-36" src={img} alt="" />
              <img className="w-36 h-36" src={img} alt="" />
              <img className="w-36 h-36" src={img} alt="" />
              <img className="w-36 h-36" src={img} alt="" />
            </div>
          </div>
          <div className="w-full p-2">
            <div className="text-xl font-medium my-2">
              ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС SILA GM-15 S (H)
            </div>
            <div className="text-2xl font-medium my-2 mt-12">283 000₽</div>
            <div className="flex justify-between mt-24">
              <button className="bg-orange-400 py-2 text-white px-7 w-2/5">
                Купить
              </button>
              <button className="bg-slate-500 py-2 text-white px-7 w-2/5">
                Быстрая покупка
              </button>
            </div>
            <div className="accordion flex flex-col  justify-center w-full mt-12">
              <div className="w-full ">
                <input
                  type="checkbox"
                  name="panel"
                  id="panel-1"
                  className="hidden"
                />
                <label
                  htmlFor="panel-1"
                  className=" label-faq relative block text-black p-4 shadow  bg-gray-100"
                >
                  Оплата
                </label>
                <div className="accordion__content overflow-hidden bg-grey-lighter flex flex-col">
                  <p className="mx-4">
                    Оплата при получении товара, Картой онлайн, Google Pay,
                    Акционная оплата картой Visa, Безналичными для юридических
                    лиц, Безналичными для физических лиц, Apple Pay, PrivatPay,
                    Оплата картой в отделении
                  </p>
                </div>
              </div>
              <div className="w-full ">
                <input
                  type="checkbox"
                  name="panel"
                  id="panel-2"
                  className="hidden"
                />
                <label
                  htmlFor="panel-2"
                  className=" label-faq relative block text-black p-4 shadow  bg-gray-100"
                >
                  Монтаж и доставка
                </label>
                <div className="accordion__content overflow-hidden bg-grey-lighter flex flex-col">
                  <p className="mx-4">
                    Оплата при получении товара, Картой онлайн, Google Pay,
                    Акционная оплата картой Visa, Безналичными для юридических
                    лиц, Безналичными для физических лиц, Apple Pay, PrivatPay,
                    Оплата картой в отделении
                  </p>
                </div>
              </div>
              <div className="w-full ">
                <input
                  type="checkbox"
                  name="panel"
                  id="panel-3"
                  className="hidden"
                />
                <label
                  htmlFor="panel-3"
                  className=" label-faq relative block text-black p-4 shadow  bg-gray-100"
                >
                  Гарантии и выгода
                </label>
                <div className="accordion__content overflow-hidden bg-grey-lighter flex flex-col">
                  <p className="mx-4">
                    Оплата при получении товара, Картой онлайн, Google Pay,
                    Акционная оплата картой Visa, Безналичными для юридических
                    лиц, Безналичными для физических лиц, Apple Pay, PrivatPay,
                    Оплата картой в отделении
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Tab />
        <Carousel />
      </div>
      <div className="w-full flex flex-col items-center text-center py-12 bg-slate-100">
        <span className="text-3xl font-bold">Мы Вам перезвоним</span>
        <p className="text-sm">
          Если у вас возникли какие-то вопросы или проблемы, заполните форму и
          мы Вам перезвоним.
        </p>
        <form className="flex">
          <div className="flex px-2 py-4 sm:block">
            <input
              type="text"
              placeholder="Ваше имя"
              required
              className="m-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
            <input
              type="text"
              placeholder="Ваш Email"
              required
              className="m-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
            <button className="bg-orange-300 px-4 sm:py-1">Отправить</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Product;
