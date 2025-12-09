"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 2);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto"
      >
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Project {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

           {projectsData.length > 2 && (
        <div className="text-center mt-10">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </motion.button>
        </div>
      )}
    </section>
  );
}


// "use client"
// import React from 'react'
// import SectionHeading from './section-heading'
// import { projectsData } from '@/lib/data'
// import Project from './project'
// // import { useInView } from 'react-intersection-observer'
// // import { useActiveSectionContext } from '@/context/active-section-context'
// import { useSectionInView } from '@/lib/hooks'


// export default function Projects() {

//   const {ref} = useSectionInView("Projects", 0.5); 
// //    const {ref,inView} = useInView({
// //     threshold: 0.5,
// //    });  

// //   const {setActiveSection, timeOfLastClick}= useActiveSectionContext
// //   ();


// //   useEffect(()=>{
// //  if(inView && Date.now()-timeOfLastClick > 1000){
// //     setActiveSection("Projects")
// //   }
// //   }, [inView, setActiveSection, timeOfLastClick])
            
//   return (
//     <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
//         <SectionHeading >
//            My projects
//         </SectionHeading>
//         <div>
//             {
//                 projectsData.map((project, index)=>(
//                     //react fragment is used when you need to add a key but avoid extra elements to avoid unnecessary dom wrapping
//                     <React.Fragment key={index}> 
//                       <Project {...project}/>
//                     </React.Fragment>
                  
//                 ))
//             }
//         </div>

//     </section>
//   )
// }