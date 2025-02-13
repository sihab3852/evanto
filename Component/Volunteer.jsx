import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import Charity from "./Charity";

import { PiWheelchairBold } from "react-icons/pi";

export default function Volunteer() {
  return (
    <div className="mt-20">
      <div>
        <h1 className="text-[#15C8A0] text-xl capitalize text-center">
          become a volunteer
        </h1>
        <h1 className="capitalize text-3xl text-center">
          together we can make a difference
        </h1>
      </div>
      <div className="flex justify-around mt-10">
        <div className="w-150 px-2">
          <div className="mt-10 ">
            <h1 className="text-3xl capitalize text-[#15C8A0]">
              we're helping today.helping tommorow
            </h1>
            <p className="text-[#747574] mt-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              eos ab soluta iste temporibus consequatur numquam odit, aperiam
              harum eaque voluptate quae dolores sint perspiciatis, officiis
              culpa dicta repudiandae? Animi architecto similique deserunt,
              dolores nihil porro! Error magni enim minus?
            </p>
            <div className="mt-10">
              <div className="flex items-center mt-2 ">
                <BiArrowFromLeft className="bg-[#00D492] rounded-2xl text-white" />
                <h1 className="text-xl capitalize mt-1.5">
                  this the first true generator on the internet
                </h1>
              </div>
              <div className="flex items-center mt-2 ">
                <BiArrowFromLeft className="bg-[#00D492] rounded-2xl text-white" />

                <h1 className="text-xl">
                  {" "}
                  Lorem Ipsum is not simply random text
                </h1>
              </div>
              <div className="flex items-center mt-2 ">
                <BiArrowFromLeft className="bg-[#00D492] rounded-2xl text-white" />

                <h1 className="text-xl">If you are going to use a passage</h1>
              </div>
              <div className="flex items-center mt-2 ">
                <BiArrowFromLeft className="bg-[#00D492] rounded-2xl text-white" />

                <h1 className="text-xl"> It has roots in a piece</h1>
              </div>
            </div>
            <div className="mt-15">
              <div className="relative">
                <img
                  src="https://gaviasthemes.net/drupal/halpes/sites/default/files/gbb-uploads/image-3.jpg"
                  alt=""
                />
              </div>
              <div className="absolute -bottom-820 left-110  bg-[#15C8A0] rounded-full text-white">
                <PiWheelchairBold className="text-9xl  " />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-150 bg-[#EFF5F4]">
          <form action="submit" className="grid gap-2 p-10">
            <label htmlFor="id"></label>
            <input
              className="border capitalize h-16 p-3 bg-white border-none"
              type="text"
              name="id"
              id="id"
              placeholder="your name"
            />
            <div className="flex gap-1 items-center">
              <input
                className="border capitalize h-16 p-3 bg-white border-none"
                type="text"
                name="email"
                id="email"
                placeholder="email address"
              />

              <input
                className="border capitalize h-16 p-3 bg-white border-none w-full"
                type="text"
                name="phone"
                id="phone"
                placeholder="phone number"
              />
            </div>
            <label htmlFor="address"></label>
            <input
              className="border capitalize h-16 p-3 bg-white border-none"
              type="text"
              name="address"
              id="address"
              placeholder="address"
            />
            <label htmlFor="dateofbirth"></label>
            <input
              className="border capitalize h-16 p-3 bg-white border-none"
              type="text"
              name="dateofbirth"
              id="dateofbirth"
              placeholder="date of birth"
            />
            <label htmlFor="occupation"></label>
            <input
              className="border capitalize h-16 p-3 bg-white border-none"
              type="text"
              name="occupation"
              id="occupation"
              placeholder="occupation"
            />
            <label htmlFor="comment"></label>
            <textarea
              className="border capitalize h-16 p-3 bg-white border-none"
              type="text"
              name="comment"
              id="comment"
              placeholder="leave your comment here"
            />
            <button className="border p-3 w-40 bg-[#15C8A0] capitalize mt-5 text-white ">
              send a message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
