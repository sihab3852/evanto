import React from "react";

export default function CausesCard({
  image,
  tag,
  title,
  desc,
  percent,
  raise,
  goal,
}) {
  return (
    <div className="relative  bg-white  pt-48 w-96 space-y-4">
      <div className="p-2 space-y-4">
        <div className="absolute -top-12 w-82 left-7">
          <img src={image} alt="" className="object-contain" />
          <span className="absolute bottom-4 -left-4 bg-emerald-500 p-.5  text-white text-sm px-4">
            {tag}
          </span>
        </div>
        <h1 className="text-2xl px-5 font-semibold ">{title}</h1>
        <p className="text-lg line-clamp-2 px-5">{desc}</p>
      </div>

      <div className="bg-emerald-500/10 capitalize p-10  relative space-y-5">
        <div className="relative ">
          <div
            className="absolute -top-7 text-sm bg-emerald-400 text-white p-1 px-1.5 rounded-r-full rounded-tl-full "
            style={{
              left: percent,
            }}
          >
            {percent}
          </div>
          <div className="bg-white absolute top-0 rounded-full w-full h-2"></div>
          <div
            className="bg-emerald-400 absolute top-0 rounded-full h-2"
            style={{
              width: percent,
            }}
          ></div>
        </div>
        <div className="flex justify-between text-">
          <div className="flex gap-2 items-center">
            <h1 className="font-bold text-md">${raise}</h1>
            <p className="text-gray-600 text-sm">raised</p>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="font-bold text-md">${goal}</h1>
            <p className="text-gray-600 text-sm">goal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
