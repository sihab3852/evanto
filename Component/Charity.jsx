import React from "react";

export default function Charity() {
  return (
    <>
      <section className="mt-150 flex  ">
        <div>
          <img
            src="https://gaviasthemes.net/drupal/halpes/sites/default/files/gbb-uploads/image-1.jpg"
            alt=""
            className="absolute ml-30"
          />
          <div className="relative -bottom-94 ml-15 ">
            <img
              src="https://gaviasthemes.net/drupal/halpes/sites/default/files/gbb-uploads/image-2.jpg"
              alt=""
              className="absolute"
            />
          </div>
          <div className="relative -bottom-170 flex gap-0 font-[ballet] text-[#15C8A0] text-6xl ml-20 ">
            <h1 className="mt-3 ml-10">helping today</h1>
            <img
              src="https://gaviasthemes.net/drupal/halpes/themes/custom/halpes/assets/images/bg-img-content.png"
              alt=""
              className="h-25 "
            />
          </div>
        </div>
        <div className="ml-100 w-[40%]">
          <h1 className="text-[#15C8A0] text-2xl ">welcome to charity</h1>
          <h1 className="mt-10 text-5xl bold">
            Helping each other can make world better
          </h1>
          <p className="mt-10 text-[#797d7d]">
            Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed
            do eiusmod tempor incididunt ut labore et simply free text dolore
            magna aliqua lonm andhn.
          </p>
          <div className="flex justify-between mt-10">
            <div>
              <h1 className="bold text-2xl">Our Mission </h1>
              <p className="text-[#797d7d] mt-5">
                Lorem ipsum dolor sit amet not is consectetur notted
              </p>
            </div>
            <div>
              <h1 className="text-2xl">Our Story </h1>
              <p className="text-[#797d7d] mt-5">
                Lorem ipsum dolor sit amet not is consectetur notted
              </p>
            </div>
          </div>
          <div className=" mt-20 capitalize">
            <div>
              <div className="flex justify-between">
                <h1 className="text-3xl">donations</h1>
                <p>38%</p>
              </div>
              <div className=" rounded bg-[#cdd6d3] mt-1">
                <div className=" h-4 w-[37%] rounded bg-emerald-400  "></div>
                <div className="bg-[#3ccdb5c3]"></div>
              </div>
              <div className="flex justify-between mt-10">
                <h1 className="text-3xl">charity</h1>
                <p>77%</p>
              </div>
              <div className=" rounded bg-[#cdd6d3]">
                <div className=" h-4 w-[77%] rounded bg-emerald-400 mt-1  "></div>
                <div className="bg-[#3ccdb5c3]"></div>
              </div>
            </div>
          </div>
          <button className="mt-20 border p-3 w-45 bg-[#00D492]">
            learn more
          </button>
        </div>
      </section>
    </>
  );
}
