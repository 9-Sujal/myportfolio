import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/sectio-divider";
import Skills from "@/components/skills";
import MiniProj from "@/components/miniProj";

export default function Home() {
  
  return (
    <main className=" flex flex-col items-center px-4">
        <Intro/>
        <SectionDivider/>
        <About/>
        <Projects/>
        <MiniProj/>
        <Skills/>
        <Contact/>

      
    </main>
  );
}
