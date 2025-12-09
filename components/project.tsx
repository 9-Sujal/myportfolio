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
