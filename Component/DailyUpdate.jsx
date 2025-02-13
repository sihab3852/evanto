import React from "react";
import {
  BiArrowFromLeft,
  BiArrowFromRight,
  BiArrowToLeft,
  BiChat,
  BiComment,
} from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight, FaComments } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { MdAccountBox } from "react-icons/md";
import { PiMessengerLogo } from "react-icons/pi";
import CardData from "./CardData";

export default function DailyUpdate() {
  return (
    <div>
      <div className="mt-30">
        <h1 className="text-xl capitalize ml-50 text-[#15C8A0] ">
          get daily updates
        </h1>
        <div className="flex justify-between px-50 items-center mt-5">
          <h1 className="text-6xl w-200  ">
            Latest news & articles directly coming from the blog
          </h1>
          <div className="">
            <button className="flex items-center capitalize border py-2 px-2 hover:bg-[#15C8A0] hover:text-white  ">
              <BiArrowFromLeft />
              leran more
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-around px-30 items-center mt-10">
        <div className="border rounded-full p-4 hover:bg-[#15C8A0] hover:text-white">
          <FaArrowLeft />
        </div>
        <CardData />
        <CardData />
        <CardData />

        <div className="border rounded-full p-4 hover:bg-[#15C8A0] hover:text-white">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}
