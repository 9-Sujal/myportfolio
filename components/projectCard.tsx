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
      className="group relative bg-neutral-900 border border-neutral-700 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col"
    >
      <div className="relative w-full h-40 sm:h-44 overflow-hidden shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-4 flex flex-col justify-between flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
          {project.title}
        </h3>

        <p
          className={`text-xs sm:text-sm text-gray-300 transition-all duration-300 ${
            expanded ? "line-clamp-none" : "line-clamp-2"
          }`}
        >
          {project.description}
        </p>

        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-xs text-blue-400 mt-1 text-left hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-neutral-800 px-2 py-0.5 text-[0.6rem] sm:text-[0.65rem] uppercase tracking-wider text-gray-300 border border-neutral-700 rounded-sm"
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
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition p-1"
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
