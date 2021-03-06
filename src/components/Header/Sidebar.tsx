import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store";
import catalogImg from "./assets/catalogImg.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { openCartModal } from "../../store/ui/actions";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className="">
      <div className="pr-2" onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 "
          fill="black"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="absolute z-30 inset-0 overflow-y-auto"
          onClose={() => setOpen(false)}
        >
          <div className="flex items-start h-full justify-center min-h-screen ">
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-white bg-opacity-75 transition-opacity dark:bg-black dark:bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-500 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-500 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="w-full ml-auto fixed left-0  h-full shadow-xl pb-12 flex flex-col overflow-y-auto bg-white text-black">
                <div className="bg-gray-300 flex justify-around p-1">
                  <p className="text-sm">
                    C?????????? 10% ???? ?????????????????? "TEPLO" ???? ?????? ???????????? ???? 10.09
                  </p>
                  <span className="hidden lg:block">???????????????? ????????????</span>
                </div>
                <div className="bg-gray-800 flex w-full justify-between p-2">
                  <svg
                    onClick={() => setOpen(false)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 fill-white  z-40 "
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                      fill="#000"
                    />
                  </svg>
                  <AiOutlineShoppingCart
                    onClick={() => {
                      dispatch(
                        openCartModal({
                          data: null,
                          open: true,
                        })
                      );
                    }}
                    className="text-yellow-600 text-3xl"
                  />
                  {/* <div
                    className="absolute top-12 left-0 p-2"
                    onClick={() => setOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 fill-black  z-40 "
                      fill="#000"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                        fill="#000"
                      />
                    </svg>
                  </div> */}
                </div>

                <div className="w-full flex flex-col mt-6 p-4 outline-hidden">
                  <Link
                    onClick={() => setOpen(false)}
                    to="/"
                    className="block mt-4 lg:inline-block lg:mt-0  hover:text-orange-400 mr-4 "
                  >
                    ??????????????
                  </Link>
                  <div className="w-full border border-gray mt-2"></div>
                  <li className="block mt-4 lg:block lg:mt-0  hover:text-orange-400 mr-4 flex">
                    <div className="dropdown inline-block relative">
                      <span className="flex">
                        ??????????????
                        <svg
                          className="fill-current h-4 w-4 mt-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      <div className="dropdown-menu absolute z-50 hidden text-gray-700 pt-1 bg-white">
                        <div className="flex w-[375px]">
                          <ul className="">
                            <Link
                              onClick={() => setOpen(false)}
                              to="/catalog"
                              className="
                    hover:bg-gray-200
                    py-2
                    px-4
                    block
                    whitespace-no-wrap"
                            >
                              ?????????????????? ????????????????????
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              to="/catalog"
                              className="hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                            >
                              ???????? ?? ??????????????????????????????
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              to="/catalog"
                              className="hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                            >
                              ?????????????????????????? ????????????????????
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              to="/catalog"
                              className="hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                            >
                              ??????????????????????????, ?????????????????? ??????????????
                            </Link>{" "}
                            {/* <Link
                            onClick={() => setOpen(false)} to="/catalog" className="hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap">
                        ?????????? ?? ??????????????
                      </Link>{" "}
                      <Link
                      onClick={() => setOpen(false)} to="/catalog" className="hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap">
                        ???????????????????????????? ???????????????????????? ????????????????????????
                      </Link>
                      <Link
                      onClick={() => setOpen(false)} to="/catalog" className="hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap">
                        ?????????????????? ?? ?????????????????? ????????????
                      </Link> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="w-full border border-gray mt-2"></div>

                  <Link
                    onClick={() => setOpen(false)}
                    to="/about-us"
                    className="block mt-4 lg:inline-block lg:mt-0  hover:text-orange-400 mr-4"
                  >
                    ?? ??????
                  </Link>
                  <div className="w-full border border-gray mt-2"></div>

                  <li className="block mt-4 lg:inline-block lg:mt-0  hover:text-orange-400 mr-4">
                    <div className="dropdown inline-block relative">
                      <span className="flex">
                        ??????
                        <svg
                          className="fill-current h-4 w-4 mt-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      <div className="dropdown-menu absolute z-50 hidden text-gray-700 pt-1 bg-white">
                        <div className="w-44">
                          <ul className="">
                            <Link
                              onClick={() => setOpen(false)}
                              to="/faq"
                              className="
                    hover:bg-gray-200
                    py-2
                    px-4
                    block
                    whitespace-no-wrap"
                            >
                              FAQ ???????????? - ??????????
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              to="/order"
                              className="hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                            >
                              ???????????????? ?? ????????????
                            </Link>
                            <Link
                              onClick={() => setOpen(false)}
                              to="/articles"
                              className="hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                            >
                              ????????????
                            </Link>
                            {/* <li className="hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap">
                        ??????????????????????????, ?????????????????? ??????????????
                      </li>{" "} */}
                            {/* <li className="hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap">
                        ?????????? ?? ??????????????
                      </li>{" "}
                      <li className="hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap">
                        ???????????????????????????? ???????????????????????? ????????????????????????
                      </li>
                      <li className="hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap">
                        ?????????????????? ?? ?????????????????? ????????????
                      </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="w-full border border-gray mt-2"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-2">
                  <div className="">+7 (964) 945 41 38</div>
                </div>
                <div className="absolute bottom-0 right-0 p-2">
                  <div className="text-yellow-600 ">???????????????? ????????????</div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Sidebar;
