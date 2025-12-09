"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id='contact'
    className='mb-20 sm:mb-28 w-[min(100%, 38rem)]'>
       <SectionHeading>
        Contact me
       </SectionHeading>
       <p className='text-gray-700  -mt-6 ' >Please contact me directly at <a href='mailto:sujalghorse9@gmail.com'>sujalghorse9@gmail.com</a>{" "}or through this form,</p>

       <form 
       onSubmit={async(e)=>{
        e.preventDefault();

        const email = (e.target as HTMLFormElement).email.value;
        const message = (e.target as HTMLFormElement).message.value;

        const response = await fetch('/api/contact', {
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({ email, message }),
        });

        const data = await response.json();
        if(response.status === 429){
          alert("You are sending messages too frequently. Please wait a while before trying again.");
          return;
        }
        if(response.ok){
          alert("Message sent successfully!");
          (e.target as HTMLFormElement).reset();

        }else{
          alert(data.error || "Something went wrong. Please try again later.");
        }

       }}
        className='mt-10 rounded-lg border border-black/10 flex flex-col  '>

        <input name='email' type='email' placeholder="Email" required className='h-15 rounded-lg border border-black border-dotted p-4  '/>
        <textarea name='message' placeholder="Your message" required className='h-52 my-3 rounded-lg border border-black p-4 border-dotted '/>
        <button 
        className=' group flex h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all items-center justify-center gap-2 focus:scale-110 hover:scale-110 active-scale-105  hover:bg-gray-950 ' 
        type='submit' >Submit <FaPaperPlane className='text-xs opacity-70  transition-all '/></button>
       </form>
    </section>
  )
}
