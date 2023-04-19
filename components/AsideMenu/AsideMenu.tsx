import { NavProps } from "@/interfaces/interfaces";
import React from "react";
import AudioPlayer from "../UI/AudioPlayer/AudioPlayer";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'
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
    name: "Contact",
    href: "/Contacts",
  },
];
const AsideMenu = () => {
  const router = useRouter();

  return (
    <nav className="nav_item_container hidden md:flex">
      <div className="nav-items h-2/4  flex justify-evenly ound items-center flex-col-reverse">
        {navList.map((nav, i) => (
        <Link
          href={nav.href}
          key={i}
          className={`nav_item flex justify-center items-center text-white transition-all ${
            router.pathname === nav.href ? "text-md px-4 py-8 border-b-8 border-gray-300" : "text-white"
          }`}
        >
          {nav.name}
        </Link>
      ))}
      </div>
      

      <span className="nav_item flex justify-center items-center logo">
        Sargsyan
      </span>
      <div className="border_right flex justify-center items-center ">
        <div className="border_img w-40">
          <Image src="/character2.png" alt="" width={70} height={70} className='boo'/>
        </div>
      </div>
      <AudioPlayer src="/sound.mp3" />
    </nav>
  );
};

export default AsideMenu;
