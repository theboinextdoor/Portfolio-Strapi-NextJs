import ProjectCard from "@/components/ProjectCard";
import axios from "axios";
import React, { useEffect } from "react";

const pages = async () => {
  return (
    <section className="text-gray-400  bg-black md:p-24 p-14">
      <div className=" px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 ">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Project
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            Welcome to my project page! Here, you&apos;ll find a curated
            selection of projects that showcase my skills, creativity, and
            passion for development. Each project has its own story, challenges,
            and solutions, offering a glimpse into my journey as a developer.
            Feel free to explore each project by clicking on its title or image.
            You&apos;ll find detailed descriptions, technologies used, and links
            to live demos or GitHub repositories. Whether it&apos;s a web
            application, mobile app, or a fun side project, I&apos;ve poured my
            heart and soul into each endeavor. I hope these projects inspire
            you, spark your curiosity, or perhaps even encourage collaboration.
            If you have any questions, feedback, or just want to chat,
            don&apos;t hesitate to reach out through the contact page. Thank you
            for visiting, and enjoy browsing through my work!
          </p>
        </div>
        <div className=" flex flex-wrap m-4 md:gap-28">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default pages;
