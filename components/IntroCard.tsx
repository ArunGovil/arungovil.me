import React from "react";
import Image from "next/image";

export default function IntroCard() {
  const logo = require("../public/img/me.jpeg");

  return (
    <div className=" w-full flex  items-center mt-24">
      {/* <Image src={logo} alt="Arun Govil" className="w-28 rounded-2xl" />
      <div className="ml-4 h-28">
        <p className="font-bold text-4xl">Arun Govil</p>
        <p>Developer | Designer | Tinkerer</p>
        <p className="text-md font-thin mt-2">
          Designing and developing apps using React and React Native
        </p>
      </div> */}
      <p className="text-xl font-semibold">
        Developer | Designer
        <p className="text-md font-thin mt-6">
          I design and build minimal stuff for the web and mobile using modern
          tech!
        </p>
      </p>
      <p className="text-md font-thin mt-6">
        I design and build minimal stuff for the web and mobile using modern
        tech!
      </p>
    </div>
  );
}
