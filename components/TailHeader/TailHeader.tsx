import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavProps } from "@/interfaces/interfaces";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
const navigation: NavProps[] = [
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
export default function TailHeader() {
  return (
    <div className="fixed top-0 right-0 left-0 z-30 tailheader">
      <Disclosure as="nav" className="md:hidden mobile_menu">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-teal-400 hover:bg-teal-600 hover:text-white transition-all">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-10 w-10"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-10 w-10"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center md:hidden">
                  <div className="flex flex-shrink-0 justify-center items-center h-20">
                    <Link href="/">
                      <Image
                        className="h-16 w-auto pb-2"
                        src="/logo.png"
                        alt="Your Company"
                        width={150}
                        height={150}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="  pb-6 pt-2 flex justify-around w-full ">
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      ease: [0, 0.71, 0.2, 1.01],
                      scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001,
                      },
                    }}
                  >
                    <Link
                      href={item.href}
                      key={item.name}
                      className="block rounded-md px-3 py-2 text-base font-medium text-white mobile-menu-anim"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="w-full h-20 ">
                <ul className="w-full h-20 flex justify-around items-center text-2xl">
                  <li>
                    <Link
                      href={"https://google.com"}
                      target="_blank"
                      className="hover:text-teal-400 transition-all"
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://google.com"}
                      target="_blank"
                      className="hover:text-teal-400 transition-all"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://google.com"}
                      target="_blank"
                      className="hover:text-teal-400 transition-all"
                    >
                      <FaGithub />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://google.com"}
                      target="_blank"
                      className="hover:text-teal-400 transition-all"
                    >
                      <FaWhatsapp />
                    </Link>
                  </li>
                </ul>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
