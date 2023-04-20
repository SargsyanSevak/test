import { NavProps } from "@/interfaces/interfaces";
import React from "react";
import AudioPlayer from "../UI/AudioPlayer/AudioPlayer";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
const navList: NavProps[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Works",
    href: "/Works",
  },
  {
    name: "About",
    href: "/About",
  },
  {
    name: "Blog",
    href: "/Blog",
  },
];
const AsideMenu = () => {
  const router = useRouter();

  return (
    <nav className="nav_item_container hidden md:flex">
      <div className="nav-items h-2/4  flex justify-evenly ound items-center flex-col-reverse ">
        {navList.map((nav, i) => (
          <Link
            href={nav.href}
            key={i}
            className={`tracking-wide font-bold px-6 py-8 nav_item flex justify-center items-center text-teal-400 transition-all ${
              router.pathname === nav.href
                ? "border-b-4 border-gray-300 "
                : "text-white"
            }`}
          >
            {nav.name}
          </Link>
        ))}
      </div>

      <span className="nav_item flex justify-center items-center logo pr-28">
        Sargsyan
      </span>
      <Link href="/" className="anim fixed top-0">
        <Image src="/logo1.png" alt="logo" width={120} height={120} />
      </Link>

      <div className="border_right flex justify-center items-center "></div>
      <AudioPlayer src="/sound.mp3" />
    </nav>
  );
};

export default AsideMenu;
