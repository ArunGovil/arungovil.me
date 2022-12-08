import Link from "next/link";
import Image from "next/image";

export default function About() {
  const meme = require("../public/img/badge.png");
  return (
    <div className="flex flex-col justify-center p-4 w-full max-w-3xl mt-12">
      <div className="flex items-center">
        <Image className="w-10 mr-2" src={meme} alt="meme" />
        <p className="text-2xl">Professional Google Searcher</p>
      </div>
      <p className="mt-4 font-thin leading-7">
        Hey there, I&apos;m hobbyist developer and designer with love for
        minimalist design and meaningful experience.
        <br />
        <br />
        Currently fixing bugs at{" "}
        <a href="https://www.strebentechnik.com">
          <b>Streben</b>
        </a>
        , where I&apos;m actively involved in frontend development using
        frameworks like <b>ReactJs,</b> <b>NuxtJs,</b> <b>React Native</b> etc.
        In my free time I love building{" "}
        <Link href="/projects">
          <b>hobby projects</b>
        </Link>{" "}
        and exploring new technologies.
        <br />
        <br />
        For most of my design work, I use <b>Figma</b> and <b>Photopea</b>.
        Apart from coding, I love to sleep, read and explore new stuff going
        around!
      </p>
      <p className="mt-8 font-thin">
        Find me on{" "}
        <a href="https://github.com/ArunGovil">
          <b>GitHub, </b>
        </a>
        <a href="https://twitter.com/be_like_arun">
          <b>Twitter,</b>
        </a>
        <a href="https://www.linkedin.com/in/arungovil/">
          <b> LinkedIn</b>
        </a>{" "}
        <br /> Mail me at{" "}
        <a>
          <b>arungovil@pm.me.</b>
        </a>
      </p>
    </div>
  );
}
