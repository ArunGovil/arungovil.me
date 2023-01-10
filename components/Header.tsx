import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export const technology = [
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Posts",
    path: "/posts",
  },
];

export default function Header() {
  const router = useRouter();
  return (
    <nav className="flex justify-center z-10 items-center w-full text-md sticky top-0 backdrop-blur-sm">
      <div className="flex  justify-between p-6 items-center w-full max-w-2xl">
        {router.pathname.includes("/posts/[slug]") ? (
          <Link href="/posts" className="inline-flex items-center">
            <div className="w-5 h-5 mr-2">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                ></path>
              </svg>
            </div>
            <p className="mr-2">Back to Posts</p>
          </Link>
        ) : (
          <div>
            <ul className="flex">
              <Link
                href="/"
                key="About"
                className={
                  router.pathname === "/"
                    ? "cursor-pointer mr-4 text-white"
                    : "cursor-pointer mr-4 border-none"
                }
              >
                About
              </Link>
              {technology.map((item) => (
                <Link
                  href={item.path}
                  key={item.title}
                  className={
                    router.pathname.includes(item.path)
                      ? "cursor-pointer mr-4 text-white"
                      : "cursor-pointer mr-4 border-none"
                  }
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
        )}
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
