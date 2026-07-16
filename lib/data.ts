import { Project } from "./types";
import Rtceditor from "../public/rtceditor.png"

import weatherImg from "../public/weather.png";
import pizzaImg from "../public/image.png";
import ebookImg from "../public/ebook.jpg";
import urlShortImg from "../public/urlshortner.png";
export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Minis", hash: "#miniProj" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
] as const;

// Mini Projects
export const miniProjectsData: Project[] = [
  {
    id: 1,
    title: "WeatherApp",
    description:
      "A simple and interactive weather application that allows users to search for real-time weather information of any city worldwide.",
    image: weatherImg ,
    tags: ["next.js", "Typescript", "shadcn/ui"],
    githubLink: "https://github.com/9-Sujal/weatherApp",
    liveLink: "https://weather-app-lac-eight-11.vercel.app/",
  },
  {
    id: 2,
    title: "pizza ordering app",
    description:
      "A simple and interactive pizza ordering application that allows users to browse menu items, customize their orders, and place them seamlessly.",
    image: pizzaImg,
    tags: ["HTML", "javascript", "tailwind"],
    githubLink: "https://github.com/9-Sujal/Pizza/tree/main",
    liveLink: "https://pizza-beta-black.vercel.app/",
  },
  {
    id: 3,
    title: "URL Shortener",
    description:
      "A simple and interactive URL shortener application that allows users to create short links for long URLs.",
    image: urlShortImg,
    tags: ["next.js", "Typescript"],
    githubLink: "",
    liveLink: "",
  },
 
] as const;

// Main Projects
export const projectsData = [
  {
    title: "Sujal Blogs",
    description:
      "I worked as a full-stack project for 3 months. Here I write my blogs on web development and tech.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "TypeScript"],
    imageUrl: "/working.png",
    Link: "https://sujalblogs.onrender.com/",
    Github: "https://github.com/9-Sujal/BloggingWebsite",
  },
  {
    title: "FableForge",
    description:
      "Ebook app where the user can read ebooks online. It has a collection of free ebooks and also allows users to upload their own ebooks.",
    tags: ["React", "TypeScript", "MongoDB", "Tailwind", "Redux"],
    imageUrl: ebookImg,
    Link: "https://www.fableforge.website/",
  },
  {
    title: "RTCEDITOR",
    description:
      "Real time code editor where users can collaborate and code together in real time. It has a built-in code editor and also allows users to chat with each other.",
    tags: ["React", "JavaScript", "socket.io", "Node.js", "Express"],
    imageUrl: Rtceditor,
    Link: "https://rtc-editor.vercel.app/",
    Github:"https://github.com/9-Sujal/RTCEditor"
  },
] as const;

// Skills
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
