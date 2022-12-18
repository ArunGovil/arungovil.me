import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export const technology = [
  {
    id: 2,
    title: "About",
    path: "/",
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
  },
];

export default function Header() {
  const router = useRouter();
  return (
    <nav className="flex justify-center  items-center w-full text-md">
      <div className="flex  justify-between p-4 pt-8 items-center w-full max-w-2xl">
        <div>
          <ul className="flex">
            {technology.map((item) => (
              <Link
                href={item.path}
                key={item.id}
                className={
                  item.path == router.pathname
                    ? "cursor-pointer mr-4 text-white"
                    : "cursor-pointer mr-4 border-none"
                }
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>

        <div
          onClick={() => console.log("test")}
          className="bg-opacity-50 rounded-lg cursor-pointer flex"
        >
          <p>Resume</p>
        </div>
      </div>
    </nav>
  );
}
