import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const About = () => {
    const [open, setOpen] = useState(null)
    const toggle=(index)=>{
        setOpen(open===index?null:index)
    }
      const frontendSkills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
     { name: "Tailwind", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
  ]

  const backendSkills = [
    { name: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
  ]

  const toolsSkills = [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
    { name: "Render", icon: "https://cdn-1.webcatalog.io/catalog/render/render-icon-filled-256.png?v=1714775659827" },
  ]
    const data=[
        {
            title:"Introduction",
            content:"Hi, I’m Udhay Kiran Ande. I’m a MERN stack developer who enjoys building responsive, user-friendly web applications and continuously improving my skills."
        },{
            title:"Education",
            content:"Completed MCA at Veer Narmad South Gujarat University."
        },{
  title: "Skills",
  content: (
    <div className="flex flex-wrap gap-4">

      {/* FRONTEND */}
      <div className="group">
        <h3 className="text-lg font-semibold text-white mb-2" style={{marginBottom:"4px"}}>
          🎨 Frontend
        </h3>
          <div    
              className="
             flex flex-wrap gap-3
              "
                style={{padding:"2px 5px"}}
            >
             {frontendSkills.map((skill,i)=>(
          <div key={i} className="flex flex-wrap items-center gap-2
           rounded flex flex-wrap 
              rounded-lg
             bg-white/5
              border border-white/20
              backdrop-blur-md
              hover:scale-110 
              hover:bg-[#6d536f72] hover:text-white
              transition-all duration-300
              cursor-pointer
              shadow-md hover:shadow-black/50
          "
          style={{padding:"5px 6px"}}>
                <img src={skill.icon} className="w-5 h-5 "/>
                {skill.name}
              </div>
         ))
         }
           
          
        </div>
      </div>

      {/* BACKEND */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-2" style={{marginBottom:"4px"}}>
          ⚙️ Backend
        </h3>
         <div    
              className="
             flex flex-wrap gap-3
              "
               style={{padding:"2px 5px"}}
            >
             {backendSkills.map((skill,i)=>(
          <div key={i} className="flex flex-wrap items-center gap-2
           rounded p-1 flex flex-wrap 
              px-4 py-2 rounded-lg
             bg-white/5
              border border-white/20
              backdrop-blur-md
              hover:scale-110 
              hover:bg-[#6d536f72] hover:text-white
              transition-all duration-300
              cursor-pointer
              shadow-md hover:shadow-black/50
          "
          style={{padding:"5px 6px"}}>
                <img src={skill.icon} className="w-5 h-5 "/>
                {skill.name}
              </div>
         ))
         }
           
          
        </div>
      </div>

      {/* TOOLS */}
      <div>
        <h3 className="text-lg font-semibold text-white" style={{marginBottom:"2px"}}>
          🛠 Tools
        </h3>
        <div    
              className="
            flex flex-wrap gap-3
              "
               style={{padding:"2px 8px"}}
            >
             {toolsSkills.map((skill,i)=>(
          <div key={i} className="flex flex-wrap items-center gap-2
           rounded p-1 flex flex-wrap 
              px-4 py-2 rounded-lg
             bg-white/5
              border border-white/20
              backdrop-blur-md
              hover:scale-110 
              hover:bg-[#6d536f72] hover:text-white
              transition-all duration-300
              cursor-pointer
              shadow-md hover:shadow-black/50
          "
          style={{padding:"5px 8px"}}>
                <img src={skill.icon} className="w-5 h-5 "/>
                {skill.name}
              </div>
         ))
         }
           
          
        </div>
      </div>

    </div>
  )
},{
            title:"Projects",
            content:(
              <div>
                <Link 
        to="/project" 
        style={{marginTop:"1rem",marginLeft:""}}
        className="md:text-[18px]  text-blue-950 font-semibold  rounded-lg transition"
      >
       <b>Click me</b> to View Projects
      </Link>
              </div>
            )
          }
    ]
  return (
    <div className="flex min-h-screen ">
  {/* SIDEBAR AT MOBILE */}
<div className="absolute top-6 left-0 w-full flex justify-around items-center  backdrop-blur-md py3 z-50 md:hidden ">
  <ul className="
text-[#b0b2c3]
flex flex-row md:flex-col md:w-11
gap-3 md:gap-4
items-center justify-center
bg-white/10 shadow-md shadow-black/40
rounded-lg
" style={{padding:"10px 18px"}}>

<li className="cursor-pointe">
  <Link to="/" className="block">
    <svg
      className="w-7 text-gray-400 transition-colors duration-300 hover:text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
                <path
                  fill="currentColor"
                  d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
                </Link>
 </li>
 <li>
     <Link to="/about" className="block">
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
               
                <path
                fill="currentColor"
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                />
              </svg>
           </Link>
 </li>
          {/* <li>
            <Link to="/skill" className="block">
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
              
                <path
                  fill="currentColor"
                  d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                />
              </svg>
            </Link>
          </li> */}
          <li>
            <Link to="/project" className="block">
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
              
                <path
                  fill="currentColor"
                  d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
                />
              </svg>
               </Link>
            
          </li>
          <li>
             <Link to="/contact" className="block">
              <svg
                className="w-7 hover:text-white"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
           </Link>
          </li>

</ul>
</div>
  
       {/* SIDEBAR AT DESKTOP */}
<div id="side" className="
hidden md:flex fixed top-1/2 left-3 -translate-y-1/2 z-50
flex-col gap-4  rounded-lg
" style={{padding:"10px",marginTop:"30px"}}>
  
<ul className="
text-[#b0b2c3]
flex flex-row md:flex-col md:w-11
gap-3 md:gap-4
items-center justify-center
bg-white/10 shadow-md shadow-black/40
rounded-lg
" style={{padding:"10px 25px"}}>

<li className="cursor-pointer">
  <Link to="/" className="block">
    <svg
      className="w-7 text-gray-400 transition-colors duration-300 hover:text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
                <path
                  fill="currentColor"
                  d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
                </Link>
 </li>
 <li>
     <Link to="/about" className="block">
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
               
                <path
                fill="currentColor"
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                />
              </svg>
           </Link>
 </li>
          {/* <li className="cursor-pointer">
            <Link to="/skill" className='block'>
              <svg
                className="w-7 text-gray-400 transition-colors duration-300 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
              
                <path
                  fill="currentColor"
                  d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                />
              </svg>
           </Link>
          </li> */}
          <li>
              <Link to="/project" className='block'>
              <svg
                className="w-7 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
              
                <path
                  fill="currentColor"
                  d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
                />
              </svg>
           </Link>
          </li>
          <li>
           <Link to="/contact" className="block">
              <svg
                className="w-7 hover:text-white"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
            </Link>
          </li>
</ul>
</div>

        {/* Main Content */}
       <div className="flex flex-1 flex-col items-center justify-center gap-6 animate-[fadeIn_1s_ease] relative bg-[#412c43e9]">
       <div className="text-2xl font-semibold md:text-[35px] lg:text-[30px]" style={{}}>
       <h2 className="text-3xl md:text-4xl text-white/50  md:tracking-wider drop-shadow-lg " style={{marginTop:"40px"}}>
Discover Me
</h2>
       </div>
       
       <div className="flex items-center justify-center w-full ">
       <div className="w-[80%]  md:w-[500px] lg:w-[650px] flex flex-col gap-1.5  " >
            {data.map((item,index)=>(
        <div key={index} className="rounded-lg  overflow-hidden shadow-lg shadow-black/20  backdrop-blur-md
  border border-white/20 transition-all duration-300 hover:scale-[1.02]">
              <button onClick={()=>toggle(index)}
              className="w-full flex justify-between items-center bg-white/30  hover:bg-white/40 backdropblur-md text-md md:text-[17.5px] transition-all" style={{padding:"8px 20px", active:""}}>
              {item.title}
                    <span className={`text-2xl tran transition-all duration-300 ease-in-out ${open===index?"rotate-45 grid-rows-[1fr] opacity-100":""}`}>+</span>
                    </button>

                    {open===index &&(
                        <div className={` text-black/80 overflow-hidden transition-all duration-500 ${
open===index ? " opacity-100 p-4" : "max-h-0 opacity-0"
} bg-white/20 text-sm md:text-[17px]`}style={{padding:"15px"}}>{item.content}</div>
                    )}
                </div>
            ))}
         </div>
        </div>
       </div>
    </div>
  )
}

export default About