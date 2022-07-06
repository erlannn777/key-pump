import React from "react";
import "./faq.css";
const FAQ = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full container sm:max-w-full">
        <div className="flex items-start justify-start my-4">
          <h2>
            Главная / <span className="text-gray-400">FAQ Вопрос-ответ</span>
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="text-start py-4">
            <span className="text-3xl font-bold">
              Ответы на часто задаваемые вопросы
            </span>
          </div>
          <div className="accordion flex flex-col  justify-center ">
            <div className="w-1/8 ">
              <input
                type="checkbox"
                name="panel"
                id="panel-1"
                className="hidden"
              />
              <label
                htmlFor="panel-1"
                className=" label-faq relative block text-black p-4 shadow m-2 bg-gray-100"
              >
                Вы осуществляете доставку?
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <p className="accordion__body p-4" id="panel1">
                  Техническое обслуживание тепловых насосов для отопления и
                  охлаждения — ключевой фактор долговечности климатической
                  системы. Вовремя обнаруженные отклонения рабочих параметров
                  системы от заданных, помогут сохранить работоспособность
                  оборудования, не прибегая к дорогостоящему ремонту.
                </p>
              </div>
            </div>
            <div className="w-1/8 ">
              <input
                type="checkbox"
                name="panel"
                id="panel-2"
                className="hidden"
              />
              <label
                htmlFor="panel-2"
                className="label-faq  relative block  text-black p-4 shadow m-2 bg-gray-100"
              >
                Установка и монтаж облорудования включены в стоимость?
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <p className="accordion__body p-4">
                  Техническое обслуживание тепловых насосов для отопления и
                  охлаждения — ключевой фактор долговечности климатической
                  системы. Вовремя обнаруженные отклонения рабочих параметров
                  системы от заданных, помогут сохранить работоспособность
                  оборудования, не прибегая к дорогостоящему ремонту.
                </p>
              </div>
            </div>
            <div className="w-1/8 ">
              <input
                type="checkbox"
                name="panel"
                id="panel-3"
                className="hidden"
              />
              <label
                htmlFor="panel-3"
                className="label-faq relative block  text-black p-4 shadow m-2 bg-gray-100"
              >
                Как оплатить?
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <p className="accordion__body p-4">
                  Техническое обслуживание тепловых насосов для отопления и
                  охлаждения — ключевой фактор долговечности климатической
                  системы. Вовремя обнаруженные отклонения рабочих параметров
                  системы от заданных, помогут сохранить работоспособность
                  оборудования, не прибегая к дорогостоящему ремонту.
                </p>
              </div>
            </div>
            <div className="w-1/8 ">
              <input
                type="checkbox"
                name="panel"
                id="panel-4"
                className="hidden"
              />
              <label
                htmlFor="panel-4"
                className="label-faq relative block  text-black p-4 shadow m-2 bg-gray-100"
              >
                Обслуживание тепловых насосов
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <p className="accordion__body p-4">
                  Техническое обслуживание тепловых насосов для отопления и
                  охлаждения — ключевой фактор долговечности климатической
                  системы. Вовремя обнаруженные отклонения рабочих параметров
                  системы от заданных, помогут сохранить работоспособность
                  оборудования, не прибегая к дорогостоящему ремонту.
                </p>
              </div>
            </div>
            <div className="w-1/8 ">
              <input
                type="checkbox"
                name="panel"
                id="panel-5"
                className="hidden"
              />
              <label
                htmlFor="panel-5"
                className="label-faq relative block  text-black p-4 shadow m-2 bg-gray-100"
              >
                В какие сроки происходит установка?
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <p className="accordion__body p-4">
                  Техническое обслуживание тепловых насосов для отопления и
                  охлаждения — ключевой фактор долговечности климатической
                  системы. Вовремя обнаруженные отклонения рабочих параметров
                  системы от заданных, помогут сохранить работоспособность
                  оборудования, не прибегая к дорогостоящему ремонту.
                </p>
              </div>
            </div>
          </div>
          {/* <details className="my-2">
            <summary className="bg-gray-100 p-2">
              Вы осуществляете доставку?
            </summary>
            <p>
              Техническое обслуживание тепловых насосов для отопления и
              охлаждения — ключевой фактор долговечности климатической системы.
              Вовремя обнаруженные отклонения рабочих параметров системы от
              заданных, помогут сохранить работоспособность оборудования, не
              прибегая к дорогостоящему ремонту.
            </p>
          </details>
          <details className="mb-2">
            <summary className="bg-gray-100 p-2">
              Установка и монтаж облорудования включены в стоимость?
            </summary>
            <p>
              Техническое обслуживание тепловых насосов для отопления и
              охлаждения — ключевой фактор долговечности климатической системы.
              Вовремя обнаруженные отклонения рабочих параметров системы от
              заданных, помогут сохранить работоспособность оборудования, не
              прибегая к дорогостоящему ремонту.
            </p>
          </details>
          <details className="mb-2">
            <summary className="bg-gray-100 p-2">Как оплатить?</summary>
            <p>
              Техническое обслуживание тепловых насосов для отопления и
              охлаждения — ключевой фактор долговечности климатической системы.
              Вовремя обнаруженные отклонения рабочих параметров системы от
              заданных, помогут сохранить работоспособность оборудования, не
              прибегая к дорогостоящему ремонту.
            </p>
          </details>{" "}
          <details className="mb-2">
            <summary className="bg-gray-100 p-2">
              Обслуживание тепловых насосов
            </summary>
            <p>
              Техническое обслуживание тепловых насосов для отопления и
              охлаждения — ключевой фактор долговечности климатической системы.
              Вовремя обнаруженные отклонения рабочих параметров системы от
              заданных, помогут сохранить работоспособность оборудования, не
              прибегая к дорогостоящему ремонту.
            </p>
          </details>{" "}
          <details className="mb-2">
            <summary className="bg-gray-100 p-2">
              В какие сроки происходит установка?
            </summary>
            <p>
              Техническое обслуживание тепловых насосов для отопления и
              охлаждения — ключевой фактор долговечности климатической системы.
              Вовремя обнаруженные отклонения рабочих параметров системы от
              заданных, помогут сохранить работоспособность оборудования, не
              прибегая к дорогостоящему ремонту.
            </p>
          </details> */}
        </div>
        <div className="w-full flex flex-col items-center text-center py-12">
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
      </div>
    </div>
  );
};

export default FAQ;
