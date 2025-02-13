import React from "react";
import { FaAddressBook, FaComment } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contacts() {
  return (
    <div className="capitalize">
      <h1 className="text-3xl text-white">contact</h1>
      <div className="flex mt-10 gap-3 items-center border-b pb-5 ">
        <FaComment className="text-emerald-300 text-2xl" />
        <div className="text-gray-400">
          <h1>call any time</h1>
          <p>666 888 0000</p>
        </div>
      </div>
      <div className="flex mt-10 gap-3 items-center border-b pb-5  ">
        <MdEmail className="text-3xl text-emerald-300" />
        <div className="text-gray-400">
          <h1>send email</h1>
          <p>contact@gmail.com</p>
        </div>
      </div>
      <div className="flex mt-10 gap-3 items-center border-b pb-5  ">
        <FaAddressBook className="text-emerald-300 text-3xl" />
        <div className="text-gray-400">
          <h1>visit office</h1>
          <p>80 broklyn street</p>
        </div>
      </div>
    </div>
  );
}
