import React from "react";
import { BiArrowFromLeft, BiFoodTag, BiWater } from "react-icons/bi";
import { CiMedicalCase } from "react-icons/ci";
import { GiLoveHowl } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";

export default function Community() {
  return (
    <div
      className=""
      style={{
        backgroundImage:
          "url(https://gaviasthemes.net/drupal/halpes/sites/default/files/gbb-uploads/bg-1.jpg)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className=" capitalize items-center text-center    h-100">
        <h1 className="mt-30 text-5xl text-white">
          join the community to give <br className="mt-20"></br> education for
          children
        </h1>
        <button className="mt-10  py-3 px-10 capitalize bg-[#00D492] flex items-center justify-center ml-[45%] text-white px-3">
          <BiArrowFromLeft />
          learn more
        </button>
      </div>
      <div className="flex">
        <div className="  flex gap-10 mt-1 items-center bg-[#00D492] p-10 text-white ">
          <div className="text-5xl">
            <IoFastFood />
          </div>
          <div className="capitalize">
            <h1 className="text-2xl text-white">healthy food</h1>
            <p className="mt-5 text-white w-99">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, ducimus eveniet. Consequuntur quae veniam, aperiam dolor
              esse laudantium,
            </p>
            <button className="border flex items-center px-3 py-1 mt-5 bg-white text-black ">
              <GiLoveHowl />
              donate
            </button>
          </div>
        </div>
        <div className="  flex gap-10 mt-1 items-center bg-[#DCA130] p-10 ">
          <div className="text-5xl text-white">
            <BiWater />
          </div>
          <div className="capitalize">
            <h1 className="text-2xl text-white">clean water</h1>
            <p className="mt-5 text-white w-99 text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, ducimus eveniet. Consequuntur quae veniam, aperiam dolor
              esse laudantium,
            </p>
            <button className="border flex items-center px-3 py-1 mt-5 bg-white text-black ">
              <GiLoveHowl />
              donate
            </button>
          </div>
        </div>
        <div className="  flex gap-10 mt-1 items-center bg-[#CA4D3B] p-10 ">
          <div className="text-5xl text-white">
            <CiMedicalCase />
          </div>
          <div className="capitalize">
            <h1 className="text-2xl text-white">medicale treatment</h1>
            <p className="mt-5 text-white w-99">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, ducimus eveniet. Consequuntur quae veniam, aperiam dolor
              esse laudantium,
            </p>
            <button className="border flex items-center px-3 py-1 mt-5 bg-white text-black ">
              <GiLoveHowl />
              donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
