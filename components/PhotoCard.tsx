import { useState } from "react";
import Image from "next/image";

interface PhotoCardProps {
  title: string;
  description: string;
  date: string;
  photo: string;
}
export default function PhotoCard({
  title,
  description,
  date,
  photo,
}: WorkCardProps) {
  console.log("Rendering");
  const image = require(`../public/photos/${photo}.jpeg`);
  const getRandomDimensions = (str) => {
    const num = Math.floor(Math.random() * (324 - 128 + 1)) + 128;
    return num;
  };
  return (
    <div className="rounded-md flex p-2 items-center">
      <Image
        alt="icon"
        src={image}
        width={getRandomDimensions(title)}
        className="ml-2 rounded-md"
      />
    </div>
  );
}
