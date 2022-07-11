import React from "react";
import { Link } from "react-router-dom";
import articlImg from "./assets/articleImg.png";

const Articles = () => {
  return (
    <div className="lg:px-24 px-2 py-8 w-full">
      <h2>
        Главная / <span className="text-gray-400">Cтатьи</span>
      </h2>
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center items-center mt-8">
          <div className="lg:w-96 bg-slate-100 m-5  w-80 mb-4">
            <img className="w-96 h-60" src={articlImg} alt="" />
            <div className="w-full p-2">
              <div className="w-full text-center">
                <span className="font-bold">
                  МАКСИМАЛЬНОЕ КПД И ЭФФЕКТИВНОСТЬ СОЛНЕЧНОГО КОЛЛЕКТОРА
                </span>
              </div>
              <p className="text-sm py-2">
                Как уже упоминалось, основными параметрами для оценки
                эффективности солнечных коллекторов являются...
              </p>
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm">СОЛНЕЧНЫЕ КОЛЛЕКТОРЫ</span>
                  <span className="text-sm">9 апреля 2022</span>
                </div>
                <Link
                  to="/articles/1"
                  className="bg-orange-400 px-8 py-1 text-sm"
                >
                  ДАЛЕЕ
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-96 bg-slate-100 m-5 w-80 m-0">
            <img className="w-96 h-60" src={articlImg} alt="" />
            <div className="w-full p-2">
              <div className="w-full text-center">
                <span className="font-bold">
                  МАКСИМАЛЬНОЕ КПД И ЭФФЕКТИВНОСТЬ СОЛНЕЧНОГО КОЛЛЕКТОРА
                </span>
              </div>
              <p className="text-sm py-2">
                Как уже упоминалось, основными параметрами для оценки
                эффективности солнечных коллекторов являются...
              </p>
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm">СОЛНЕЧНЫЕ КОЛЛЕКТОРЫ</span>
                  <span className="text-sm">9 апреля 2022</span>
                </div>
                <Link
                  to="/articles/1"
                  className="bg-orange-400 px-8 py-1 text-sm"
                >
                  ДАЛЕЕ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
