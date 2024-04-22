"use client";
import MySkill from "@/components/MySkill";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section className="text-gray-400 bg-black body-font p-10  md:p-14 lg:p-24 min-h-screen">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mt-10">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center order-2 md:order-1">
          <h1 className=" sm:text-4xl text-2xl mb-4 font-medium text-white">
            Hey I&apos;am
          </h1>
          <h1 className="title-font text-4xl text-red-600 font-medium md:text-7xl">Faraaz Ashraf</h1>
          <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "a MERN Stack Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Software Engineer",
                1000,
                
              ]}
              wrapper="span"
              className="text-cyan-500 my-6 md:text-2xl shadow-xl drop-shadow-xl "
              speed={10}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          <p className="mb-4 leading-relaxed md:text-xl p-2">
            I&apos;m a 23 years old passionate coder with a Bachelor&apos;s degree in
            Computer Science from NGF College of Engineering and Technology.I am already embarked on an exciting journey in
            the world of technology, constantly seeking opportunities to learn,
            grow, and innovate.
          </p>
          <div className="flex justify-center  ">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
             <a download href="/resume.pdf">Resume</a>
            </button>
            {/* <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Button
            </button> */}
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 order-1 mb-8 md:order-2 z-30">
          <Image
            src={"/coding.gif"}
            alt="Hero-logo"
            width={600}
            height={720}
            className="rounded-xl drop-shadow-lg shadow-cyan-400 shadow-md "
          />
        </div>
      </div>
      <MySkill />
    </section>
  );
}

