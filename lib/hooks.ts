
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Sectionname } from "./types";




export function useSectionInView( sectionName: Sectionname, threshold = 0.7){
     const {ref,inView} = useInView({
    threshold,
   });  
  const {setActiveSection, timeOfLastClick}= useActiveSectionContext();
 useEffect(()=>{
 if(inView && Date.now()-timeOfLastClick > 1000){
    setActiveSection(sectionName)
  }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return{
    ref
  }
            
}