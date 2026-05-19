"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.7);

  return (
    <motion.section
      ref={ref}
      className="mb-20 sm:mb-28 w-full max-w-180 mx-auto px-4 sm:px-6 text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="text-sm sm:text-base leading-7 sm:leading-8">
        Hi, I&apos;m <strong>Sujal Ghorse</strong>, a passionate and detail-oriented Software
        Developer with a strong foundation in programming and problem-solving. I enjoy building
        practical and elegant solutions using modern tools and best practices.

        During my BTech in Computer Science, I worked on several projects — from full-stack web
        apps to prototypes — where I focused on writing clean, efficient, and maintainable code.
        My frontend design sense helps me craft intuitive user interfaces, and I&apos;m a quick
        learner who loves exploring new technologies. My core skills include{" "}
        <strong>JavaScript, React.js, Next.js,</strong> and <strong>Node.js</strong>. I am
        eager to contribute to impactful projects, learn from experienced teams, and grow as a
        developer.
      </p>
    </motion.section>
  );
}
