import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import img from "../../pages/home/assets/carouselImg.png";
import { Link } from "react-router-dom";

export default function Carousel() {
  const ref = useRef();

  const products = [
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      oldPrice: 37000,
      img: img,
      avaible: true,
      counted: false,
    },
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      oldPrice: 37000,
      img: img,
      avaible: true,
      counted: false,
    },
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      oldPrice: 37000,
      img: img,
      avaible: true,
      counted: false,
    },
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      oldPrice: 37000,
      img: img,
      avaible: true,
      counted: false,
    },
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      oldPrice: 37000,
      img: img,
      avaible: true,
      counted: false,
    },
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      oldPrice: 37000,
      img: img,
      avaible: true,
      counted: false,
    },
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      oldPrice: 37000,
      img: img,
      avaible: true,
      counted: false,
    },
    {
      title: "ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345",
      price: "1000000",
      oldPrice: 37000,
      img: img,
      avaible: true,
      counted: false,
    },
  ];

  return (
    <div className="my-2">
      <div className="text-4xl font-medium text-center lg:text-start my-9">
        Вы недавно просмотрели
      </div>
      <Splide
        //@ts-ignore
        ref={ref}
        options={{
          rewind: false,
          perPage: 4,
          perMove: 1,
          gap: 20,
          padding: "3rem",
          pagination: false,
          breakpoints: {
            623: {
              perPage: 1,
              perMove: 1,
            },
            935: {
              perPage: 1,
              perMove: 1,
            },
            1247: {
              perPage: 4,
              perMove: 1,
            },
          },
        }}
        onMounted={() => {
          console.log("mounted");
        }}
        onUpdated={() => {
          console.log("updated");
        }}
        onMoved={() => {
          console.log("moved");
        }}
        onVisible={(splide, slide) => {
          console.log("visible", slide.index);
        }}
        className="mt-2"
      >
        {products.length > 0
          ? products.map((item, index) => (
              <SplideSlide
                key={index}
                className="w-72 border border-gray flex flex-col m-1"
              >
                <div className="w-full h-80  bg-slate-100">
                  <div className="relative flex justify-between p-2">
                    <div className="flex col-span-2 align-middle gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="20" height="20" fill="white" />
                        <path
                          d="M6 10L9 13L14 7"
                          stroke="#24C56E"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p>В наличии</p>
                    </div>
                  </div>
                  <Link to="/product">
                    <img
                      className="w-80 h-72 object-contain hover:opacity-60"
                      src={item.img}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="p-2">
                  <Link to="/product">
                    {" "}
                    <span className="break-all hover:text-orange-400 text-slate-600">
                      {item.title}
                    </span>
                  </Link>
                  <div className="w-full flex justify-between items-center">
                    <span>{item.price}</span>
                  </div>
                </div>
              </SplideSlide>
            ))
          : null}
      </Splide>
    </div>
  );
}
