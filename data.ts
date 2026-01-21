
import pikachu from "@/public/pikachu.jpg"
import working from "@/public/working.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { Project } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Minis",
    hash: "#miniProj",
   
  },
  { 
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const miniProjectsData: Project[] = [
  {
    id:1,
    title:"Weather Searching",
    description:"A simple and interactive weather application that allows users to search for real-time weather information of any city worldwide.",
    image:pikachu,
    tags:["next.js","Typescript"],
    githubLink:"github.com",
    liveLink:"google.com",
  },
    {
    id:2,
    title:"Weather Searching",
    description:"A simple and interactive weather application that allows users to search for real-time weather information of any city worldwide.",
    image:pikachu,
    tags:["next.js","Typescript"],
     githubLink:"",
    liveLink:"",

  },
    {
    id:3,
    title:"Weather Searching",
    description:"A simple and interactive weather application that allows users to search for real-time weather information of any city worldwide.",
    image:pikachu,
    tags:["next.js","Typescript"],
     githubLink:"",
    liveLink:"",

  },
    {
    id:4,
    title:"Weather Searching",
    description:"A simple and interactive weather application that allows users to search for real-time weather information of any city worldwide.",
    image:pikachu,
    tags:["next.js","Typescript"],
     githubLink:"",
    liveLink:"",
  },
     {
    id:5,
    title:"Weather Searching",
    description:"A simple and interactive weather application that allows users to search for real-time weather information of any city worldwide.",
    image:pikachu,
    tags:["next.js","Typescript"],
     githubLink:"",
    liveLink:"",
  },
     {
    id:6,
    title:"Weather Searching",
    description:"A simple and interactive weather application that allows users to search for real-time weather information of any city worldwide.",
    image:pikachu,
    tags:["next.js","Typescript"],
     githubLink:"",
    liveLink:"",
  },
   {
    id:7,
    title:"Weather Searching",
    description:"A simple and interactive weather application that allows users to search for real-time weather information of any city worldwide.",
    image:pikachu,
    tags:["next.js","Typescript"],
     githubLink:"",
    liveLink:"",
  },
   {
    id:8,
    title:"Weather Searching",
    description:"A simple and interactive weather application that allows users to search for real-time weather information of any city worldwide.",
    image:pikachu,
    tags:["next.js","Typescript"],
     githubLink:"",
    liveLink:"",
  },
   {
    id:9,
    title:"Weather Searching",
    description:"A simple and interactive weather application that allows users to search for real-time weather information of any city worldwide.",
    image:pikachu,
    tags:["next.js","Typescript"],
     githubLink:"",
    liveLink:"",
  }
 
] as const;

export const projectsData = [
  {
    title: "Sujal Blogs",
    description:
      "I worked as a full-stack project for 3 months.Here i write my blogs on web development and tech.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "TypeScript"],
    imageUrl:working,
    Link: "https://my-blogs-gamma.vercel.app/",
    Github: "https://github.com/9-Sujal/BloggingWebsite",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    Link: "",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    Link: "",
  },
] as const;

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
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;