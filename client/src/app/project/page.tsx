import ProjectCard from "@/components/ProjectCard";
import axios from "axios";
import React, { useEffect } from "react";

const pages = async () => {
  return (
    <section className="text-gray-400 body-font bg-black md:p-24 p-14">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Project
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
           Hey this is Faraaz
          </p>
        </div>
        <div className="flex flex-wrap m-4 gap-4">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default pages;
