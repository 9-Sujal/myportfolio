"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="group relative bg-neutral-900 border border-neutral-700 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="relative w-full h-44 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-white mb-1">
          {project.title}
        </h3>

        <p
          className={`text-sm text-gray-300 transition-all duration-300 ${
            expanded ? "line-clamp-none" : "line-clamp-2"
          }`}
        >
          {project.description}
        </p>

        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-xs text-blue-400 mt-1 hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-neutral-800 px-2 py-[2px] text-[0.65rem] uppercase tracking-wider text-gray-300 border border-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between mt-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <BsGithub className="w-5 h-5" />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white flex items-center gap-1 transition"
            >
              <span className="text-xs font-semibold">Demo</span>
              <BsArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}


// import React, { useState } from 'react'

// import {Project} from "@/lib/types"
// import Image from 'next/image';
// import { BsArrowUpRight, BsGithub } from 'react-icons/bs';



// type ProjectCardProps={
//   project:Project;

// }


// export default function ProjectCard ({project}:ProjectCardProps) {
//    const [expanded, setExpanded] = useState(false); 
 
//   return (
//   <div className="w-full h-full justify-between bg-neutral-800 border border-gray-200 rounded-2xl shadow-md  ">
     
//       <a href={project.liveLink}>
//         <Image src={project.image} alt='img'   className='object-contain rounded-t-lg shadow-2xs'/>
//       </a>
      

//       <div className=' border-2'>
//         <h5 className='text-xl mb-2 font-bold tracking-tight '>{project.title}</h5>
//         <p className={`text-sm mt-1 transition-all duration-300 ${
//           expanded? "h-20 overflow-y-visible" : "h-5 overflow-hidden"
//         }`}>{project.description}</p>
//         <button onClick={()=>setExpanded((prev)=>!prev)}
//           className='text-xs mt-1 hover:underline'>
//             {expanded ? "Show less" : "Show more"}

//         </button>

//       </div>
//       {/* techstack */}
//     <div className='mt-3 flex flex-wrap gap-2 px-2'>
//       {project.tags.map((tag, index)=>(
//         <span key={index} 
//         className='rounded-full bg-gray-800 px-2 py-1 text-xs'>{tag}</span>
//       ))}
        
//     </div>
//     {/* links */}

//     <div className='flex gap-4 mt-4 border-1 justify-around object-contain'>
//       {project.githubLink && (
//         <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='text-xs text-gray-400 hover:text-white underline'>
//           <BsGithub className='m-4 size-5 bg-black'/>
//         </a>
//       )}
//        {project.liveLink && (
//             <a 
//               href={project.liveLink} 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className=" flex items-center gap-1 text-xs font-bold  text-gray-400 hover:text-white underline"
//             >
//             Demo <BsArrowUpRight className='size-4'/>
//             </a>)}

//     </div>

//   </div>
 
//   )
// }

