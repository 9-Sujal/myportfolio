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
      className=" flex flex-col items-center justify-center py-16 mb-28 px-6 scroll-mt-40"
    >
      <motion.div
        className=" bg-white/5 backdrop-blur-lg border border-emerald-200 shadow-xl rounded-xl p-8 sm:p-10 w-full max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
       
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-10">
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 0.6 }}
          >
            <Image
              src="/mypic.jpg"
              alt="Sujal Ghorse"
              width={220}
              height={160}
              quality={95}
              priority={true}
              className="object-cover w-[220px] h-[160px] sm:w-[260px] sm:h-[180px] rounded-xl border-[3px] border-white shadow-md"
            />

            {/* Open to Work Badge */}
            <motion.div
              className="absolute bottom-2 right-2 bg-gradient-to-r from-blue-500 to-aqua-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
            

              Open to Work
            </motion.div>
          </motion.div>

        
          <div className="text-center sm:text-left">
            <motion.h1
              className="text-3xl sm:text-4xl font-semibold text-white"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            > 
              Sujal Ghorse
            

            </motion.h1>
            

            <motion.p
              className="text-base sm:text-lg text-white font-light mt-1"
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

        {/* Buttons Section */}
        <motion.div
          className="flex flex-wrap justify-center sm:justify-start gap-4 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
        >
          <Link
            href="#contact"
            className="group flex items-center gap-2 px-5 py-3 bg-emerald-600 text-white rounded-full font-medium shadow-md transition-all
          hover:bg-emerald-700 hover:scale-105 active:scale-100 focus:ring-2 focus:ring-emerald-300"
          >
            Contact Me
            <BsArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="/Sujalresume(college).pdf"
            download
            className="group flex items-center gap-2 px-5 py-3 bg-white text-gray-800 rounded-full border border-gray-200 shadow-sm
          hover:bg-gray-100 hover:scale-105 active:scale-100 transition-all"
          >
            Resume
            <HiDownload className="transition-transform group-hover:translate-y-0.5" />
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-11 h-11 bg-white text-gray-800 rounded-full border border-gray-200 shadow-sm
           hover:scale-110 transition-all"
          >
            <BsLinkedin size={20} />
          </a>

          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-11 h-11 bg-white text-gray-800 rounded-full border border-gray-200 shadow-sm
         hover:scale-110 transition-all"
          >
            <BsGithub size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}


//section classes: className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] bg-red-500