import React from "react";
import Carousel from "react-grid-carousel";
import firstImg from "./assets/first.png";
import secondImg from "./assets/second.png";
import fourthImg from "./assets/fourth.png";
import brand1 from "./assets/brands/brand1.png";
import brand2 from "./assets/brands/brand2.png";
import brand3 from "./assets/brands/brand3.png";
import brand4 from "./assets/brands/brand4.png";
import brand5 from "./assets/brands/brand5.png";
import brand6 from "./assets/brands/brand6.png";
import brand7 from "./assets/brands/brand7.png";
import brand8 from "./assets/brands/brand8.png";
import brand9 from "./assets/brands/brand9.png";
import builder1 from "./assets/team/builder1.png";
import builder2 from "./assets/team/builder2.png";
import builder3 from "./assets/team/builder3.png";
import contact1Img from "./assets/contacts/contact1.png";
import contact2Img from "./assets/contacts/contact2.png";
import contact3Img from "./assets/contacts/contact3.png";
import logo1 from "../../img/about-icon-1.svg";
import logo2 from "../../img/about-icon-2.svg";
import logo3 from "../../img/about-icon-3.svg";
import Consultation from "../../components/Consultation";
import absoluteImg from "./assets/absolute-img.png";

const AboutUs = () => {
  const brands = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
  ];
  return (
    <div className=" flex flex-col items-center">
      <div className=" mt-12 container ">
        <div style={{ maxWidth: "1500px" }} className="lg:mx-24 ">
          <div className="flex items-start justify-start mb-4">
            <h2>
              Главная / <span className="text-gray-400">О нас</span>
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full md:flex justify-between items-center block">
              <div className="lg:w-5/12 flex justify-center pattern p-4">
                {" "}
                <img className="object-contain " src={firstImg} alt="" />
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="my-4">
                  <span className="text-4xl">Компания</span>
                  <span className="bg-orange-200 p-2 text-4xl text-orange-400 ml-4">
                    KEYPUMPS
                  </span>
                </div>
                <p className="break-words">
                  Компания «KEYPUMPS» входит в группу компаний «KEY
                  CORPORATION». Компания имеет более 12 лет опыта в монтаже и
                  внедрении высокоэффективных систем отопления, вентиляции и
                  кондиционирования на базе энергосберегающих технологий.
                  Применение выработанных решений в бизнес-центрах, гостиницах,
                  банкахи прочих жилых и коммерческих зданиях.
                </p>
              </div>
            </div>
            <div className="my-24  items-center block lg:flex">
              <div className="flex flex-col text-start lg:w-1/2">
                <div className="mr-4">
                  <div className="text-orange-300 my-4 text-3xl font-medium p-2 border-b w-32 border-orange-300">
                    О НАС
                  </div>
                  <p className="break-words">
                    Продукция предназначена для стран СНГ с учетом всех
                    особенностей тяжелых зим, резких изменений климата,
                    учитываются все особенности питающих электрических сетей,
                    низкие цены на все тепловые насосы с сохранением всех
                    технологий, полный набор всех режимов в одном изделии
                    (отопление, охлаждение, ГВС), самые современные контроллеры
                    автоматики, двухкомпессорные системы позволяющие
                    одновременную работу в режимах нагрева/охлаждения и ГВС.
                  </p>
                </div>
              </div>
              <div className="pattern p-4 lg:w-5/12 relative">
                <img className="object-contain " src={secondImg} alt="" />
                <img
                  style={{ top: "9rem", left: "-1rem" }}
                  className="absolute 2xl:w-56 w-28 sm:w-36"
                  src={absoluteImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-8 bg-slate-50 p-2">
          <div className="text-center">
            <span className="text-4xl">Почему KeyPumps?</span>
          </div>
          <div className="w-full lg:flex items-center justify-between block my-10">
            <div className="lg:w-5/12">
              <img className="object-contain " src={fourthImg} alt="" />
            </div>
            <div className="lg:w-1/2 pl-4 flex w-full mt-2">
              <div>
                <div className="mb-4 flex items-start">
                  <div className="text-slate-100 p-2 rounded-full outline">
                    <img src={logo1} alt="logo" className="w-[50px]  " />
                  </div>
                  <div className="pl-4">
                    <span className="font-medium">Возврат стоимости</span>
                    <p className="text-sm text-slate-600">
                      За каждый отправленый товар который окажеться бракованным,
                      мы вернем вам стоимость.
                    </p>
                  </div>
                </div>
                <div className="mb-4 flex items-start">
                  <div className="text-slate-100 p-2 rounded-full outline">
                    <img src={logo2} alt="logo" className="w-[100px]" />
                  </div>
                  <div className="pl-4">
                    <span className="font-medium">Монтаж</span>
                    <p className="text-sm text-slate-600">
                      За каждый отправленый товар который окажеться бракованным,
                      мы вернем вам стоимость.Наши квалифицированные специалисты
                      обеспечат высокое качество монтажа и наладки
                      электрооборудования
                    </p>
                  </div>
                </div>
                <div className="mb-4 flex items-start">
                  <div className="text-slate-100 p-2 rounded-full outline">
                    <img src={logo3} alt="logo" className="w-[50px]" />
                  </div>
                  <div className="pl-4">
                    <span className="font-medium">Надежность</span>
                    <p className="text-sm text-slate-600">
                      Мы поставляем лучшее в своем классе оборудование ведущих
                      зарубежных производителей
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-700 flex items-center justify-center flex-col md:flex-row py-12">
          <div className="m-8 text-center">
            <span className="text-7xl text-white font-semibold">5,567</span>
            <p className="text-orange-400">Довольных клиентов</p>
          </div>
          <div className="m-8 text-center">
            <span className="text-7xl text-white font-semibold">1245</span>
            <p className="text-orange-400">Продуктов на выбор</p>
          </div>
          <div className="m-8 text-center">
            <span className="text-7xl text-white font-semibold">372</span>
            <p className="text-orange-400">Продаж в день</p>
          </div>
          <div className="m-8 text-center">
            <span className="text-7xl text-white font-semibold">20</span>
            <p className="text-orange-400">Лет на рынке</p>
          </div>
        </div>
        <div className="lg:mx-24">
          <div className="flex flex-col items-center">
            <div className="w-full my-8">
              <Carousel cols={1} rows={1} gap={1}>
                <Carousel.Item className="">
                  <div className="text-center p-4 w-full flex flex-col items-center">
                    <span className="text-4xl font-semibold">ООО “Феникс”</span>
                    <p className="font-bold text-lg text-slate-600 max-w-4xl">
                      OOO «Модульстрой» выражает благодарность «KEYPUMPS» за
                      выполненный спектр услуг по обслуживанию климатической
                      техники. Обязательства были выполнены в соответствии с
                      договором и четким соблюдением сроков выполнения. Желаем
                      Вам грандиозных планов, перспективных партнеров и успехов
                      в развитии бизнеса.{" "}
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="">
                  <div className="text-center p-4 w-full flex flex-col items-center">
                    <span className="text-4xl font-semibold">
                      ООО “Феникс 2”
                    </span>
                    <p className="font-bold text-lg text-slate-600 max-w-4xl">
                      OOO «Модульстрой» выражает благодарность «KEYPUMPS» за
                      выполненный спектр услуг по обслуживанию климатической
                      техники. Обязательства были выполнены в соответствии с
                      договором и четким соблюдением сроков выполнения. Желаем
                      Вам грандиозных планов, перспективных партнеров и успехов
                      в развитии бизнеса.{" "}
                    </p>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="">
                  <div className="text-center p-4 w-full flex flex-col items-center">
                    <span className="text-4xl font-semibold">
                      ООО “Феникс 3”
                    </span>
                    <p className="font-bold text-lg text-slate-600 max-w-4xl">
                      OOO «Модульстрой» выражает благодарность «KEYPUMPS» за
                      выполненный спектр услуг по обслуживанию климатической
                      техники. Обязательства были выполнены в соответствии с
                      договором и четким соблюдением сроков выполнения. Желаем
                      Вам грандиозных планов, перспективных партнеров и успехов
                      в развитии бизнеса.{" "}
                    </p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="w-full">
              <div className="w-full text-center">
                <span className="text-orange-300 my-4 text-3xl font-medium p-2 border-b border-orange-300 w-96">
                  Производители, с которыми мы работаем
                </span>
              </div>
              <div className="w-full flex flex-wrap justify-center">
                {brands.map((brand: any, index) => (
                  <img key={index} src={brand} alt="" />
                ))}
              </div>
            </div>
            <div className="w-full bg-white">
              <div className="w-full text-center flex justify-start  text-orange-400 ">
                <span className="text-orange-300 my-4 text-3xl font-medium p-2 border-b border-orange-300">
                  команда
                </span>
              </div>
              <div className="w-full lg:flex justify-center block">
                <div className="flex flex-col items-center bg-slate-100 m-2 w-80 xl:w-3/12">
                  <img
                    className="object-contain w-full"
                    src={builder1}
                    alt=""
                  />
                  <div className="flex flex-col items-center p-2">
                    <div className="font-medium text-base break-words text-center">
                      Специалист по монтажу тепловых насосов
                    </div>
                    <p className="font-light">Александров П. А.</p>
                  </div>
                </div>
                <div className="flex flex-col items-center bg-slate-100 m-2 w-80 xl:w-3/12">
                  <img
                    className="object-contain w-full "
                    src={builder2}
                    alt=""
                  />
                  <div className="flex flex-col items-center p-2">
                    <div className="font-medium text-base break-words text-center">
                      Специалист по монтажу тепловых насосов
                    </div>
                    <p className="font-light">Александров П. А.</p>
                  </div>
                </div>
                <div className="flex flex-col items-center bg-slate-100 m-2 w-80 xl:w-3/12">
                  <img
                    className="object-contain w-full "
                    src={builder1}
                    alt=""
                  />
                  <div className="flex flex-col items-center p-2">
                    <div className="font-medium text-base break-words text-center">
                      Специалист по монтажу тепловых насосов
                    </div>
                    <p className="font-light">Александров П. А.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full block justify-between py-8 block lg:flex ">
              <div className="hidden lg:block w-1/2">
                <form className="flex flex-col items-start text-start lg:w-full w-86">
                  <span className="text-2xl font-bold py-4">
                    Остались вопросы?
                  </span>
                  <p className="break-words text-sm text-slate-600">
                    Если у вас возникли какие-то вопросы по поводу оптовых
                    заказов, заполните форму и мы Вам перезвоним.
                  </p>
                  <div className="flex flex-col py-2">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      required
                      className="py-2 px-2 text-lg font-semibold m-2"
                    />
                    <input
                      type="text"
                      placeholder="Ваш Email"
                      required
                      className="py-2 px-2 text-lg font-semibold m-2"
                    />
                  </div>

                  <button
                    className="py-4 px-16 font-semibold text-black"
                    style={{ background: "rgba(246, 171, 57, 1)" }}
                  >
                    Отправить
                  </button>
                </form>
              </div>
              <div className="">
                <div className="w-full text-start py-4">
                  <span className="font-bold text-2xl">Контакты</span>
                </div>
                <div className="w-full lg:flex justify-between block my-6">
                  <div className="flex flex-col text-start mb-2">
                    <span className="font-medium">Наш адрес</span>
                    <p className="text-sm text-slate-600">
                      Россия, г. Сочи, ул. Горького, 87
                    </p>
                  </div>
                  <div className="flex flex-col text-start mb-2">
                    <span className="font-medium">Телефоны</span>
                    <p className="text-sm text-slate-600">+7 (964) 945 41 38</p>
                  </div>{" "}
                  <div className="flex flex-col text-start mb-2">
                    <span className="font-medium">Email</span>
                    <p className="text-sm text-slate-600">info@keypumps.ru</p>
                  </div>
                </div>

                <div className="w-full flex justify-between ">
                  <div className="w-40 m-1">
                    <img className="w-full" src={contact1Img} alt="" />
                  </div>
                  <div className="w-40 m-1">
                    <img className="w-full" src={contact2Img} alt="" />
                  </div>
                  <div className="w-40 m-1">
                    <img className="w-full" src={contact3Img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <Consultation />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
