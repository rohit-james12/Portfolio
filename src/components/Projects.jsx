import React from "react";
import { projectdb } from "../data/projectdb";

const Projects = () => {
  return (
    <div name="projects" className="bg-[#0a192f] w-full md:h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-emerald-400 text-emerald-500">
            Projects
          </p>
          <p className="py-8 text-emerald-500 text-lg">
            Check out the projects I have worked on
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projectdb.map((project) => (
            <div
              key={project.name}
              style={{ backgroundImage: `url(${project.url})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {project.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={project.demoLink} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
