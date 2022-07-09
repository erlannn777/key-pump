import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import img from "../../img/catalog.png";

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
      <span className="text-3xl font-medium m-12">Вы недавно просмотрели</span>
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
              perPage: 2,
              perMove: 2,
            },
            935: {
              perPage: 3,
              perMove: 3,
            },
            1247: {
              perPage: 4,
              perMove: 4,
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
                className="w-72 h-96 border border-gray flex flex-col m-1"
              >
                <div className="w-full h-80 relative">
                  <div className="absolute flex justify-between p-2">
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
                  <img className="w-96 h-full" src={img} alt="" />
                </div>
                <div className="p-2">
                  <span className="break-all">{item.title}</span>
                  <div className="w-full flex justify-between items-center">
                    <span>{item.price}</span>
                    {/* <div className="p-2 bg-yellow-500">
                      <AiOutlineShoppingCart />
                    </div> */}
                  </div>
                </div>
              </SplideSlide>
            ))
          : null}
      </Splide>
    </div>
  );
}
