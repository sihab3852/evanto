import React from "react";
import { useState } from "react";

export default function Navbarlists() {
  const [hover, setHover] = useState("");
  const width = "w-30 px-3 text-center py-2 hover:border-b h-10";
  return (
    <div className="flex justify-evenly capitalize w-full px-5 ">
      <div
        className="relative"
        onMouseOver={() => {
          setHover("home");
        }}
        onMouseOut={() => setHover("")}
      >
        <h1
          className={`${width} hover:border-b font-[Ballet] hover:text-emerald-400 font-semibold`}
        >
          home
        </h1>
        <ul
          onMouseOver={() => {
            setHover("home");
          }}
          className={`absolute p-4 border border-gray-200 ${
            hover == "home" ? "visible" : "hidden"
          } shadow space-y-2 w-64 bg-white`}
        >
          <li className="text-start p-1 w-full border-gray-200  border-b">
            home1
          </li>
          <li className="text-start p-1 w-full border-gray-200  border-b">
            home2
          </li>
          <li className="text-start p-1 w-full border-gray-200  border-b">
            home3
          </li>
          <li className="text-start p-1 w-full border-gray-200  border-b">
            home4
          </li>
        </ul>
      </div>

      <div
        className="relative"
        onMouseOver={() => {
          setHover("our causes");
        }}
        onMouseOut={() => setHover("")}
      >
        <h1
          className={`${width} hover:border-b font-[Ballet] hover:text-emerald-400 font-semibold`}
        >
          our causes
        </h1>
        <ul
          onMouseOver={() => {
            setHover("our causes");
          }}
          className={`absolute p-4 border border-gray-200 ${
            hover == "our causes" ? "visible" : "hidden"
          } shadow space-y-2 w-64  bg-white`}
        >
          <li className="text-start p-1 w-full border-gray-200  border-b">
            our causes
          </li>
          <li className="text-start p-1 w-full border-gray-200  border-b">
            causes grid
          </li>
          <li className="text-start p-1 w-full border-gray-200  border-b">
            causes grid 02
          </li>
          <li className="text-start p-1 w-full border-gray-200  border-b">
            causes single
          </li>
        </ul>
      </div>
      <div
        className="relative"
        onMouseOver={() => {
          setHover("page");
        }}
        onMouseOut={() => setHover("")}
      >
        <h1
          className={`${width} hover:border-b font-[Ballet] hover:text-emerald-400 font-semibold`}
        >
          page
        </h1>
        <ul
          onMouseOver={() => {
            setHover("home");
          }}
          className={`absolute p-4 border border-gray-200 ${
            hover == "page" ? "visible" : "hidden"
          } shadow space-y-2 w-64  bg-white`}
        >
          <li className="text-start p-1 w-full border-gray-200  border-b">
            about
          </li>
          <li className="text-start p-1 w-full border-gray-200  border-b">
            volunteers
          </li>
          <li className="text-start p-1 w-full border-gray-200  border-b">
            become a volunteer
          </li>
          <li className="text-start p-1 w-full border-gray-200  border-b">
            portfolio page
          </li>
          <li className="text-start p-1 w-full border-gray-200  border-b">
            cariers
          </li>{" "}
          <li className="text-start p-1 w-full border-gray-200  border-b">
            our partner
          </li>{" "}
          <li className="text-start p-1 w-full border-gray-200  border-b">
            awards
          </li>{" "}
          <li className="text-start p-1 w-full border-gray-200  border-b">
            galary
          </li>{" "}
          <li className="text-start p-1 w-full border-gray-200  border-b">
            pricing
          </li>{" "}
          <li className="text-start p-1 w-full border-gray-200  border-b">
            testimonial
          </li>
        </ul>
      </div>
      <div
        className="relative"
        onMouseOver={() => {
          setHover("events");
        }}
        onMouseOut={() => setHover("")}
      >
        <h1
          className={`${width} hover:border-b font-[Ballet] hover:text-emerald-400 font-semibold`}
        >
          events
        </h1>
        <ul
          onMouseOver={() => {
            setHover("events");
          }}
          className={`absolute p-4 border border-gray-200 ${
            hover == "events" ? "visible" : "hidden"
          } shadow space-y-2 w-64  bg-white`}
        >
          <li className="text-start p-1 w-full border-gray-200  border-b">
            event 01
          </li>
          <li className="text-start p-1 w-full border-gray-200  border-b">
            event 02
          </li>
          <li className="text-start p-1 w-full border-gray-200  border-b">
            event single
          </li>
        </ul>
      </div>
      <div
        className="relative"
        onMouseOver={() => {
          setHover("news");
        }}
        onMouseOut={() => setHover("")}
      >
        <h1
          className={`${width} hover:border-b font-[Ballet] hover:text-emerald-400 font-semibold`}
        >
          news
        </h1>
        <ul
          onMouseOver={() => {
            setHover("news");
          }}
          className={`absolute p-4 border border-gray-200 ${
            hover == "news" ? "visible" : "hidden"
          } shadow space-y-2 w-64  bg-white`}
        >
          <li className="text-start p-1 w-full border-gray-200  border-b">
            newa 01
          </li>
          <li className="text-start p-1 w-full border-gray-200  border-b">
            news 02
          </li>
          <li className="text-start p-1 w-full border-gray-200  border-b">
            news single
          </li>
        </ul>
      </div>
      <h1 className={width}>contact</h1>
    </div>
  );
}
