import Link from "next/link";
import React from "react";
import config from "@/config";
import Image from "next/image";

const SkillPageCard = ({ skills ,category }: any) => {
  
  const imageUrl = skills?.attributes?.image?.data?.attributes?.url;
  // console.log(imageUrl)

  return (
   <>
    {
      skills.attributes.category === category && 
       <div className="lg:w-1/4 md:w-2/3 p-4 w-full hover:translate-y-2 shadow-lg drop-shadow-xl shadow-red-600 hover:scale-125 hover:ease-in-out rounded-xl duration-700">
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          className="object-cover"
          alt={skills?.attributes?.Language}
          src={"/conding.gif"} // Provide a default image URL in case the data is not available
          width={720}
          height={600}
          priority={true}
          unoptimized
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {skills?.attributes?.description}
        </h3>
        <h2 className="text-white title-font text-lg font-medium">
          {skills?.attributes?.Language}
        </h2>
        <Link
          target="_blank"
          href={skills?.attributes?.languageURL}
          className="mt-1 cursor-pointer hover:text-red-400 hover:cursor-pointer"
        >
          Learn more...
        </Link>
      </div>
    </div>
    }
   </>
  );
};

export default SkillPageCard;
