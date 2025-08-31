'use client';
import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion" 
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
// import { useActiveSectionContext } from '@/context/active-section-context';
// import { useInView } from 'react-intersection-observer';
import { useSectionInView } from '@/lib/hooks';
export default function Intro() {

  const {ref} = useSectionInView("Home", 0.4); 
//   const {ref,inView} = useInView({
//     threshold: 0.4,
//    });  
//   const {setActiveSection, timeOfLastClick}= useActiveSectionContext();
//  useEffect(()=>{
//  if(inView && Date.now()-timeOfLastClick > 1000){
//     setActiveSection("Home")
//   }
//   }, [inView, setActiveSection, timeOfLastClick])
            
  return (
    <section 
      ref={ref}
      id="home"
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-100'
      >
        <div className='flex items-center justify-center'>
            <div className='relative '>

              <motion.div
              initial = {{opacity:0, scale:0}}
              animate= {{opacity: 1, scale:1}}
               transition = {{
                type: "tween",
                duration:0.2,
              }}>
             
                

                   <Image src="/mypic.jpg" alt="mypic" width="192" height="192" quality="95" priority={true}
                className=' h-30 w-30 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
              
              </motion.div>
              
              <motion.span className='absolute bottom-0 text-4xl'
              initial = {{opacity:0, scale:0}}
              animate= {{opacity: 1, scale:1}}
              transition={{type: 'spring',
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
              >
                      👋
                </motion.span>

    
            </div>
        </div>
        <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium sm:text-4xl'
        initial = {{opacity:0, y:100}}
        animate = {{opacity:1, y:0}}>
           Hi, I&apos;m Sujal Ghorse. 
        </motion.p>

        <motion.div className='flex flex-col sm:flex-row gap-2 items-center justify-center px-4 text-lg font-medium'
          initial = {{opacity:0, y:100}}
        animate = {{opacity:1, y:0}} 
        transition={{delay:0.1}}>
          <Link href= "#contact" 
          className='group bg-gray-900 text-white px-6 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110
          hover:scale-110 hover:bg-gray-950 active:scale-105 hover:text-gray-200 transition'>
          Contact me here<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/> {" "}
          </Link>
          <a href="/Sujalresume(college).pdf" download className='group flex items-center bg-white text-gray-800 px-6 py-3 gap-2 rounded-full 
          outline-none focus:scale-110
          hover:scale-105 active:scale-100 hover:text-gray-950 transition cursor-pointer
         border border-black/10'>Download Resume{" "}<HiDownload className='opacity-70 group-hover:translate-y-0.5 transition'/></a>


           <a href="" className='flex items-center bg-white text-gray-950 px-6 py-3 gap-2 rounded-full
           outline-none focus:scale-[1.20]
          hover:scale-[1.20] hover:text-gray-950 active:scale-105 transition border border-black/15'>  <BsLinkedin/></a>


            <a href="" className='flex items-center bg-white text-gray-950 px-6 py-3 gap-2 rounded-full outline-none focus:scale-[1.20]
          hover:scale-[1.20] hover:text-gray-950 active:scale-105  transition border border-black/15'><BsGithub/></a>
            
        </motion.div>
    </section>
  )
}


//section classes: className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] bg-red-500