"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-999 fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] sm:w-auto flex justify-center">
      
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="backdrop-blur-md border bg-linear-to-tr from-emerald-700 to-slate-900 border-emerald-500 shadow-md rounded-full px-4 py-2 sm:px-8 sm:py-3 flex items-center justify-center gap-3 sm:gap-8 overflow-x-auto w-full scrollbar-hide "
      >
        {links.map((link) => (
          <Link
            key={link.hash}
            href={link.hash}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
            className={clsx(
               "relative text-[0.75rem] sm:text-[0.95rem] font-medium text-white transition-colors duration-300 whitespace-nowrap shrink-0",
              activeSection === link.name
                ? "text-white/60"
                : "hover:text-white/30"
            )}
          >
            {link.name}
            {activeSection === link.name && (
              <motion.span
                layoutId="activeSection"
              className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-blue-300 rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                }}
              />
            )}
          </Link>
        ))}
      </motion.nav>
    </header>
  );
}




