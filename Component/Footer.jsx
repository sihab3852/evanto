import React from "react";
import { GiLovers } from "react-icons/gi";
import About from "./about";
import Contacts from "./Contacts";
import Newsletter from "./Newsletter";
import Footerlogo from "./footerlogo";

export default function Footer() {
  return (
    <div
      className=" grid grid-cols-4 justify-around py-20 px-60"
      style={{
        backgroundImage:
          "url(https://gaviasthemes.net/drupal/halpes/sites/default/files/gbb-uploads/bg-footer.jpg)",
      }}
    >
      <Footerlogo />
      <About />
      <Contacts />
      <Newsletter />
    </div>
  );
}
