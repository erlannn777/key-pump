import React, { useState, useMemo } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import { TbCircleDot } from "react-icons/tb";
import cl from "./slider.module.css";
import img from "../../../img/slide.png";
import { Link } from "react-router-dom";

const Slider = ({ classess, slides, setSlides }) => {
  let [slide, setSlide] = useState(0);
  let slideWatcher = useMemo(() => {
    setSlides((slides) =>
      slides.map((sl) =>
        sl.id - 1 == slide
          ? { ...sl, selected: true }
          : { ...sl, selected: false }
      )
    );
  }, [slide]);
  console.log(slides);
  function next() {
    setSlide(slide + 1);
    // let n = slides.length
    // setSlides(slides =>
    //     slides.map(sl =>
    //         sl.id - 1 == slide
    //             ? { ...sl, selected: true }
    //             : { ...sl, selected: false }
    //     )
    // )

    if (slide >= slides.length - 1) {
      setSlide(0);
      // setSlides(slides =>
      //     slides.map(sl =>
      //         (sl.id - 1) == slide
      //             ? { ...sl, selected: true }
      //             : { ...sl, selected: false }
      //     )
      // )
    }
  }
  function previos() {
    setSlide(slide - 1);
    let n = slides.length;
    setSlides((slides) =>
      slides.map((sl) =>
        sl.id == slide + 1
          ? { ...sl, selected: true }
          : { ...sl, selected: false }
      )
    );

    if (slide < 1) {
      setSlide(slides.length - 1);
      setSlides((slides) =>
        slides.map((sl) =>
          sl.id == slide + 1
            ? { ...sl, selected: true }
            : { ...sl, selected: false }
        )
      );
    }
  }
  return (
    <div>
      <div>
        {slides.map((sl, i) =>
          sl.selected == true ? (
            <div className="flex flex-col items-center">
              <div className="w-full block flex justify-center md:flex-row flex-col items-center">
                <Link
                  to="/product"
                  className="w-96 flex justify-center xl:w-1/3"
                >
                  <img
                    className="w-96 h-96 hover:opacity-60 xl:w-full xl:h-auto"
                    src={img}
                    alt=""
                  />
                </Link>
                <div className="p-2 w-96 ">
                  <Link to="/product">
                    <p className="break-words text-2xl hover:text-orange-400">
                      {sl.name}
                    </p>
                  </Link>
                  <p className="my-4 opacity-60">{sl.about}</p>
                  <div className="text-sm opacity-60">Цена</div>
                  {/* <div className="my-4 text-xl">245 000₽</div> */}
                  <div className={cl.priceNow}>{sl.price}₽</div>
                  <div className={cl.priceOld}>{sl.oldprice}₽</div>
                  <button className="bg-yellow-400 px-4 py-2">
                    Добавить в корзину
                  </button>
                </div>
              </div>

              <div className={cl.navigaton}>
                <button
                  onClick={() => {
                    previos();
                  }}
                >
                  {" "}
                  <MdOutlineKeyboardArrowLeft color="" size={"40"} />{" "}
                </button>
                {slides.map((sl, i) =>
                  i == slide ? (
                    <button key={sl.id}>
                      <GoPrimitiveDot color="rgba(246, 171, 58, 0.6)" />
                    </button>
                  ) : (
                    <button key={sl.id} onClick={(e) => setSlide(sl.id - 1)}>
                      <TbCircleDot color="rgba(246, 171, 58, 0.6)" />
                    </button>
                  )
                )}
                <button
                  onClick={() => {
                    next();
                  }}
                >
                  {" "}
                  <MdOutlineKeyboardArrowRight color="" size={"40"} />{" "}
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )
        )}
      </div>
    </div>
  );
};

export default Slider;
