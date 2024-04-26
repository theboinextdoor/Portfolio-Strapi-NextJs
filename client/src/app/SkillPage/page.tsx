/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import SkillPageCard from "@/components/SkillPageCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import config from "@/config";

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

const page: React.FC = () => {
  const [myskills, setMyskills] = useState<Skills[]>([]);
  const [isOpenDropdown, setIsOpenDropDown] = useState(false);
  const [currentSkill, setCurrentSkill] = useState("Language");
  console.log(myskills);
  useEffect(() => {
    const fetchData = async () => {
      const skills = await fetchMySkillData();
      setMyskills(skills);
    };
    fetchData();
  }, []);
  const list = [
    "Language",
    "Framework",
    "Styling",
    "DataBase",
    "CMS",
    "Others",
  ];
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const handlesetOpenDropDown = () => {
    setIsOpenDropDown((prev) => !prev);
  };
  const handleSetCurrentSkill = (item: any) => {
    setCurrentSkill(item);
    setIsOpenDropDown(false); // Close dropdown after selecting an item
  };

  return (
    <section className="text-gray-400 bg-black body-font p-14 md:p-24 md:flex ">
    {/* Left side div */}
    <div className="fixed top-0 left-0 w-[240px] md:w-[340px] h-[240px] md:h-[340px] rounded-lg mt-24 z-40 p-8 mb-8">
      {/* Dropdown Box */}
  
      <div className="relative flex flex-col items-center w-full h-full">
        <button
          onClick={handlesetOpenDropDown}
          className="bg-blue-400 text-black p-2 md:p-4 w-full flex items-center justify-between font-semibold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
        >
          Skill List
          {!isOpenDropdown? (
            <AiOutlineCaretDown className="h-8" />
          ) : (
            <AiOutlineCaretUp className="h-8" />
          )}
        </button>
  
        {isOpenDropdown && (
          <div className="bg-blue-400 absolute top-16 flex flex-col items-start rounded-lg p-2 w-full text-md">
            {list.map((item, index) => (
              <div key={index} className="text-black">
                <h3
                  className="text-md md:text-lg cursor-pointer hover:text-white"
                  onClick={() => handleSetCurrentSkill(item)}
                >
                  {item}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Dropdown ends */}
    </div>
  
    {/* Right side div */}
    <div className="container px-5  mx-auto md:my-24 my-4">
      <div className="flex items-center justify-center py-2">
        <p className="text-md md:text-2xl mb-4">{currentSkill}</p>
      </div>
      <div className="flex flex-wrap m-4 md:gap-28">
        {myskills.map((skill) => (
          <SkillPageCard key={skill.id} skills={skill} category={currentSkill} />
        ))}
      </div>
    </div>
  </section>
  );
};

export default page;
