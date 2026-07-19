"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.4);

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-20 sm:mb-28 w-full max-w-212 mx-auto px-4 sm:px-6 scroll-mt-28 text-center"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/10 rounded-xl px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-base"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
