import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-emerald-500 text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-emerald-300 py-2">
          Rohit James
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-emerald-500">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-emerald-500 py-4 max-w-[700px]">
          Building responsive websites and implementing complex web
          applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-emerald-600 hover:border-emerald-600">
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
