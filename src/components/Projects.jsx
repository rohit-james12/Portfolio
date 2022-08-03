import React from 'react'

const Projects = () => {
  return (
    <div name="projects" className='bg-[#0a192f] w-full md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-emerald-400 text-emerald-500'>Projects</p>
                <p className='py-8 text-emerald-500 text-lg'>Check out the projects I have worked on</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    {/* Hover Effects */}
                    <div>
                        <span>

                        </span>
                        <div>
                            <a href="/">
                                <button></button>
                            </a>
                            <a href="/">
                                <button></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects