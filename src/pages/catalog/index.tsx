import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../img/catalog.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Carousel from "../../components/Carousel";
import { defaultTheme, Provider, RangeSlider } from "@adobe/react-spectrum";

const Catalog = () => {
  let [range, setRange] = React.useState({ start: 25, end: 75 });
  const products = [
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      oldPrice: 37000,
      img: img,
      avaible: true,
      counted: false,
    },
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      oldPrice: 37000,
      img: img,
      avaible: true,
      counted: false,
    },
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      oldPrice: 37000,
      img: img,
      avaible: true,
      counted: false,
    },
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      oldPrice: 37000,
      img: img,
      avaible: true,
      counted: false,
    },
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      oldPrice: 37000,
      img: img,
      avaible: true,
      counted: false,
    },
  ];

  return (
    <>
      <div className="mx-12">
        <div className="w-full flex items-center mt-6">
          <Link to="/" className="col-span-1  text-xl text-black">
            Главная/
          </Link>
          <Link to="/catalog" className="col-span-1 text-xl text-gray-400">
            Каталог
          </Link>
        </div>
        <div className="text-2xl font-medium my-2">Тепловые насосы(854)</div>
        <div className="flex ">
          <div style={{ width: "30%" }} className="flex flex-col items-center">
            <div className="border border-yellow-500 py-2 text-xl px-2 w-full flex justify-center">
              Сбросить фильтры
            </div>
            <div className="border border-gray w-full p-2 mt-2">
              <div className="">
                <div>Фильтр</div>
                <div>Цена</div>
                <div className="flex justify-between">
                  <div className="p-2 border border-gray w-5/12">
                    {range.start}
                  </div>
                  <div className="p-2 border border-gray w-5/12">
                    {range.end}
                  </div>
                </div>
                <div className="w-full flex justify-center mt-4">
                  <Provider theme={defaultTheme}>
                    <RangeSlider
                      width="17rem"
                      value={range}
                      onChange={setRange}
                    />
                  </Provider>
                </div>
              </div>
              <div className="border border-gray w-full my-4"></div>
              <div className="accordion flex flex-col  justify-center w-full">
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
                    Особенность
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter flex flex-col">
                    <label>
                      <input type="checkbox" />
                      <span className="p-1 break-all">
                        {" "}
                        Геотермальные тепловые насосы (65)
                      </span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span className="p-1 break-all">
                        {" "}
                        Вентеляционные тепловые насосы (15)
                      </span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span className="p-1 break-all">
                        {" "}
                        Тепловые насосы воздух/вода (45)
                      </span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span className="p-1 break-all">
                        {" "}
                        Доп. оборудование и аксессуары (31)
                      </span>
                    </label>
                  </div>
                  <div className="border border-gray w-full my-4"></div>
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
                    Бренд
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter flex flex-col">
                    <label>
                      <input type="checkbox" />
                      <span className="p-1 break-all"> Sila (15)</span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span className="p-1 break-all">Nibe (22)</span>
                    </label>
                  </div>
                  <div className="border border-gray w-full my-4"></div>
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
                    Мощность нагрева
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter flex flex-col">
                    <label>
                      <input type="checkbox" />
                      <span className="p-1 break-all"> Sila (15)</span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span className="p-1 break-all">Nibe (22)</span>
                    </label>
                  </div>
                  <div className="border border-gray w-full my-4"></div>
                </div>
                <div className="w-full ">
                  <input
                    type="checkbox"
                    name="panel"
                    id="panel-4"
                    className="hidden"
                  />
                  <label
                    htmlFor="panel-4"
                    className=" label-faq relative block text-black p-4 shadow  bg-gray-100"
                  >
                    Размеры
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter flex flex-col">
                    <label>
                      <input type="checkbox" />
                      <span className="p-1 break-all"> Sila (15)</span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span className="p-1 break-all">Nibe (22)</span>
                    </label>
                  </div>
                  <div className="border border-gray w-full my-4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-2">
            <div className="flex justify-between mx-2">
              <span className="flex items-center">
                Геотермальные тепловые насосы{" "}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <path
                    d="M10.6668 1.33398L1.3335 10.6673M10.6668 10.6673L1.3335 1.33398L10.6668 10.6673Z"
                    stroke="#E44286"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <div className="dropdown inline-block relative ml-2">
                <button className="bg-white border text-gray-700 font-semi-bold py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-1">По пулярности</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <ul className="dropdown-menu absolute z-50 hidden text-gray-700 pt-1 w-full">
                  <li className="">
                    <a
                      className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="/"
                    >
                      По пулярности
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="/"
                    >
                      По пулярности
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="/"
                    >
                      По пулярности
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-wrap">
              {products.length > 0
                ? products.map((item) => (
                    <div className="w-72 h-96 border border-gray flex flex-col m-2">
                      <div className="w-full h-80 relative">
                        <div className="absolute flex justify-between p-2">
                          <div className="flex col-span-2 align-middle gap-2">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="20" height="20" fill="white" />
                              <path
                                d="M6 10L9 13L14 7"
                                stroke="#24C56E"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <p>В наличии</p>
                          </div>
                        </div>
                        <img className="w-full h-full" src={img} alt="" />
                      </div>
                      <div className="p-2">
                        <span className="break-all">{item.title}</span>
                        <div className="w-full flex justify-between items-center">
                          <span>{item.price}</span>
                          <div className="p-2 bg-yellow-500">
                            <AiOutlineShoppingCart />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
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

export default Catalog;
