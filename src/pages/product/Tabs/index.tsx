import React from "react";

const Tab = () => {
  const [openTab, setOpenTab] = React.useState(1);

  const tabs = [
    {
      number: 1,
      label: "Характеристики",
    },
    {
      number: 2,
      label: "Описание",
    },
    {
      number: 3,
      label: "Детали",
    },
  ];

  console.log(openTab);

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`
                text-sm font-medium  px-5 py-3 cursor-pointer 
                ${
                  openTab === tab.number
                    ? "border-b border-yellow-400"
                    : "border-none"
                }
              `}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(tab.number);
              }}
            >
              {tab.label}
            </div>
          ))}
        </ul>
        <div className="relative break-words w-full">
          <div className="px-4 py-5 flex-auto w-full">
            <div className="tab-content tab-space w-full">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="w-full block lg:flex justify-center">
                  <table className="w-80 m-2 lg:mx-24">
                    <tbody>
                      <tr className="bg-slate-100">
                        <td className="">Тип</td>
                        <td className="">Геотермальный</td>
                      </tr>
                      <tr>
                        <td className="">Рабочие режимы</td>
                        <td className="">Отопление, ГВС</td>
                      </tr>
                      <tr className="bg-slate-100">
                        <td className="">Рабочее напряжение</td>
                        <td className="">220-240 В / 50 Гц / 1 фаза</td>
                      </tr>
                      <tr>
                        <td className="">Мощность нагрева</td>
                        <td className="">15 кВт</td>
                      </tr>{" "}
                      <tr className="bg-slate-100">
                        <td className="">Потребляемая мощность</td>
                        <td className="">2,9 кВт</td>
                      </tr>{" "}
                      <tr>
                        <td className="">COP</td>
                        <td className="">5,2</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="w-80 m-2 lg:mx-24">
                    <tbody>
                      <tr className="bg-slate-100">
                        <td className="">Максимальная температура нагрева</td>
                        <td className="">60°С</td>
                      </tr>
                      <tr>
                        <td className="">Хладагент</td>
                        <td className="">60°С</td>
                      </tr>
                      <tr className="bg-slate-100">
                        <td className="">Размеры</td>
                        <td className="">R410A</td>
                      </tr>
                      <tr>
                        <td className="">Температура источника тепла</td>
                        <td className="">-10 +35°С</td>
                      </tr>{" "}
                      <tr className="bg-slate-100">
                        <td className="">Контроллер</td>
                        <td className="">Проводной</td>
                      </tr>{" "}
                      <tr>
                        <td className="">COP</td>
                        <td className="">5,2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <p>
                  Геотермальный тепловой насос SILA GM-15 S (H) предназначен для
                  использования в системах отопления и горячего водоснабжения.
                  Тепловой насос «выкачивает» тепловую энергию, содержащуюся в
                  грунте или воде и направляет ее потребителю. Использование
                  теплового насоса позволяет экономить до 75% расходов на
                  отопление и ГВС. В геотермальных тепловых насосах SILA
                  используются компрессоры Copeland что обеспечивает их
                  максимальную надежность и эффективность.
                </p>
                <div className="text-xl font-medium">
                  Преимущества теплового насоса SILA GM-15 S (H):
                </div>
                <div className="flex flex-col">
                  <label className="m-2">
                    <input className="m-1" type="checkbox" checked={true} />
                    Экономия до 75 % расходов на отопление и ГВС;
                  </label>
                  <label className="m-2">
                    <input className="m-1" type="checkbox" checked={true} />
                    Компрессор Copeland обеспечивает высокую надежность и
                    эффективность;
                  </label>{" "}
                  <label className="m-2">
                    <input className="m-1" type="checkbox" checked={true} />
                    Тип теплового насоса: геотермальный (источником тепла
                    является грунт или вода);
                  </label>{" "}
                  <label className="m-2">
                    <input className="m-1" type="checkbox" checked={true} />
                    Окупаемость за 4-9 лет;
                  </label>
                </div>
                <p>
                  Современные тепловые насосы отличаются высокой
                  энергоэффективностью, что в практическом плане означает
                  следующее — потребитель, т.е. владелец дома, используя
                  тепловой насос, тратит на обогрев своего жилища, в среднем,
                  всего четверть тех денег, которые он потратил бы, если
                  теплового насоса не было. Иначе говоря, в системе с тепловым
                  насосом, 75% полезного тепла обеспечивается за счет бесплатных
                  источников — тепла земли или грунтовых вод и только за
                  оставшиеся 25% вы платите энергогенерирующим компаниям. Для
                  получения тепла, тепловой насос использует электричество. При
                  этом количество полученной тепловой энергии в разы больше
                  затраченной электрической.
                </p>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="w-full flex justify-center">
                  <tbody className="w-80">
                    <tr className="bg-slate-100">
                      <td className="">Производитель</td>
                      <td className="">Nibe</td>
                    </tr>
                    <tr>
                      <td className="">Страна-производитель</td>
                      <td className="">Швеция</td>
                    </tr>
                    <tr className="bg-slate-100">
                      <td className="">Артикул</td>
                      <td className="">40-280</td>
                    </tr>
                  </tbody>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
