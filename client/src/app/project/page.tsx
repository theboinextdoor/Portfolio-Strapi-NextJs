"use client"
import ProjectCard from "@/components/ProjectCard";
import React, { useEffect } from "react";

const fetchProject = async() =>{
  const options= {
    headers : {
      Authorization : `Bearer ${process.env.STRAPI_PROJECT_TOKEN}`
    }
  }
  try{
    const res = await fetch(`http://127.0.0.1:1337/api/projects?populate=*`, options)
    const response = await res.json();
    return response;
  }catch(error){
    console.log("Error is happening")
    console.log(error)
  }
}

const pages = async() => {
  const projectData= await fetchProject();
  console.log(projectData)
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
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them man bun deep jianbing selfies heirloom
            prism food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default pages;
