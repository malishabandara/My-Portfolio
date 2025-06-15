import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          malishabandara2@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Malisha Bandara. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <a target="_blank" href="https://www.linkedin.com/in/malisha-hunukumbura/" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a target="_blank" href="https://github.com/malishabandara" rel="noopener noreferrer">
            Github
          </a>
          <Link href="#">
            Facebook
          </Link>
        </ul>

      </div>
    </div>
  );
};

export default Footer;
