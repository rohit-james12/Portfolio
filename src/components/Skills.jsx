import React from 'react';

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] w-full h-screen">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-emerald-400 text-emerald-500">Skills</p>
                <p className='py-8 text-emerald-500 text-lg'>These are the technologies I have worked with : </p>
            </div>
            <div className='w-full grid grid-cols-4 gap-4 justify-center py-2'>
                <div className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html" />
                </div>
                <div className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css" />
                </div>
                <div className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js" />
                </div>
                <div className="w-12 bg-none  shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="c++" />
                </div>
                <div className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" />
                </div>
                <div className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="typescript" />
                </div>
                <div className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto invert' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />
                </div>
                <div className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"  alt="mui" />
                </div>
                <div className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="twcss" />
                </div>
                <div className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql" />
                </div>
                <div className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongodb" />
                </div>
                <div className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />
                </div>
                <div className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux" />
                </div>
                <div className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node" />
                </div>
                <div className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto invert' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"alt="express" />
                </div>
                <div className="w-12 bg-none shadow-sm shadow-[#040c16] hover:scale-110 duration-400">
                    <img className='w-12 h-12 mx-auto' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"alt="docker" />
                </div>
            </div>
        </div>
    </div>
  )
}



export default Skills