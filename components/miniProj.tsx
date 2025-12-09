"use client";

import React, { useState, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "@/components/projectCard";
import SectionHeading from "./section-heading";
import { miniProjectsData } from "@/lib/data";

export default function MiniProj() {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const visibleProjects = showAll
    ? miniProjectsData
    : miniProjectsData.slice(0, 4);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      id="miniProj"
      className="max-w-4xl mx-auto px-4 sm:px-4 lg:px-4 my-20"
    >
      <SectionHeading>Mini Projects</SectionHeading>

      <div className="h-[2px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-4 mb-10" />

      <div
        className={`grid gap-8 transition-all duration-500 ${
          showAll
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05, // stagger entry
                ease: "easeInOut",
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

       <div className="flex justify-center mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-md"
        >
          {showAll ? "Show Less" : "Show More"}
        </motion.button>
      </div>
      <div className="h-[2px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 mb-4" />
    </motion.section>
  );
}

// scroll-mt-28 mb-28 sm:mb-40
        


        /* <SectionHeading >
            My experience
        </SectionHeading>
        <VerticalTimeline >
 {miniProjectsData.map((item, index)=>(
        <React.Fragment key={index}>
            <VerticalTimelineElement contentStyle={{
                background:"#f3f4f6",
                boxShadow:"none",
                border:"1px solid rgba(0,0,0,0.05)",
                textAlign:"left",
                padding:"1.3rem 2rem ",
                width:"42rem",
                height:"12rem", 
                boxSizing:"border-box",
            }}
            
            contentArrowStyle={{
                borderRight:"0.4rem solid #9ca3af",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
                background:"white",
                fontSize: "1.5rem",
            }}>
            
                 <h3 className='font-semibold capitalize'>{item.title}</h3>
                 <p className='font-normal !mt-0'>{item.location}</p>
                 <p className='!mt-1 !font-normal text-gray-700'> {item.description}</p>
            </VerticalTimelineElement>
        </React.Fragment>
         
     ))}


        </VerticalTimeline>


        
      */