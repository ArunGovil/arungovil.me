import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export const technology = [
  {
    id: 1,
    title: "home",
    path: "/",
  },
  {
    id: 2,
    title: "about",
    path: "/about",
  },
  {
    id: 3,
    title: "projects",
    path: "/projects",
  },
  {
    id: 4,
    title: "blog",
    path: "/blog",
  },
];

export default function Header() {
  const logo = require("../public/img/frame.png");
  const router = useRouter();
  return (
    <nav className="flex justify-between p-4 items-center  w-full max-w-5xl">
      <Link href="/">
        <Image src={logo} alt="cmdr" className="w-8 " />
      </Link>

      <div className="flex flex-col justify-center items-center w-full max-w-5xl">
        <nav>
          <ul className="flex">
            {technology.map((item) => (
              <Link
                href={item.path}
                key={item.id}
                className={
                  item.path == router.pathname
                    ? "cursor-pointer p-2 mr-2 border-b-2 border-yellow-400"
                    : "cursor-pointer p-2 mr-2 border-none"
                }
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      <a target="_blank" rel="noreferrer" href="https://github.com/ArunGovil">
        <p className="font-medium text-sm hover:text-yellow-400">Resume</p>
      </a>
    </nav>
  );
}
