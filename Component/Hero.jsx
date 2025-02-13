import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="absolute mt-24">
        <img
          src="https://gaviasthemes.net/drupal/halpes/sites/default/files/gva-sliderlayer-upload/slider-3.jpg"
          alt=""
        />
      </div>
      <div className="  text-3xl  relative -bottom-80 ml-50">
        <div className="flex text-[#1BAD95] font-[ballet] gap-0">
          <h1 className="text-5xl">helping them today</h1>
          <img
            src="https://gaviasthemes.net/drupal/halpes/sites/default/files/gva-sliderlayer-upload/sl-icon.jpg"
            alt=""
          />
        </div>
        <h1 className="text-7xl">
          help the poor<br></br> in need
        </h1>
      </div>
    </div>
  );
}
