import React from "react";
import img from "./assets/img.png";

const Article = () => {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="container sm:max-w-full">
        <div className='mb-4'>
          <h2>Главная / <span className='text-gray-400'>Статьи/ Эффективность солнечного коллектора</span></h2>
        </div>
        <img className="object-contain max-w-full" src={img} alt="" />
        <div className="w-full text-start my-4">
          <span className='font-bold'>СОЛНЕЧНЫЕ КОЛЛЕКТОРЫ</span>
          <span className='font-bold ml-12'>9 апреля 2022</span>
        </div>
        <div className="w-full words-break">
          <span className='text-3xl font-bold'>
            Влияние скорости потока теплоносителя на производительность
            солнечного коллектора
          </span>
          <p className='pt-2'>
            На практике же дело может обстоять немного иначе. Одним из факторов
            влияющим на производительность является объемный расход
            теплоносителя в солнечных коллекторах. Значение оптического КПД и
            коэффициента тепловых потерь солнечного коллектора приведенное в
            сертификатах соответствует определенному расходу теплоносителя в
            коллекторе. Например, по данным сертификационной лаборатории SPF
            солнечный коллектор торговой марки Viessmann Vitosol 200-F (номер
            сертификата C513) имеет расход теплоносителя при испытании равный
            200 л/ч. При пересчета на 1 м² апертурной площади расход равен 40,6
            л/ч м². При этом есть существенная разница между этим значением и
            рекомендуемым значением производителя 25 л/ч м². В некоторых
            случаях, разница между этими показателями может отличатся в 3-4
            раза.
          </p>
          <div className="w-full flex justify-center">
            <button className='bg-orange-400 px-4 py-2 text-black mt-4'>Перейти в каталог</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
