import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-black ">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-xl">Faraaz Ashraf</span>
        </Link>
        <p className="text-lg text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4 md:text-lg">
          © 2023 theboynextdoor —
        </p>
        <div className="flex sm:ml-auto  gap-4 sm:mt-0 mt-4 justify-center sm:justify-start ">
          <Link href="https://twitter.com/heyanonymouss"target="_blank">
            <FaXTwitter className="cursor-pointer md:text-3xl" />
          </Link>

          <Link href={"https://github.com/theboinextdoor"}target="_blank">
            <IoLogoGithub className="cursor-pointer md:text-3xl" />
          </Link>

          <Link href="https://www.linkedin.com/in/faraaz-ashraf-831796204/"target="_blank">
            <FaLinkedin className="cursor-pointer md:text-3xl" />
          </Link>
          <Link href={"mailto:farazashraf1523@gmail.com"} target="_blank">
            <SiGmail className="cursor-pointer md:text-2xl " />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
