import React from "react";

const Checkout = () => {
  return (
    <div className="w-full flex flex-col items-center px-12 mt-22 ">
      <h1 className="w-full text-4xl py-4 font-bold">Оформление заказа</h1>
      <div className="w-full flex  items-start justify-around ">
        <div className="border rounded mb-4 p-2">
          <h2>1. Контактные данные</h2>
          <form>
            <div className="flex items-center sm:block">
              <label className="flex flex-col m-1">
                Фамиля
                <input
                  type="text"
                  placeholder="Фамиля"
                  className="border rounded py-1"
                />
              </label>
              <label className="flex flex-col m-1">
                Имя
                <input
                  type="text"
                  placeholder="Имя"
                  className="border rounded py-1 pl-1"
                />
              </label>
            </div>
            <div className="flex items-center mb-4 sm:block">
              <label className="flex flex-col m-1">
                Телефон
                <input
                  type="phone"
                  placeholder="+7(___)___ ___ ___"
                  className="border rounded py-1 pl-1"
                />
              </label>
              <label className="flex flex-col m-1">
                Е-mail
                <input
                  type="email"
                  placeholder="example@mail.ru"
                  className="border rounded py-1 pl-1"
                />
              </label>
            </div>
            <div className="mb-4">
              <h2>2. Доставка</h2>
              <div className="flex flex-col">
                <label className="m-1">
                  <input type="radio" />
                  &nbsp; Сдек
                </label>
                <label className="m-1">
                  <input type="radio" />
                  &nbsp; Почта России
                </label>
                <label className="m-1">
                  <input type="radio" />
                  &nbsp; Деловые линии
                </label>
              </div>
            </div>
            <div className="mb-4">
              <h2>3. Оплата</h2>
              <div className="flex flex-col">
                <label className="m-1">
                  <input type="radio" />
                  &nbsp; Оплата при получении товара
                </label>
                <label className="m-1">
                  <input type="radio" />
                  &nbsp; Банковская карта
                </label>
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <span className="pb-2">Комментарий</span>
              <textarea
                placeholder="Напишите комментарий"
                className="border rounded"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="border rounded mb-4">
          <h1 className="p-4 text-2xl font-bold">Итоги</h1>
          <div className="border-b-[1.5px]" />
          <div>
            <div className="flex items-start justify-between p-4">
              <img
                src="https://keypumps.ru/wp-content/uploads/2022/03/nibe-f1355.jpg"
                alt="image"
                width={80}
              />
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm pr-6">
                    ПЛОСКИЙ СОЛНЕЧНЫЙ КОЛЛЕКТОР
                  </span>
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <div className="m-2">
                    <span className="text-xl">-</span>
                    <span className="border py-1 px-4 mx-2">2</span>
                    <span className="text-xl">+</span>
                  </div>
                  <div>
                    <span className="text-sm">33 000₽</span>
                    <del className="text-sm text-gray-300 pl-4">37 000₽</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between p-4">
              <div className="flex items-center">
                <h2 className="text-[#F6AB3A] mr-3">Редактировать</h2>
                <svg
                  className="h-4 w-4 text-[#F6AB3A]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </div>
              <div className="flex items-center">
                <span>К оплате:</span>
                <h1 className="pl-2 font-bold">66 000₽</h1>
              </div>
            </div>
            <div className="border-b-[1.5px]" />
            <div className="p-4">
              <h1>Комплектация</h1>
              <form>
                <label>
                  <input type="checkbox" />
                  &nbsp; Нужна установка
                </label>
              </form>
            </div>
            <div className="border-b-[1.5px]" />
            <div className="p-4 text-center ">
              <button className="px-8 py-2 bg-[#F6AB3A] mb-4 text-white">
                Подтвердить заказ
              </button>
              <div className="flex items-center justify-between">
                <span>Промокод</span>
                <span>Добавить</span>
              </div>
            </div>
            <div className="border-b-[1.5px]" />
            <div className="p-4">
              <p className="text-xs">
                Оформляя заказ, я принимаю условия
                <span className="text-[#F6AB3A] underline pl-4">
                  пользовательського соглашения
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
