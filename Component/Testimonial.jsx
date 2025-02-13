import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import { BsArrowBarLeft, BsArrowRight, BsQuote } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Testimonial() {
  return (
    <div
      className="flex  justify-around mt-30 items-center h-160"
      style={{
        backgroundImage:
          "url(https://gaviasthemes.net/drupal/halpes/sites/default/files/gbb-uploads/bg-2.jpg)",
      }}
    >
      <div className="w-100 capitalize">
        <h1 className="text-[#15C8A0] text-xl capitalize">our testimonials</h1>
        <h1 className="text-6xl mt-5">what they're talking about charity</h1>
        <button className="flex items-center capitalize justify-center bg-[#15C8A0] p-1 px-2 py-3 mt-10 shadow-md hover:shadow-xl transition-shadow duration-300">
          <BiArrowFromLeft />
          read more
        </button>
      </div>
      <div className="flex items-center">
        <div className=" p-5 rounded-full hover:text-white hover:bg-emerald-400 shadow-2xl bg-white">
          <FaArrowLeft />
        </div>
        <div className="w-100 capitalize text-[#6f7070] shadow-2xs px-15 py-20 mr-5 bg-white">
          <h1 className="text-xl  ">
            there are many variations of available,but the najority have sufferd
            in some form by
          </h1>
          <div className="flex justify-between mt-5">
            <div className="mt-2 capitalize">
              <h1 className="text-xl text-black">jessica brown</h1>
              <p>customer</p>
              <img
                src="https://gaviasthemes.net/drupal/halpes/sites/default/files/testimonial/avatar-1.jpg"
                alt=""
                className="h-20 rounded-full mt-9"
              />
            </div>
            <div className="text-[#15C8A0]">
              <BsQuote className="rotate-180 text-6xl" />
            </div>
          </div>
        </div>
        <div className="w-100 capitalize text-[#6f7070] shadow-2xs px-15 py-20 bg-white">
          <h1 className="text-xl">
            there are many variations of available,but the najority have sufferd
            in some form by
          </h1>
          <div className="flex justify-between mt-5">
            <div className="mt-2 capitalize">
              <h1 className="text-xl text-black">jessica brown</h1>
              <p>customer</p>
              <img
                src="https://gaviasthemes.net/drupal/halpes/sites/default/files/testimonial/avatar-1.jpg"
                alt=""
                className="h-20 rounded-full mt-9"
              />
            </div>
            <div className="text-[#15C8A0]">
              <BsQuote className="rotate-180 text-6xl" />
            </div>
          </div>
        </div>
        <div className=" rounded-full hover:bg-emerald-400 hover:text-white p-5 shadow-2xl bg-white ">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}
