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
    title: "Posts",
    path: "/posts",
  },
];

export default function Header() {
  const router = useRouter();
  return (
    <nav className="flex justify-center  items-center w-full text-md sticky top-0 backdrop-blur-sm">
      <div className="flex  justify-between p-6 items-center w-full max-w-2xl">
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

        <a
          href="https://rb.gy/kn2qta"
          target="_blank"
          rel="noreferrer"
          className="bg-opacity-50 rounded-lg cursor-pointer flex hover:text-white"
        >
          <p>Resume</p>
        </a>
      </div>
    </nav>
  );
}
