import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className="">
      <div className="pr-2" onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-black"
          fill="black"
          viewBox="0 0 24 24"
          stroke="black"
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
          className=" absolute z-30 inset-0 overflow-y-auto"
          onClose={() => setOpen(false)}
        >
          <div className="flex items-start h-full justify-center min-h-screen ">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-white bg-opacity-75 transition-opacity " />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 translate-x-0"
              enterTo="opacity-100 translate-x-1"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-x-40"
              leaveTo="opacity-0 translate-x-0"
            >
              <div className="w-full ml-auto fixed left-0  h-full shadow-xl py-4 pb-12 flex flex-col overflow-y-auto bg-slate-700 text-black p-5">
                <div
                  className="absolute top-0 right-0 p-2"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 fill-black text-white z-40 "
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
                </div>
                <div className="w-full flex flex-col mt-6">
                  <div className=" flex items-center justify-center">
                    <div className="h-12 w-12">
                      <img
                        src="https://avatars.githubusercontent.com/u/90403657?s=200&v=4"
                        alt="logo"
                        className="object-contain"
                      />
                    </div>
                    <span className="text-base font-bold text-gray-200 ml-2 ">
                      DRIVING SCHOOL
                    </span>
                  </div>
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
