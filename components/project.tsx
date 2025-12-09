"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, Link }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll-based subtle animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.1 1", "0.8 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, y }}
      className="bg-gray-100 dark:bg-gray-800
                 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 
                 overflow-hidden flex flex-col"
    >
      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-64">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Text Content */}
      <div className="p-5 flex flex-col justify-between ">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
          <p className="mt-2 font-extralight sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tags */}
        <ul className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black text-white dark:bg-white dark:text-black 
                         text-[0.65rem] sm:text-[0.7rem] font-medium px-2.5 py-1 
                         tracking-wide rounded-md hover:scale-105 transition-transform"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Link */}
        {Link && (
          <a
            href={Link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Project →
          </a>
        )}
      </div>
    </motion.div>
  );
}

// "use client";
// import { projectsData } from "@/lib/data";
// import { useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { useRef } from "react";
// import {motion} from "framer-motion"

// type ProjectProps = (typeof projectsData)[number]; //saying that all data will be of the type listed down. as it is static and not imported. 

// export default function Project({title,description,tags,imageUrl
// }:ProjectProps){
//     const ref = useRef<HTMLDivElement>(null); //html element type.
//    const {scrollYProgress} =  useScroll({
//         target: ref,
//         offset: ["0 1","1.33 1"], //start, end
//     });
//    const scaleProgress =  useTransform(scrollYProgress,[0,1],[0.8, 1]);
//  const opacityProgress =  useTransform(scrollYProgress,[0,1],[0.6, 1]);
//     return(
//         <motion.div 
//         className="group mb-3 sm:mb-8 last:mb-0"
//         ref= {ref} 
//         style={{
//             scale: scaleProgress,
//             opacity: opacityProgress,
//         }}
//         >
//    <section 
//         className='relative bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8
//         sm:h-[20rem] group-even:pl-8
//         hover:bg-gray-200 transition'>
          
//             <div className=' flex flex-col pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full 
//             group-even:ml-[18rem] '>
//                   <h3 className='text-2xl font-semibold '>{title}</h3>
//             <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
//             <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
//                 {tags.map((tag,index)=>(
//                     <li className="bg-black/[0.7] px-3 uppercase py-1 text-[0.7rem] 
//                     tracking-wider text-white rounded-full dark:text-white/70 "key={index}>{tag}</li>
//                 ))}
//             </ul>
//             </div>
//             <Image 
//             src={imageUrl} alt= {title} quality={95}
//              className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
//             group-even:right-[initial] group-even:-left-40
//             group-hover:-translate-x-1
//             group-hover:translate-y-1
//             group-hover:-rotate-1
//              group-hover:scale-[1.04] 

//             group-even:group-hover:translate-x-1
//             group-even:group-hover:-translate-y-1
//             group-even:group-hover:rotate-1
//          '
//             />
//         </section>
//         </motion.div>
      
//     )
// }
