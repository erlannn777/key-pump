import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const Consultation = () => {
  return (
    <div className="w-full flex flex-col items-center text-center py-12 bg-slate-100 relative">
      <div className="text-4xl font-semibold text-center lg:text-start">
        Мы Вам перезвоним
      </div>
      <p className="text-lg">
        Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы
        Вам перезвоним.
      </p>
      <div
        style={{
          background: "rgba(246, 171, 57, 1)",
          top: "6rem",
        }}
        className="hidden xl:flex absolute lg:left-10 2xl:left-60 left-12 shadow-md shadow-black rounded-full w-20 h-20 align-middle grid justify-center items-center cursor-pointer"
      >
        <BsFillTelephoneFill color="white" className="w-10 h-10" />
      </div>

      <form className="flex ">
        <div className="flex px-2 py-4  flex-col md:flex-row">
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

          <button
            className="py-4 px-16 font-semibold text-black"
            style={{ background: "rgba(246, 171, 57, 1)" }}
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Consultation;
