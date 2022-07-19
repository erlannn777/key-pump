import React from "react";
import Consultation from "../../components/Consultation";
import "./faq.css";
const FAQ = () => {
  return (
    <div className="flex flex-col items-center">
      <div className=" container flex justify-center">
        <div className="w-full container w-full">
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
          </div>
        </div>
      </div>
      <Consultation />
    </div>
  );
};

export default FAQ;
