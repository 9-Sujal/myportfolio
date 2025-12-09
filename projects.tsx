"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks'


export default function Projects() {

  const {ref} = useSectionInView("Projects", 0.5); 

            
  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
        <SectionHeading >
           My projects
        </SectionHeading>
        <div>
            {
                projectsData.map((project, index)=>(
                    //react fragment is used when you need to add a key but avoid extra elements to avoid unnecessary dom wrapping
                    <React.Fragment key={index}> 
                      <Project {...project}/>
                    </React.Fragment>
                  
                ))
            }
        </div>

    </section>
  )
}
