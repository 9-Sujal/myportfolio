## learned about making gradient background
 today i learned about how to design a gradient bg color using 2 div. 

## making intro section,wanted to do it in my way. 


2.02.10

+ finished with home
  
  2.59.49
  finished projects

  need to make about last
  need to add live links
  

3.07.31
+ use state to add tailwind classes conditionally to only one element at a time. 
+ className={clsx("h-3/4 flex items-center justify-center px-3 py-3 hover:text-gray-950 border border-white rounded-3xl hover:bg-rose-100 transition",{"text-gray-950": activeSection === link.name})}
+ using useState to make home link as default. 

>> <motion.span className='bg-gray-100 rounded-full absolute inset-0 -z-10' 
            layoutId='activeSection'
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30
            }}

            this is used to make animation. 3.13:00


## when you scroll the active section should change for that we will use  intersection observer api.             
 
 >> we need to share one state with different pages and components. 
 but they are to spread out. we can use prop drilling, but they are too spread out so we will use react context api, first. 

 >> make seprate context folder. 
```tsx 
 type Sectionname = (typeof links)[number]["name"];

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProps) {
     const  [activeSection, setActiveSection] = useState<Sectionname>('Home');
    
    
  return children;
}
```
>> we wrote one context api. wrapped our components inside of it. 
```tsx
 <ActiveSectionContextProvider>
       <Header />
       {children}
       </ActiveSectionContextProvider>
       ```


 + to make a client component you need to either write use client or import that thing in another client component to make it client,  3:35:00 
 
 + to consume it in header we can use useContext hook. 



## to change navbar position when scrolling down. we use 
+   const {ref,inView} = useInView(); 
- it is a react-intersection-observer 

```tsx
  const {ref,inView} = useInView();  
  const {setActiveSection}= useActiveSectionContext();
  if(inView){
    setActiveSection("About")
  } 
   ```
  we should  not use update this during rendering otherwise it will be set as default. 

  we should use useEffect hook 


## const  [timeOfLastClick, setTimeOfLastClick] = useState(0); 
+ WE NEED TO TRACK OF THIS TO DISABLE THE OBSERVER TEMPORARILY WHEN USER CLICKS ON A LINK. 

```tsx
 const {ref,inView} = useInView({
    threshold: 0.4,
   });  
  const {setActiveSection, timeOfLastClick}= useActiveSectionContext();
 useEffect(()=>{
 if(inView && Date.now()-timeOfLastClick > 1000){
    setActiveSection("Home")
  }
  }, [inView, setActiveSection, timeOfLastClick])
            ```

+ we want to update this procedure as hook. we will make a new custom hook. 

as const {ref} = useSectionInView("Home"); 