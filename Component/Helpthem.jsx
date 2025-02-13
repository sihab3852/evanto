import React from "react";
import { BiPlay, BiSolidHandUp } from "react-icons/bi";
import { FaDonate, FaHandPointUp } from "react-icons/fa";
import { GiChariot } from "react-icons/gi";
import { HiHandThumbUp } from "react-icons/hi2";
import Volunteer from "./Volunteer";
import { MdFoundation } from "react-icons/md";

export default function Helpthem() {
  return (
    <div
      className=" mt-20 p-20"
      style={{
        backgroundImage:
          "url(https://gaviasthemes.net/drupal/halpes/sites/default/files/gbb-uploads/bg-3.jpg)",
      }}
    >
      <div className="flex justify-around h-80 items-center border-b ">
        <div className="text-7xl capitalize w-200 ">
          <h1>help them whenever they are in need</h1>
        </div>
        <div className="w-150 items-center text-center ">
          <div className="border p-6 w-17 rounded-full items-center hover:bg-[#15C8A0] text-white ml-50">
            <BiPlay />
          </div>
          <h1 className="font-[ballet] text-white text-2xl">wacth the video</h1>
        </div>
      </div>
      <div className="flex justify-around mt-20">
        <div className="flex gap-10 w-91">
          <div className="text-5xl">
            <GiChariot className="text-[#15C8A0]" />
          </div>
          <div className="capitalize">
            <h1 className="text-2xl text-white">become a Volunteer</h1>
            <p className="text-[#9da5a3]">
              There are many variations of but the majority have simply free
              text suffered.
            </p>
          </div>
        </div>
        <div className="flex gap-10 w-91">
          <div className="text-5xl">
            <MdFoundation className="text-[#15C8A0]" />
          </div>
          <div className="capitalize">
            <h1 className="text-2xl text-white">Quick Fundraising</h1>
            <p className="text-[#9da5a3]">
              There are many variations of but the majority have simply free
              text suffered.
            </p>
          </div>
        </div>
        <div className="flex gap-10 w-91">
          <div className="text-5xl">
            <FaDonate className="text-[#15C8A0]" />
          </div>
          <div className="capitalize">
            <h1 className="text-2xl text-white">Start Donating</h1>
            <p className="text-[#9da5a3]">
              There are many variations of but the majority have simply free
              text suffered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
