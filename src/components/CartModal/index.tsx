import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAppDispatch } from "../../store";
import { useCartModal } from "../../store/ui/hooks";
import { closeCartModal } from "../../store/ui/actions";
import productExample from "./assets/example.png";
import { BsFillTrashFill } from "react-icons/bs";

const CartModal = () => {
  const dispatch = useAppDispatch();
  const cartModal = useCartModal();

  return (
    <Transition.Root show={cartModal.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-20 inset-0 overflow-y-auto"
        onClose={() => dispatch(closeCartModal())}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed z-10 inset-0  " />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0 transform scale-95"
            enterTo="opacity-100 transform scale-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100 transform scale-100"
            leaveTo="opacity-0 transform scale-95 "
          >
            <div className="p-7  bg-white  inline-block align-center align-middle rounded-xl  border-2 border-gray  text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ">
              <div
                className=" w-full flex justify-between"
                onClick={() => dispatch(closeCartModal())}
              >
                <span>Корзина</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    color="black dark:white"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="w-full border my-4"></div>

              <div className="w-full">
                <div className="w-full flex justify-between">
                  <div className="flex ">
                    <img src={productExample} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-2">
                    <span>ТЕПЛОВОЙ НАСОС ДЛЯ БАССЕЙНА SILA AM-07 IS (HC)</span>
                    <div className="flex items-center">
                      <div className="m-2">
                        <span className="text-xl">-</span>
                        <span className="border py-1 px-4 mx-2">2</span>
                        <span className="text-xl">+</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex text-amber-500 items-center">
                      <BsFillTrashFill />
                      Удалить
                    </div>
                    <span>230 000₽</span>
                  </div>
                </div>
                <div className="w-full text-start my-2">
                  <span>Итого: 460 000₽</span>
                </div>
                <div className="w-full flex justify-between">
                  <button className="bg-amber-400 p-1 border">
                    Оформить заказ
                  </button>
                  <button className="border border-amber-400 p-1">
                    Продолжить покупки
                  </button>
                </div>
                <div className="w-full border my-4"></div>
              </div>
              <div className="w-full">
                <div className="text-start">
                  {" "}
                  <span>С этим покупают</span>
                </div>
                <div className="w-full ">
                  <div className="flex justify-between my-2">
                    <div className="flex items-center w-2/3">
                      <img src={productExample} alt="" />
                      <div className="text-start ml-2">
                        <span className="	break-all	">
                          УСТАНОВКА УФ-ОБЕЗЗАРАЖИВАНИЯ VIQUA VH150/2F, BWT
                        </span>
                        <span>90 000₽</span>
                      </div>
                    </div>
                    <div className="flex items-center text-amber-500">
                      + <span className="sm:hidden block"> Добавить</span>
                    </div>
                  </div>
                  <div className="flex justify-between my-2">
                    <div className="flex items-center w-2/3">
                      <img src={productExample} alt="" />
                      <div className="text-start ml-2">
                        <span className="	break-all	">
                          УСТАНОВКА УФ-ОБЕЗЗАРАЖИВАНИЯ VIQUA VH150/2F, BWT
                        </span>
                        <span>90 000₽</span>
                      </div>
                    </div>
                    <div className="flex items-center text-amber-500">
                      + <span className="sm:hidden block"> Добавить</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CartModal;
