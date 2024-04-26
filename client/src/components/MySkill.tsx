"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import config from "@/config";
import SkillPageCard from "./SkillPageCard";

interface Skills {
  attributes: {
    Language: string;
    languageURL: string;
    description: string;
    category: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
  id: number;
}

const fetchMySkillData = async () => {
  const reqOption = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SKILL_TOEKN}`,
    },
  };

  try {
    const request = await fetch(
      `${config.api}/api/skills?populate=*`,
      reqOption
    );
    const response = await request.json();
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};


const MySkill = () => {
  const [myskills , setMyskills] = useState<Skills[]>([])
  const totalCard = 5

  useEffect(()=>{
    const fetchData = async () => {
      const skills = await fetchMySkillData();
      setMyskills(skills);
    };
    fetchData(); 
  })

  return (
    <section className="text-gray-400 bg-black body-font rounded-2xl shadow-md drop-shadow-md shadow-cyan-300">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            My Skill
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here, you&apos;ll find a comprehensive overview of the languages,
            technologies, and tools that I&apos;ve mastered throughout my
            journey as a developer. From programming languages to frameworks and
            libraries, I&apos;m constantly expanding my skill set to stay ahead
            in the ever-evolving tech landscape
          </p>
        </div>

        {/* Card */}
        <div className="flex flex-col flex-wrap gap-8 md:flex-row justify-center items-center">
          {
            myskills.map((skill , id) =>(
              <SkillCard key={skill.id} skills={skill} />
              
            ))
          }
          
         
         
        </div>
        <div className=" flex items-center justify-center p-8">
          <Link href="./SkillPage"
            
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              View More
            </span>
            <span className="relative invisible">Button Text</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MySkill;
