import React from "react";
import Logo from "./Logo";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { BsMailbox, BsTwitter } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { LuMapPinHouse } from "react-icons/lu";
import Navbarlists from "./Navbarlists";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { BiPrinter, BiSearch } from "react-icons/bi";
export default function Navbar() {
  return (
    <div className="relative z-50">
      <div className="flex justify-start bg-[#1F2230] p-10 px-32 h-40 w-full ">
        {/* logo section */}
        <div className="h-16 w-">
          <Logo />
        </div>
        {/* icon section */}
        <div className="flex gap-5 justify-center items-center">
          <IconComponent
            icon={<HiChatBubbleLeftRight />}
            title={"Call Anytime"}
            content={"92 666 888 000"}
            className={"border-r"}
          />
          <IconComponent
            icon={<MdMail />}
            title={"Send Email"}
            content={"contact@example.com"}
            className={"border-r"}
          />
          <IconComponent
            icon={<LuMapPinHouse />}
            title={"Visit office"}
            content={"80 Broklyn Street"}
          />
        </div>
      </div>
      <div className="absolute -bottom-12 bg-[#ffffff] h-20  flex justify-evenly items-center   mx-30">
        <Navbarlists />
        <div className="flex gap-5 mx-10 px-5 pl-20 items-center">
          <div className="bg-[#1BAD95] p-3 text-white rounded-full text-lg">
            <FaFacebook />
          </div>
          <div className="hover:bg-[#1BAD95] p-3 hover:text-white rounded-full text-lg bg-slate-300">
            <BsTwitter />
          </div>
          <div className="hover:bg-[#1BAD95] p-3 hover:text-white rounded-full text-lg bg-slate-300">
            <ImInstagram />
          </div>
          <div className="hover:bg-[#1BAD95] p-3 hover:text-white rounded-full text-lg bg-slate-300">
            <BiPrinter />
          </div>
          <div className="p-3 text-3xl ml-6">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconComponent({ icon, title, content, className }) {
  return (
    <div
      className={`flex gap-2 justify-center items-center  w-64 border-gray-600 px-4 ${className}`}
    >
      <div className="text-[#1bad95] text-4xl">{icon}</div>

      <div>
        <h2 className="text-gray-500">{title}</h2>
        <h1 className="text-white font-bold">{content}</h1>
      </div>
    </div>
  );
}
