"use client";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuButton = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <header className=" text-white z-40 bg-black body-font fixed h-18 w-screen">


      {/* Laptop View */}
      <div className="hidden md:block container mx-auto md:flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-lg md:ml-auto">
          <Link href="/" className="mr-5 hover:text-white">
            Home
          </Link>
          <Link href="/project" className="mr-5 hover:text-white">
            Project
          </Link>
          <Link href="/SkillPage" className="mr-5 hover:text-white">
            My Skills
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
        </div>
      </div>

      {/* Mobile view */}

      <div className="md:hidden z-40">
        <div className="flex items-center justify-between ">
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
          {showMenu ? (
            <RxCross2
              className="text-white text-2xl mr-8"
              onClick={handleMenuButton}
            />
          ) : (
            <GiHamburgerMenu
              className="text-white text-2xl mr-8"
              onClick={handleMenuButton}
            />
          )}
        </div>
        <div
          className={`bg-black absolute top-18 w-full left-0 right-0 ease-in-out duration-300 ${
            showMenu ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          {showMenu && (
            <nav className="flex flex-col gap-8 items-center text-md my-4 ">
              <Link href="/" className="mr-5 hover:text-white">
                Home
              </Link>
              <Link href="/project" className="mr-5 hover:text-white">
                Project
              </Link>
              <Link href="/SkillPage" className="mr-5 hover:text-white">
                My Skills
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
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
