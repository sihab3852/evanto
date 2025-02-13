import React from "react";
import { FaComments } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";

export default function CardData() {
  return (
    <div className="w-200  hover:shadow-2xl group space-y-6 border ml-2 ">
      <div className="relative w-full  ">
        <img
          src="https://gaviasthemes.net/drupal/halpes/sites/default/files/articles/post-11.jpg"
          alt=""
          className="w-full h-60"
        />
        <h1 className="bg-[#15C8A0] w-fit px-2 absolute -bottom-4 right-12 py-1">
          {" "}
          21 dec,16
        </h1>
      </div>
      <div className="flex gap-10  capitalize items-center px-6 mt-10">
        <div className="flex capitalize">
          <MdAccountBox className="text-[#15C8A0] text-2xl" />
          <h1>by admin</h1>
        </div>{" "}
        /
        <div className="flex items-center gap-1 ">
          <FaComments className="text-[#15C8A0] text-2xl" />
          <h1> 0 comments</h1>
        </div>
      </div>
      <div className="mt-3 capitalize px-6  pb-5">
        <h1 className="text-3xl group-hover:text-[#15C8A0]">
          together to help the world better
        </h1>
        <p className="mt-3 text-[#8C919A]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet iste
          molestias illum laudantium excepturi.
        </p>
      </div>
    </div>
  );
}
