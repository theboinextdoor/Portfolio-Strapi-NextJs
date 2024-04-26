import React from "react";
import config from "@/config";
import Image from "next/image";
import Link from "next/link";

interface Project {
  attributes: {
    projectlink:string;
    technology: string;
    title: string;
    description: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    // Add other attributes if needed
  };
  id: string; // Change type to string since it's treated as a string in the API response
}

const fetchProjectdata = async () => {
  const reqOption = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_PROJECT_TOKEN}`,
    },
  };

  try {
    const request = await fetch(
      `${config.api}/api/projects?populate=*`,
      reqOption
    );
    const response = await request.json();
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
};

const ProjectCard: React.FC = async () => {
  const projects = await fetchProjectdata();
  // const imageUrl = skills?.attributes?.image?.data?.attributes?.url;
  console.log(projects);

  return (
  
    
     <>
      {projects?.map((project: Project, index: number) => (
        <div key={index} className="lg:w-1/4 md:w-2/3 p-4 w-full hover:translate-y-2 shadow-lg drop-shadow-xl shadow-red-600 hover:scale-110 hover:ease-in-out rounded-xl duration-700 ">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={project.attributes?.image?.data?.attributes?.url}
            alt="content"
            width={720}
            height={600}
            priority={true}
          />
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
            {project.attributes.technology}
          </h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">
            {project.attributes.title}
          </h2>
          <p className="leading-relaxed text-base mb-2">
            {project.attributes.description}
          </p>
          <Link href={project.attributes.projectlink || "/"} target="_blank" >
          <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">View Project</button>
          </Link>

        </div>
      ))}
     </>
   
   
  );
};

export default ProjectCard;
