
import { links } from "./lib/data";



export type Sectionname = (typeof links)[number]["name"];

export interface ProjectTag {

  tech: string
}

export interface Project {
  id: number
  title: string
  description: string
  image: string  
  tags: string[]
  liveLink?: string
  githubLink?: string
}
