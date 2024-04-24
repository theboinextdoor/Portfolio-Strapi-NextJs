import React from "react";
import config from "@/config";

interface Project {
  attributes: {
    technology: string;
    title: string;
    description: string;
    // Add other attributes if needed
  };
  id: string; // Change type to string since it's treated as a string in the API response
}

const fetchProjectdata = async () => {
  const reqOption = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_PROJECT_TOKEN}`
    }
  };

  try {
    const request = await fetch(`${config.api}/api/projects?populate=*`, reqOption);
    const response = await request.json();
    return response.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
};

const ProjectCard: React.FC = async () => {
  const projects = await fetchProjectdata();
  console.log(projects);

  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
    {projects?.map((project: Project, index: number) => (
      <div key={index} className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src="https://dummyimage.com/720x400"
          alt="content"
        />
        <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
          {project.attributes.technology}
        </h3>
        <h2 className="text-lg text-white font-medium title-font mb-4">
          {project.attributes.title}
        </h2>
        <p className="leading-relaxed text-base">
          {project.attributes.description}
        </p>
      </div>
    ))}
  </div>
  );
};

export default ProjectCard;
