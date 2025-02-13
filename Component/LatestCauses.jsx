import React from "react";
import { BiCamera, BiVideo } from "react-icons/bi";
import CausesCard from "./CausesCard";

const charity = [
  {
    image:
      "https://gaviasthemes.net/drupal/halpes/sites/default/files/campaigns/donation-8.jpg",
    tag: "Charity",
    title: "Lorem ipsum dolor sit amet.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nobis recusandae animi sapiente nostrum. Officiis quidem autem hic maxime cum.",
    percent: "40%",
    raise: "5000",
    goal: "8000",
  },
  {
    image:
      "https://gaviasthemes.net/drupal/halpes/sites/default/files/campaigns/donation-4.jpg",
    tag: "Enviroment",
    title: "Lorem ipsum dolor sit amet.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nobis recusandae animi sapiente nostrum. Officiis quidem autem hic maxime cum.",
    percent: "60%",
    raise: "9000",
    goal: "7000",
  },
  {
    image:
      "https://gaviasthemes.net/drupal/halpes/sites/default/files/campaigns/donation-3.jpg",
    tag: "Water Charity",
    title: "Lorem ipsum dolor sit amet.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nobis recusandae animi sapiente nostrum. Officiis quidem autem hic maxime cum.",
    percent: "30%",
    raise: "4000",
    goal: "10000",
  },
];

export default function LatestCauses() {
  return (
    <div className="relative h-[45rem] mt-20">
      <div className="items-center text-center  bg-gray-300 h-100 py-15  ">
        <h1 className="text-xl text-[#00D492] flex items-center justify-center ">
          <div className="bg-emerald-400 w-8 h-[2px] rounded-full mr-2"></div>
          Latest Causes
        </h1>
        <h1 className="text-3xl mt-1">
          Find the popular cause and donate them
        </h1>
      </div>
      <div className="absolute bottom-10 grid grid-cols-3 gap-10 justify-between w-full px-40">
        {charity.map((char) => {
          return <CausesCard key={char.goal} {...char} />;
        })}
      </div>
    </div>
  );
}
