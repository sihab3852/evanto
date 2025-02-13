import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Newsletter() {
  return (
    <div className="capitalize space-y-10 ml-8">
      <h1 className="text-3xl text-white">newsletter</h1>
      <p className="mt-10 text-xl text-gray-400">
        Lorem ipsum dolor sit ame consect etur pisicing elit sed do.
      </p>
      <div className="border bg-white py-4 w-90  ">
        <div className="flex gap-2 justify-center items-center">
          <input
            type="text"
            name="text"
            id="text"
            className="border-none p-2"
          />

          <button className="flex items-center border py-2 px-5 text-xl capitalize bg-emerald-400 text-white hover:bg-emerald-300 gap-2 ">
            <BsArrowRight />
            send
          </button>
        </div>
      </div>
    </div>
  );
}
