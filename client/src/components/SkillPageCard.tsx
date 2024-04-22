import Link from "next/link";
import React from "react";

const SkillPageCard = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://dummyimage.com/420x260"
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Markup language for Web pages.
        </h3>
        <h2 className="text-white title-font text-lg font-medium">HTML</h2>
        <Link
          target="_blank"
          href="https://www.w3schools.com/html/"
          className="mt-1 cursor-pointer"
        >
          Learn more...
        </Link>
      </div>
    </div>
  );
};

export default SkillPageCard;
