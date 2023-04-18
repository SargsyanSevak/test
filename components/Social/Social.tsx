import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
const Social = () => {
  return (
    <div className="fixed right-10 bottom-6 social">
      <ul className="flex flex-col gap-8 text-white text-60">
        <li>
          <Link href={"https://google.com"} target="_blank" className="hover:text-gray-300 transition-all">
            <FaFacebookF />
          </Link>
        </li>
        <li>
          <Link href={"https://google.com"} target="_blank" className="hover:text-gray-300 transition-all">
            <FaLinkedinIn/>
          </Link>
        </li>
        <li>
          <Link href={"https://google.com"} target="_blank" className="hover:text-gray-300 transition-all">
            <FaGithub/>
          </Link>
        </li>
        <li>
          <Link href={"https://google.com"} target="_blank" className="hover:text-gray-300 transition-all">
            <FaWhatsapp/>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Social;
