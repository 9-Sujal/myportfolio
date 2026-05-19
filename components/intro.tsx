'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.4);

  return (
    <section
      ref={ref}
      id="home"
       className="flex flex-col items-center justify-center py-10 sm:py-16 mb-20 sm:mb-28 px-4 sm:px-6 scroll-mt-40 w-full"
    >
      <motion.div
        className="bg-white/5 backdrop-blur-lg border border-emerald-200 shadow-xl rounded-xl p-6 sm:p-8 md:p-10 w-full max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
       
<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
          
         
          <motion.div
            className="relative shrink-0"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 0.6 }}
          >
            <Image
                       src="/mypic.jpeg"
                       alt="Sujal Ghorse"
                       width={160}
                       height={160}
                       quality={95}
                       priority={true}
                       className="object-cover w-36 h-36 sm:w-50 sm:h-50 rounded-xl border-[3px] border-white shadow-md"
                     />

            
            <motion.div
              className="absolute bottom-2 right-2 bg-linear-to-r from-blue-500 to-cyan-400 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full shadow-md flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
                <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
            

              Open to Work
            </motion.div>
          </motion.div>

        
          <div className="text-center sm:text-left">
           <motion.h1
                      className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      Sujal Ghorse
                    </motion.h1>
            

             <motion.p
                       className="text-sm sm:text-base md:text-lg text-white font-light mt-1"
                       initial={{ opacity: 0, x: -20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: 0.3, duration: 0.6 }}
                     >
                       Software Engineer • MERN Stack Developer
                     </motion.p>

            <motion.p
              className="mt-3 text-sm text-emerald-100 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Passionate about building scalable full-stack applications and solving real-world problems through clean, performant code.
            </motion.p>
          </div>
        </div>

      
        <motion.div
                className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
              >
           <Link
            href="#contact"
            className="group flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-emerald-600 text-white rounded-full text-sm font-medium shadow-md transition-all
              hover:bg-emerald-700 hover:scale-105 active:scale-100 focus:ring-2 focus:ring-emerald-300"
          >
            Contact Me
            <BsArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
  <a
            href="/SujalGhorse.Resume..pdf"
            download
            className="group flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white text-gray-800 rounded-full border border-gray-200 text-sm shadow-sm
              hover:bg-gray-100 hover:scale-105 active:scale-100 transition-all"
          >
            Resume
            <HiDownload className="transition-transform group-hover:translate-y-0.5" />
          </a>

            <a
                     href="https://www.linkedin.com/in/sujal-ghorse-1255b0260/"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="LinkedIn"
                     className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white text-gray-800 rounded-full border border-gray-200 shadow-sm hover:scale-110 transition-all"
                   >
                     <BsLinkedin size={18} />
                   </a>
         

          <a
            href="https://github.com/9-Sujal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white text-gray-800 rounded-full border border-gray-200 shadow-sm hover:scale-110 transition-all"
          >
            <BsGithub size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}


