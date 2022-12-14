import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-[700px] md:h-screen bg-[#0a192f] text-emerald-500"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-emerald-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>B.Tech student at Pune Institute Of Computer Technology</p>
          </div>
          <div className="text-lg">
            <p>
              I am passionate about building user friendly applications that
              provide a smooth experience. I always look forward to taking up
              new and exciting tasks which helps me develop my technical
              knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
