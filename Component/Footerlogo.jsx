import React from "react";
import { GiLoveHowl, GiLovers } from "react-icons/gi";

export default function Footerlogo() {
  return (
    <div>
      <img
        src="https://gaviasthemes.net/drupal/halpes/sites/default/files/gbb-uploads/logo-white.png"
        alt=""
        className="w-50"
      />
      <p className="mt-10 text-xl text-gray-400">
        Lorem ipsum dolor sit ame consect etur pisicing elit sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <button className="flex items-center  py-2 px-4 bg-emerald-400 text-white mt-10">
        <GiLoveHowl />
        donate
      </button>
    </div>
  );
}
