import SkillPageCard from "@/components/SkillPageCard";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="text-gray-400 bg-black body-font p-14 md:24 ">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap -m-4">
          <SkillPageCard />
          <SkillPageCard />
          <SkillPageCard />
          <SkillPageCard />
          <SkillPageCard />
          <SkillPageCard />
          <SkillPageCard />
        </div>
      </div>
    </section>
  );
};

export default page;
