import { FaLinkedin } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-black ">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-xl">Faraaz Ashraf</span>
        </Link>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2023 theboynextdoor —
        </p>
        <span className="flex sm:ml-auto  gap-4 sm:mt-0 mt-4 justify-center sm:justify-start md:text-xl">
          <FaXTwitter />
          <ImInstagram />
          <FaLinkedin />
          <SiGmail className="cursor-pointer " />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
