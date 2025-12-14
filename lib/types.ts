import { StaticImageData } from "next/image";
import { links } from "./data";



export type Sectionname = (typeof links)[number]["name"];

export interface ProjectTag {

  tech: string
}

export interface Project {
  id: number
  title: string
  description: string
  image: StaticImageData 
  tags: string[]
  liveLink?: string; 
  githubLink?: string

}
