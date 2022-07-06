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
import logo1 from '../../img/about-icon-1.svg'
import logo2 from '../../img/about-icon-2.svg'
import logo3 from '../../img/about-icon-3.svg'

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
        <div className="w-full mt-12">
            <div className='mx-24 sm:m-4'>
                <div className='flex items-start justify-start mb-4'>
                    <h2>Главная / <span className='text-gray-400'>О нас</span></h2>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-full flex justify-between items-center sm:block">
                        <img className="object-contain w-80 h-96" src={firstImg} alt=""/>
                        <div className='w-1/2 sm:w-full'>
                            <div className='my-4'>
                                <span className='text-3xl'>Компания</span>
                                <span className="bg-orange-200 p-2 text-3xl text-orange-400 ml-4">KEYPUMPS</span>
                            </div>
                            <p className="break-words">
                                Компания «KEYPUMPS» входит в группу компаний «KEY CORPORATION».
                                Компания имеет более 12 лет опыта в монтаже и внедрении
                                высокоэффективных систем отопления, вентиляции и кондиционирования
                                на базе энергосберегающих технологий. Применение выработанных
                                решений в бизнес-центрах, гостиницах, банкахи прочих жилых и
                                коммерческих зданиях.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex items-center sm:block sm:flex sm:flex-col-reverse">
                        <div className="flex flex-col text-start">
                            <div className='mr-4'>
                                <span className='text-orange-300 underline my-4'>О НАС</span>
                                <p className="break-words">
                                    Продукция предназначена для стран СНГ с учетом всех особенностей
                                    тяжелых зим, резких изменений климата, учитываются все особенности
                                    питающих электрических сетей, низкие цены на все тепловые насосы с
                                    сохранением всех технологий, полный набор всех режимов в одном
                                    изделии (отопление, охлаждение, ГВС), самые современные
                                    контроллеры автоматики, двухкомпессорные системы позволяющие
                                    одновременную работу в режимах нагрева/охлаждения и ГВС.
                                </p>
                            </div>
                        </div>
                        <img className="object-contain w-100 h-96" src={secondImg} alt=""/>
                    </div>
                    <div className="flex flex-col mt-8">
                        <div className="text-center">
                            <span className='text-4xl'>Почему KeyPumps?</span>
                        </div>
                        <div className="w-full flex items-center justify-between sm:block">
                            <div>
                                <img className="object-contain w-80 h-96" src={fourthImg} alt=""/>
                            </div>
                            <div className='w-1/2 pl-4 flex sm:w-full'>
                                <div>
                                <div className='mb-4 flex items-start'>
                                    <div>
                                        <img src={logo1} alt="logo" className='outline w-12 rounded-full text-orange-400 p-1 '/>
                                    </div>
                                    <div  className='pl-4'>
                                        <span>Возврат стоимости</span>
                                        <p className='text-sm'>
                                            За каждый отправленый товар который окажеться бракованным, мы
                                            вернем вам стоимость.
                                        </p>
                                    </div>
                                </div>
                                <div className='mb-4 flex items-start'>
                                    <div>
                                        <img src={logo2} alt="logo" className='outline w-24 text-orange-400 rounded-full p-1'/>
                                    </div>
                                    <div className='pl-4'>
                                        <span>Монтаж</span>
                                        <p className='text-sm'>
                                            За каждый отправленый товар который окажеться бракованным, мы
                                            вернем вам стоимость.Наши квалифицированные специалисты
                                            обеспечат высокое качество монтажа и наладки
                                            электрооборудования
                                        </p>
                                    </div>
                                </div>
                                <div className='mb-4 flex items-start'>
                                    <div>
                                        <img src={logo3} alt="logo" className='outline w-12 text-orange-400 rounded-full p-1'/>
                                    </div>
                                    <div  className='pl-4'>
                                        <span>Надежность</span>
                                        <p className='text-sm'>
                                            Мы поставляем лучшее в своем классе оборудование ведущих
                                            зарубежных производителей
                                        </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-60 bg-gray-700 flex items-center justify-center sm:block">
                    <div className="m-8 text-center">
                        <span className='text-4xl text-white font-bold'>5,567</span>
                        <p className='text-orange-400'>Довольных клиентов</p>
                    </div>
                    <div className="m-8 text-center">
                        <span className='text-4xl text-white font-bold'>1245</span>
                        <p className='text-orange-400'>Продуктов на выбор</p>
                    </div>
                    <div className="m-8 text-center">
                        <span className='text-4xl text-white font-bold'>372</span>
                        <p className='text-orange-400'>Продаж в день</p>
                    </div>
                    <div className="m-8 text-center">
                        <span className='text-4xl text-white font-bold'>20</span>
                        <p className='text-orange-400'>Лет на рынке</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-full my-8">
                        <Carousel
                            cols={1}
                            rows={1}
                            gap={1}
                        >
                            <Carousel.Item className="">
                                <div className="text-center p-4">
                                    <span className='text-2xl font-bold'>ООО “Феникс”</span>
                                    <p>
                                        OOO «Модульстрой» выражает благодарность «KEYPUMPS» за
                                        выполненный спектр услуг по обслуживанию климатической
                                        техники. Обязательства были выполнены в соответствии с
                                        договором и четким соблюдением сроков выполнения. Желаем Вам
                                        грандиозных планов, перспективных партнеров и успехов в
                                        развитии бизнеса.{" "}
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="">
                                <div className="text-center p-4">
                                    <span className='text-2xl font-bold'>ООО “Феникс 2”</span>
                                    <p>
                                        OOO «Модульстрой» выражает благодарность «KEYPUMPS» за
                                        выполненный спектр услуг по обслуживанию климатической
                                        техники. Обязательства были выполнены в соответствии с
                                        договором и четким соблюдением сроков выполнения. Желаем Вам
                                        грандиозных планов, перспективных партнеров и успехов в
                                        развитии бизнеса.{" "}
                                    </p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item className="">
                                <div className="text-center p-4">
                                    <span className='text-2xl font-bold'>ООО “Феникс 3”</span>
                                    <p>
                                        OOO «Модульстрой» выражает благодарность «KEYPUMPS» за
                                        выполненный спектр услуг по обслуживанию климатической
                                        техники. Обязательства были выполнены в соответствии с
                                        договором и четким соблюдением сроков выполнения. Желаем Вам
                                        грандиозных планов, перспективных партнеров и успехов в
                                        развитии бизнеса.{" "}
                                    </p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="w-full">
                        <div className="w-full text-center">
                            <span>Производители, с которыми мы работаем</span>
                        </div>
                        <div className="w-full flex flex-wrap justify-center">
                            {brands.map((brand: any, index) => (
                                <img key={index} src={brand} alt=""/>
                            ))}
                        </div>
                    </div>
                    <div className="w-full bg-white">
                        <div className="w-full text-center flex justify-start underline text-orange-400 ">
                            <span className=' text-3xl text-orange-400 pb-4'>команда</span>
                        </div>
                        <div className="w-full flex justify-center sm:block">
                            <div className="flex flex-col items-center bg-gray-200 p-2 m-2">
                                <img className="object-contain w-72 h-80" src={builder1} alt=""/>
                                <span>Специалист по монтажу тепловых насосов</span>
                                <p>Александров П. А.</p>
                            </div>
                            <div className="flex flex-col items-center bg-gray-200 p-2 m-2">
                                <img className="object-contain w-72 h-80" src={builder2} alt=""/>
                                <span>Специалист по монтажу тепловых насосов</span>
                                <p>Александров П. А.</p>
                            </div>
                            <div className="flex flex-col items-center bg-gray-200 p-2 m-2">
                                <img className="object-contain w-72 h-80" src={builder1} alt=""/>
                                <span>Специалист по монтажу тепловых насосов</span>
                                <p>Александров П. А.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between py-8 sm:block sm:flex sm:flex-col-reverse">
                        <form className="flex flex-col items-start text-start w-96 sm:w-86">
                            <span className='text-2xl font-bold py-4'>Остались вопросы?</span>
                            <p className="break-words text-sm">
                                Если у вас возникли какие-то вопросы по поводу оптовых заказов,
                                заполните форму и мы Вам перезвоним.
                            </p>
                            <div className='flex flex-col py-2'>
                                <input
                                    type="text"
                                    placeholder="Ваше имя"
                                    required
                                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                />
                                <input
                                    type="text"
                                    placeholder="Ваш Email"
                                    required
                                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                />
                            </div>

                            <button className='bg-orange-300 text-white p-2'>Отправить</button>
                        </form>
                        <div className=''>
                            <div className="w-full text-start py-4">
                                <span className='font-bold text-xl'>Контакты</span>
                            </div>
                            <div className="w-full flex justify-between sm:block">
                                <div className="flex flex-col text-start sm:mb-2">
                                    <span className='font-bold'>Наш адрес</span>
                                    <p className="text-sm">Россия, г. Сочи, ул. Горького, 87</p>
                                </div>
                                <div className="flex flex-col text-start sm:mb-2">
                                    <span className='font-bold'>Телефоны</span>
                                    <p className="text-sm">+7 (964) 945 41 38</p>
                                </div>
                                {" "}
                                <div className="flex flex-col text-start sm:mb-2">
                                    <span className='font-bold'>Email</span>
                                    <p className="text-sm">info@keypumps.ru</p>
                                </div>
                            </div>
                            <div className="w-full flex sm:block">
                                <img
                                    className="object-contain w-full m-2"
                                    src={contact1Img}
                                    alt=""
                                />
                                <img
                                    className="object-contain w-full m-2"
                                    src={contact2Img}
                                    alt=""
                                />
                                <img
                                    className="object-contain w-full m-2"
                                    src={contact3Img}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
