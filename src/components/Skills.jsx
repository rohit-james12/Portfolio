import React from "react";
import skilldb from "../data/skillsdb.json";

const Skills = () => {
  // const skillstyle = `w-12 h-12 mx-auto`;
  return (
    <div name="skills" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-emerald-400 text-emerald-500">
            Skills
          </p>
          <p className="py-8 text-emerald-500 text-lg">
            These are the technologies I have worked with :{" "}
          </p>
        </div>
        <div className="w-full grid grid-cols-4 gap-4 justify-center py-2">
          {skilldb.map((skill) => (
            <div
              key={skill.name}
              className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400"
            >
              <img className={skill.style} src={skill.src} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
