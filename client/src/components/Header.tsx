"use client";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuButton = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <header className=" text-white bg-black body-font">
      {/* Laptop View */}
      <div className="hidden md:block container mx-auto md:flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-lg md:ml-auto">
          <Link href="/" className="mr-5 hover:text-white">
            Home
          </Link>
          <Link href="/project" className="mr-5 hover:text-white">
            Project
          </Link>
          <Link href="/contact" className="mr-5 hover:text-white">
            Contact
          </Link>
          {/* <a className="hover:text-white"></a> */}
        </nav>
        <Link
          href="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl xl:block lg:hidden">
            <Image
              src={"/mainlogo.jpg"}
              alt="mainlogo"
              height="20"
              width="300"
              className="md:w-40 lg:w-full"
            />
          </span>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link
            download
            href="./resume.pdf"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group "
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Resume
            </span>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile view */}
      <div className=" md:hidden text-black">
        {!showMenu && (
          <div
            className={`bg-gradient-to-r from-gray-600 via-gray-600 to-gray-400 w-2/3 absolute top-0 left-0 h-screen rounded-r-2xl shadow-2xl drop-shadow-2xl transition-all duration-700 ease-in-out ${
              showMenu ? "scale-200" : "scale-195"
            }`}
          >
            <nav className="flex flex-col gap-8 items-center text-md mt-20 ">
              <RxCross2
                className="text-2xl absolute top-3 left-2 "
                onClick={handleMenuButton}
              />
              <Link href="/" className="mr-5 hover:text-white">
                Home
              </Link>
              <Link href="/project" className="mr-5 hover:text-white">
                Project
              </Link>
              <Link href="/contact" className="mr-5 hover:text-white">
                Contact
              </Link>
              <a
                download
                href="./resume.pdf"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group "
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Resume
                </span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </nav>
          </div>
        )}
        <div className="justify-between items-center flex">
          {showMenu && (
            <GiHamburgerMenu
              className="text-white text-2xl mr-8"
              onClick={handleMenuButton}
            />
          )}
          <Link
            href="/"
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl xl:block lg:hidden">
              <Image
                src={"/mainlogo.jpg"}
                alt="mainlogo"
                height="20"
                width="300"
                className="md:w-40 lg:w-full"
              />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
