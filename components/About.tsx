import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col p-4 w-full max-w-2xl min-h-[65vh] mt-12">
      <p className="text-2xl text-white">About</p>
      <p className="mt-4">
        I&apos;m a hobbyist software developer with love for minimalist design
        and meaningful experience.
        <br />
        <br />
        Currently working at{" "}
        <a href="https://www.strebentechnik.com">Streben</a>, where I&apos;m
        actively involved in frontend development for web and mobile using
        various Javascript frameworks. Apart from work, most of my time is spend
        on
        <Link href="/projects"> personal projects</Link> and exploring new
        technologies.
        <br />
        <br />
        For most of the design, I use Figma and Photopea. Aside all of these, I
        love to sleep, read and explore new stuff going around!
      </p>
      <p className="mt-8">
        Find me on <a href="https://github.com/ArunGovil">GitHub,</a>
        <a href="https://twitter.com/be_like_arun"> Twitter,</a>
        <a href="https://www.linkedin.com/in/arungovil/">
          {" "}
          LinkedIn
        </a> <br /> Mail me at{" "}
        <a href="mailto:arungovil@proton.me">arungovil@duck.com.</a>
      </p>
    </div>
  );
}
