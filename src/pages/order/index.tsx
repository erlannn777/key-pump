import React from "react";
import cdek from "./assets/cdek.png";
import del from "./assets/del.png";
import pochta from "./assets/pochta.png";
import card from "./assets/card.svg";
import pay from "./assets/pay.svg";

const Order = () => {
  return (
    <div className=" flex justify-center my-8 mx-2 lg:mx-12">
      <div className=" container ">
        <h2>
          Главная / <span className="text-gray-400">Доставка и оплата</span>
        </h2>
        <div className="w-full flex justify-start my-4 text-center lg:text-start">
          <span className="text-3xl font-bold">Доставка</span>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-full  justify-between items-center flex flex-col lg:flex-row">
            <div className="flex flex-col m-2">
              <div>
                <img className="object-contain" src={pochta} alt="" />
              </div>
              <div className="w-full py-2">
                <div className="font-bold text-xl p-2 m-2 border-l-2 border-orange-500">
                  Почта России
                </div>
              </div>
              <label className="my-2 custom-checkbox">
                <input checked type="checkbox" name="" id="" />
                <span className="text-gray-600 text-base">
                  {" "}
                  Получение посылки согласно условиям перевозчика
                </span>
              </label>
              <label className="my-2 custom-checkbox">
                <input checked type="checkbox" name="" id="" />
                <span className="text-gray-600 text-base">
                  {" "}
                  Доставка в течении 1-2 дней
                </span>
              </label>
            </div>
            <div className="flex flex-col m-2">
              <div>
                <img className="object-contain" src={del} alt="" />
              </div>
              <div className="w-full py-2">
                <div className="font-bold text-xl p-2 m-2 border-l-2 border-orange-500">
                  Деловые линии
                </div>
              </div>
              <label className="my-2 custom-checkbox">
                <input checked type="checkbox" name="" id="" />
                <span className="text-gray-600 text-base">
                  {" "}
                  Получение посылки согласно условиям перевозчика
                </span>
              </label>
              <label className="my-2 custom-checkbox">
                <input checked type="checkbox" name="" id="" />
                <span className="text-gray-600 text-base">
                  {" "}
                  Доставка в течении 1-2 дней
                </span>
              </label>
            </div>{" "}
            <div className="flex flex-col m-2">
              <div>
                <img className="object-contain" src={cdek} alt="" />
              </div>
              <div className="w-full py-2">
                <div className="font-bold text-xl p-2 m-2 border-l-2 border-orange-500">
                  СДЭК
                </div>
              </div>
              <label className="my-2 custom-checkbox">
                <input checked type="checkbox" name="" id="" />
                <span className="text-gray-600 text-base">
                  {" "}
                  Получение посылки согласно условиям перевозчика
                </span>
              </label>
              <label className="my-2 custom-checkbox">
                <input checked type="checkbox" name="" id="" />
                <span className="text-gray-600 text-base">
                  {" "}
                  Доставка в течении 1-2 дней
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex flex-col text-start">
            <span className="font-bold text-2xl pb-2 flex">
              <img className="mr-1" src={card} alt="" /> Оплата
            </span>
            <span className="text-xl pb-2">Банковская карта</span>
            <p className="text-gray-600 text-base">
              Онлайн заказ можно оплатить с помощью банковской карты, выпущенной
              на территории России. Оформляя заказ на сайте, в пункте «Оплата»
              выберите «Банковская карта». После переадресации на страницу
              системы безопасных платежей, необходимо лишь подтвердить платеж.
            </p>
          </div>
          <div className="w-full flex flex-col text-start my-2">
            <span className="text-xl pb-2 flex">
              <img className="mr-1" src={pay} alt="" /> Оплата при получении
              товара
            </span>
            <p className="text-gray-600 text-base">
              Онлайн заказ можно оплатить непосредственно при получении.
              Оформляя заказ на сайте, в пункте «Оплата» выберите «Оплата при
              получении товара». После того как товар будет доставлен к
              заказчику, после полного осмотра, оплатите стоимость товара
              удобным для вас способом.
            </p>
          </div>
          <div className="border w-full border-gray-500 my-4" />
        </div>
        <div className="w-full flex flex-col text-start">
          <span className="font-bold text-2xl py-4">Гарантии</span>
          <span className="text-xl pb-2 ">
            На все товары, приобретенные в нашем магазине, предоставляется
            гарантия, дающая право на:
          </span>
          <ul className="list-disc ul">
            <li className="py-2 text-gray-600 text-base">
              обмен или возврат товара в срок до 14 дней с момента приобретения;
            </li>
            <li className="py-2 text-gray-600 text-base">
              обмен или возврат товара на основании акта, выданного
              Авторизованным сервисным центром по результатам гарантийного
              обслуживания (в соответствии с Законом РФ «О защите прав
              потребителей»).
            </li>
          </ul>
          <div className="border w-full border-gray-500 my-4" />
        </div>
        <div className="w-full flex flex-col text-start">
          <span className="font-bold text-2xl py-4">Возврат товара</span>
          <span className="text-xl pb-2">
            Подготовьте, пожалуйста, все необходимые документы:
          </span>
          <ul className="list-disc ul">
            <li className="py-2 text-gray-600 text-base">
              выданный продавцом расчетный документ (чек / акт приема-передачи /
              накладная или др.), подтверждающий факт приобретения;
            </li>
            <li className="py-2 text-gray-600 text-base">гарантийный талон;</li>
            <li className="py-2 text-gray-600 text-base">
              документ, удостоверяющий личность;
            </li>
            <li className="py-2 text-gray-600 text-base">
              идентификационный налоговый номер (ИНН);
            </li>
            <li className="py-2 text-gray-600 text-base">
              в случае оплаты покупки банковской картой – актуальные реквизиты
              карточного счета.
            </li>
          </ul>
          <span className="text-xl py-4">
            Передайте товар на гарантийное обслуживание, обязательно приложите
            указанные выше документы.
          </span>
          <p className="pb-2 text-gray-600 text-base">
            Полезная информация о правах потребителя в случае приобретения им
            товара ненадлежащего качества – Закона РФ «О защите прав
            потребителей».
          </p>
          <p className="text-gray-600 text-base">
            Уважаемый покупатель, приносим извинения за неудобства, случившиеся
            в связи с выходом из строя. По вашему обращению будут приняты все
            меры для быстрого решения вашей проблемы.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
