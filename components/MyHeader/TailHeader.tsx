import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavProps } from "@/interfaces/interfaces";
import Link from "next/link";
import Social from "../Social/Social";
import Image from 'next/image'
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
    name: "Contact",
    href: "/Contacts",
  },
];
export default function TailHeader() {
  return (
    <div className="fixed top-0 right-0 left-0">
      <Disclosure as="nav" className="md:hidden mobile_menu">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white transition-all">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-10 w-10" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center md:hidden">
                  <div className="flex flex-shrink-0 justify-center items-center h-20">
                    <Image
                      className="h-16 w-auto pb-2"
                      src="/logo1.png"
                      alt="Your Company"
                      width={150}
                      height={150}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link
                    href={item.href}
                    key={item.name}
                    className="block rounded-md px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Social />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
