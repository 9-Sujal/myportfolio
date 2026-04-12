import { Project } from "./types";
import pikachuImg from "../public/pikachu.jpg";
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
    liveLink: "google.com",
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
    title: "Weather Searching",
    description:
      "A simple and interactive weather application that allows users to search for real-time weather information of any city worldwide.",
    image: pikachuImg,
    tags: ["next.js", "Typescript"],
    githubLink: "",
    liveLink: "",
  },
  {
    id: 4,
    title: "Weather Searching",
    description:
      "A simple and interactive weather application that allows users to search for real-time weather information of any city worldwide.",
    image: pikachuImg,
    tags: ["next.js", "Typescript"],
    githubLink: "",
    liveLink: "",
  },
  {
    id: 5,
    title: "Weather Searching",
    description:
      "A simple and interactive weather application that allows users to search for real-time weather information of any city worldwide.",
    image: pikachuImg,
    tags: ["next.js", "Typescript"],
    githubLink: "",
    liveLink: "",
  },
  {
    id: 6,
    title: "Weather Searching",
    description:
      "A simple and interactive weather application that allows users to search for real-time weather information of any city worldwide.",
    image: pikachuImg,
    tags: ["next.js", "Typescript"],
    githubLink: "",
    liveLink: "",
  },
  {
    id: 7,
    title: "Weather Searching",
    description:
      "A simple and interactive weather application that allows users to search for real-time weather information of any city worldwide.",
    image: pikachuImg,
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
    Link: "https://my-blogs-gamma.vercel.app/",
    Github: "https://github.com/9-Sujal/BloggingWebsite",
  },
  {
    title: "FableForge",
    description:
      "Ebook app where the user can read ebooks online. It has a collection of free ebooks and also allows users to upload their own ebooks.",
    tags: ["React", "TypeScript", "MongoDB", "Tailwind", "Redux"],
    imageUrl: ebookImg,
    Link: "",
  },
  {
    title: "URL Shortener",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: urlShortImg,
    Link: "",
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
