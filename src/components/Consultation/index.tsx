import React from "react";

const Consultation = () => {
  return (
    <div className="w-full flex flex-col items-center text-center py-12 bg-slate-100">
      <span className="text-2xl font-bold">Мы Вам перезвоним</span>
      <p className="text-sm">
        Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы
        Вам перезвоним.
      </p>
      <form className="flex ">
        <div className="flex px-2 py-4  flex-col md:flex-row">
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
          <button className="bg-orange-300 px-4 py-2 rounded">Отправить</button>
        </div>
      </form>
    </div>
  );
};

export default Consultation;
